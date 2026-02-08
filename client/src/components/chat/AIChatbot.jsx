import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm AH Rahat's AI assistant. Ask me about his skills, experience, or projects!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Simple AI response logic
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Greetings
    if (message.match(/^(hi|hello|hey|greetings)/)) {
      return "Hello! I'm here to help you learn about AH Rahat. What would you like to know?";
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return "AH Rahat specializes in:\n\n• AI & Machine Learning (TensorFlow, PyTorch, OpenCV)\n• Full-Stack Development (MERN Stack)\n• Computer Vision & Deep Learning\n• Python, JavaScript, TypeScript\n• React.js, Node.js, Express.js\n\nWant to know more about any specific skill?";
    }

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return "AH Rahat has 5+ years of professional experience including:\n\n• Full-Stack AI Engineer\n• Computer Vision Specialist\n• MERN Stack Developer\n• Graphic Designer & Business Strategist\n\nHe's completed 20+ projects across various domains!";
    }

    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('work sample')) {
      return "AH Rahat has worked on exciting projects including:\n\n• AI-powered applications\n• Computer Vision systems\n• Full-stack web applications\n• Machine Learning models\n\nCheck out the Projects section on this website to see detailed examples!";
    }

    // Education
    if (message.includes('education') || message.includes('university') || message.includes('degree') || message.includes('study')) {
      return "AH Rahat is currently pursuing a B.Sc. in Computer Science and Engineering at BRAC University, Dhaka, Bangladesh. He combines academic knowledge with hands-on professional experience.";
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach') || message.includes('hire')) {
      return "You can reach AH Rahat at:\n\n📧 Email: ashrafulhossainrahat@gmail.com\n📱 Phone: +880 1791-441041\n💼 LinkedIn: linkedin.com/in/ah-rahat\n\nOr use the contact form on this website!";
    }

    // Location
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return "AH Rahat is based in Dhaka, Bangladesh. He's available for remote work and collaborations worldwide!";
    }

    // AI/ML specific
    if (message.includes('ai') || message.includes('machine learning') || message.includes('deep learning') || message.includes('computer vision')) {
      return "AH Rahat specializes in AI and Computer Vision with expertise in:\n\n• TensorFlow & PyTorch\n• OpenCV for image processing\n• Deep Learning models\n• Neural Networks\n• Data Science (Pandas, NumPy, Scikit-learn)\n\nHe's passionate about building AI solutions that create real-world impact!";
    }

    // Web Development
    if (message.includes('web') || message.includes('mern') || message.includes('react') || message.includes('node')) {
      return "AH Rahat is proficient in full-stack web development:\n\n• Frontend: React.js, HTML5, CSS3, Tailwind\n• Backend: Node.js, Express.js\n• Database: MongoDB\n• Full MERN Stack expertise\n\nHe builds modern, responsive, and performant web applications!";
    }

    // Availability
    if (message.includes('available') || message.includes('hiring') || message.includes('freelance')) {
      return "AH Rahat is open to exciting opportunities! For project inquiries, collaborations, or job opportunities, please use the contact form below or email him directly at ashrafulhossainrahat@gmail.com";
    }

    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Feel free to ask anything else about AH Rahat's work and expertise. 😊";
    }

    // Complex or unknown queries
    return "That's a great question! For detailed discussions or specific inquiries, I recommend reaching out to AH Rahat directly through the contact form on this website or via email at ashrafulhossainrahat@gmail.com. He'll be happy to help!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getAIResponse(inputValue),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9998] w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="robot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaRobot size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 z-[9997] w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-bold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me about AH Rahat</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot size={16} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser size={16} className="text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaRobot size={16} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
