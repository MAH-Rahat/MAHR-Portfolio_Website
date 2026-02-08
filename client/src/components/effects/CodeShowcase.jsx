import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPytorch } from 'react-icons/si';

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const codeExamples = [
    {
      title: 'Computer Vision',
      icon: SiTensorflow,
      language: 'Python',
      color: 'from-orange-500 to-red-500',
      code: `import tensorflow as tf
import cv2

# Load pre-trained model
model = tf.keras.models.load_model('vision_model.h5')

# Process image
image = cv2.imread('input.jpg')
processed = preprocess_image(image)

# Make prediction
prediction = model.predict(processed)
result = decode_prediction(prediction)

print(f"Detected: {result}")`,
    },
    {
      title: 'Deep Learning',
      icon: SiPytorch,
      language: 'Python',
      color: 'from-red-500 to-pink-500',
      code: `import torch
import torch.nn as nn

class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(784, 256),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(256, 10)
        )
    
    def forward(self, x):
        return self.layers(x)

model = NeuralNetwork()`,
    },
    {
      title: 'React Frontend',
      icon: FaReact,
      language: 'JavaScript',
      color: 'from-blue-500 to-cyan-500',
      code: `import { useState, useEffect } from 'react';

const AIComponent = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchAIData().then(setData);
  }, []);
  
  return (
    <div className="ai-container">
      {data && <AIVisualization data={data} />}
    </div>
  );
};

export default AIComponent;`,
    },
    {
      title: 'Node.js Backend',
      icon: FaNodeJs,
      language: 'JavaScript',
      color: 'from-green-500 to-teal-500',
      code: `const express = require('express');
const tf = require('@tensorflow/tfjs-node');

const app = express();

app.post('/predict', async (req, res) => {
  const model = await tf.loadLayersModel('model.json');
  const input = tf.tensor(req.body.data);
  const prediction = model.predict(input);
  
  res.json({ result: prediction.dataSync() });
});

app.listen(3000);`,
    },
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {codeExamples.map((example, index) => (
          <motion.button
            key={example.title}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
              activeTab === index
                ? 'bg-gradient-to-r ' + example.color + ' text-white shadow-lg'
                : 'bg-gray-800 dark:bg-gray-900 text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <example.icon className="text-lg" />
            {example.title}
          </motion.button>
        ))}
      </div>

      {/* Code Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gray-900 dark:bg-black rounded-xl overflow-hidden border border-gray-700 dark:border-gray-800"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 dark:bg-gray-950 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-400 text-sm font-mono ml-2">
                {codeExamples[activeTab].language}
              </span>
            </div>
            <motion.div
              className="flex items-center gap-2 text-xs text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>AI Active</span>
            </motion.div>
          </div>

          {/* Code Content */}
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono">
              <code className="text-gray-300">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CodeShowcase;
