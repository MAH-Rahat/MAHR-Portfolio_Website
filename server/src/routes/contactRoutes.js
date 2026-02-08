import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';
import { contactValidationRules, validate } from '../middleware/validator.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/contact - Submit contact form
router.post(
  '/',
  contactLimiter,
  contactValidationRules,
  validate,
  submitContact
);

// GET /api/contact - Get all contacts (admin only - add auth middleware later)
router.get('/', getContacts);

export default router;
