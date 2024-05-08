import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// Define routes with version prefix
router.post('/register', register);
router.post('/login', login);

export default router;
