const express = require('express');
const CommuteController = require('../controllers/Commute');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Commute routes
router.post('/', authenticateToken, CommuteController.addCommute); // Add commute
router.get('/', authenticateToken, CommuteController.getUserCommutes); // Get all user commutes
router.get('/recent', authenticateToken, CommuteController.getRecentCommutes); // Get recent commutes

module.exports = router;
