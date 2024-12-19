const express = require('express');
const AnalyticsController = require('../controllers/AnalyticsController');
const {authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

// Get commute analytics
router.get('/commutes', authenticateToken, AnalyticsController.getCommuteAnalytics);

module.exports = router;
