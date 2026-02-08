import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'), // 5 requests per window
  message: {
    success: false,
    message: 'Too many contact form submissions. Please try again later.',
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (_req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again in 15 minutes.',
    });
  },
});
