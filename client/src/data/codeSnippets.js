export const codeSnippets = [
  {
    id: "python-ml",
    language: "python",
    title: "Image Classification with TensorFlow",
    description: "Building a CNN model for image classification",
    code: `import tensorflow as tf
from tensorflow.keras import layers, models

# Build CNN model
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

# Compile model
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train model
history = model.fit(
    train_data,
    epochs=20,
    validation_data=val_data
)`
  },
  {
    id: "react-component",
    language: "javascript",
    title: "React Component with Hooks",
    description: "Modern React component using hooks and context",
    code: `import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Fetch additional project data
    const fetchData = async () => {
      const response = await fetch(\`/api/projects/\${project.id}\`);
      const data = await response.json();
      // Handle data
    };
    fetchData();
  }, [project.id]);

  return (
    <div
      className={\`project-card \${theme}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {isHovered && <div className="details">View Details</div>}
    </div>
  );
};

export default ProjectCard;`
  },
  {
    id: "nodejs-api",
    language: "javascript",
    title: "Express.js API Endpoint",
    description: "RESTful API with validation and error handling",
    code: `import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('message').trim().isLength({ min: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;
      
      // Save to database
      const contact = await Contact.create({ name, email, message });
      
      // Send email
      await sendEmail(contact);
      
      res.status(201).json({
        success: true,
        message: 'Message sent successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  }
);

export default router;`
  }
];
