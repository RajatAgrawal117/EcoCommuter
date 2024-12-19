//../routes/commute.js
const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware'); // Auth Middleware
const { addCommute, getUserCommutes,getRecentCommutes } = require('../controllers/Commute'); // Controller
const router = express.Router();

// Add commute (POST)
router.post('/', authenticateToken, addCommute);

// Get all user commutes (GET)
router.get('/', authenticateToken, getUserCommutes);
router.get('/recent', authenticateToken, getRecentCommutes);
module.exports = router;
