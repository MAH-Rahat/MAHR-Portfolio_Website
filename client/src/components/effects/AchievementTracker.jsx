import { useState, useEffect } from 'react';
import { FaTrophy, FaStar, FaMedal, FaAward, FaGem } from 'react-icons/fa';

const AchievementTracker = () => {
  const [achievements, setAchievements] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);

  const achievementsList = [
    {
      id: 'first_visit',
      name: 'First Steps',
      description: 'Visited the portfolio for the first time',
      icon: FaStar,
      color: 'text-yellow-500',
      points: 10
    },
    {
      id: 'explorer',
      name: 'Explorer',
      description: 'Visited all sections',
      icon: FaTrophy,
      color: 'text-blue-500',
      points: 25
    },
    {
      id: 'game_player',
      name: 'Game Master',
      description: 'Played the Snake game',
      icon: FaMedal,
      color: 'text-purple-500',
      points: 15
    },
    {
      id: 'high_scorer',
      name: 'High Scorer',
      description: 'Scored 100+ in Snake game',
      icon: FaAward,
      color: 'text-green-500',
      points: 50
    },
    {
      id: 'easter_egg_hunter',
      name: 'Easter Egg Hunter',
      description: 'Found an easter egg',
      icon: FaGem,
      color: 'text-pink-500',
      points: 20
    },
    {
      id: 'konami_master',
      name: 'Konami Master',
      description: 'Entered the Konami Code',
      icon: FaTrophy,
      color: 'text-red-500',
      points: 30
    },
    {
      id: 'curious_mind',
      name: 'Curious Mind',
      description: 'Spent 5+ minutes on the site',
      icon: FaStar,
      color: 'text-cyan-500',
      points: 15
    },
    {
      id: 'social_butterfly',
      name: 'Social Butterfly',
      description: 'Clicked on social media links',
      icon: FaMedal,
      color: 'text-indigo-500',
      points: 10
    }
  ];

  useEffect(() => {
    // Load achievements from localStorage
    const saved = localStorage.getItem('portfolio_achievements');
    if (saved) {
      setAchievements(JSON.parse(saved));
    } else {
      // First visit achievement
      unlockAchievement('first_visit');
    }

    // Track time spent
    const startTime = Date.now();
    const timeTracker = setInterval(() => {
      const timeSpent = (Date.now() - startTime) / 1000 / 60; // minutes
      if (timeSpent >= 5) {
        unlockAchievement('curious_mind');
        clearInterval(timeTracker);
      }
    }, 10000);

    // Track section visits
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const visitedSections = new Set();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visitedSections.add(entry.target.id);
          if (visitedSections.size >= sections.length) {
            unlockAchievement('explorer');
          }
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Listen for custom achievement events
    const handleAchievement = (e) => {
      unlockAchievement(e.detail.achievementId);
    };
    window.addEventListener('achievement', handleAchievement);

    return () => {
      clearInterval(timeTracker);
      observer.disconnect();
      window.removeEventListener('achievement', handleAchievement);
    };
  }, []);

  const unlockAchievement = (achievementId) => {
    const saved = JSON.parse(localStorage.getItem('portfolio_achievements') || '[]');
    
    // Check if already unlocked
    if (saved.includes(achievementId)) return;

    // Add to unlocked achievements
    const updated = [...saved, achievementId];
    localStorage.setItem('portfolio_achievements', JSON.stringify(updated));
    setAchievements(updated);

    // Show notification
    const achievement = achievementsList.find(a => a.id === achievementId);
    if (achievement) {
      setCurrentAchievement(achievement);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }
  };

  const totalPoints = achievements.reduce((sum, id) => {
    const achievement = achievementsList.find(a => a.id === id);
    return sum + (achievement?.points || 0);
  }, 0);

  return (
    <>
      {/* Achievement Notification */}
      {showNotification && currentAchievement && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in-right">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg shadow-2xl border-2 border-yellow-300 max-w-sm">
            <div className="flex items-start gap-3">
              <div className={`text-3xl ${currentAchievement.color} bg-white rounded-full p-2`}>
                <currentAchievement.icon />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <FaTrophy className="text-yellow-200" />
                  <span className="font-bold text-sm">Achievement Unlocked!</span>
                </div>
                <h4 className="font-bold text-lg">{currentAchievement.name}</h4>
                <p className="text-sm opacity-90">{currentAchievement.description}</p>
                <p className="text-xs mt-1 font-semibold">+{currentAchievement.points} points</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Progress Badge (Optional - can be shown in FAB menu) */}
      <div className="hidden">
        <div className="text-sm">
          <p className="font-bold">Achievements: {achievements.length}/{achievementsList.length}</p>
          <p>Total Points: {totalPoints}</p>
        </div>
      </div>
    </>
  );
};

// Helper function to trigger achievements from other components
export const triggerAchievement = (achievementId) => {
  window.dispatchEvent(new CustomEvent('achievement', { detail: { achievementId } }));
};

export default AchievementTracker;
