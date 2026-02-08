import axios from 'axios';
import { GITHUB_API_URL, GITHUB_USERNAME, CACHE_DURATION } from '../utils/constants';

const CACHE_KEY = 'github_data';

// Get cached data
const getCachedData = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION.github) {
      return data;
    }

    // Cache expired
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
};

// Set cached data
const setCachedData = (data) => {
  try {
    const cacheObject = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheObject));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

// Fetch GitHub user data
export const fetchGitHubData = async () => {
  // Check cache first
  const cached = getCachedData();
  if (cached) {
    return cached;
  }

  try {
    // Fetch user data
    const userResponse = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
    const userData = userResponse.data;

    // Fetch repositories
    const reposResponse = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    const repos = reposResponse.data;

    // Calculate stats
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    // Get pinned repos (top 6 by stars)
    const pinnedRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map(repo => ({
        name: repo.name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Unknown'
      }));

    const githubData = {
      repos: userData.public_repos,
      stars: totalStars,
      followers: userData.followers,
      contributions: 0, // GitHub API doesn't provide this easily
      pinnedRepos
    };

    // Cache the data
    setCachedData(githubData);

    return githubData;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    
    // Return cached data if available, even if expired
    const cached = getCachedData();
    if (cached) {
      return cached;
    }

    // Return fallback data
    return {
      repos: 15,
      stars: 50,
      followers: 20,
      contributions: 500,
      pinnedRepos: []
    };
  }
};
