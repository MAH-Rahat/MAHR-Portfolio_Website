import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import AIShowcase from './components/sections/AIShowcase';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import BackToTop from './components/layout/BackToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import MatrixRain from './components/effects/MatrixRain';
import NeuralNetwork from './components/effects/NeuralNetwork';
import FloatingActionButton from './components/common/FloatingActionButton';
import DataStream from './components/effects/DataStream';
import CircuitBoard from './components/effects/CircuitBoard';
import EasterEggs from './components/effects/EasterEggs';
import HolographicOverlay from './components/effects/HolographicOverlay';
import AchievementTracker from './components/effects/AchievementTracker';
import AIChatbot from './components/chat/AIChatbot';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-x-hidden">
          {/* AI Background Effects - Layered for depth with very low opacity */}
          <CircuitBoard opacity={0.02} lineColor="#22d3ee" />
          <MatrixRain density={0.3} speed={1} opacity={0.03} />
          <NeuralNetwork nodeCount={25} connectionOpacity={0.05} />
          <HolographicOverlay intensity="low" />
          <DataStream position="left" speed={1.5} />
          <DataStream position="right" speed={1.2} />
          
          <ScrollProgressBar />
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <AIShowcase />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
          
          {/* Floating Action Button with Game */}
          <FloatingActionButton />
          
          {/* Easter Eggs */}
          <EasterEggs />
          
          {/* Achievement Tracker */}
          <AchievementTracker />
          
          {/* AI Chatbot */}
          <AIChatbot />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
