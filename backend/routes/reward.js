const express = require('express');
const RewardController = require('../controllers/RewardController');
const {authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

// Assign points
router.post('/assign', authenticateToken, RewardController.assignPoints);

// Redeem points
router.post('/redeem', authenticateToken, RewardController.redeemPoints);
router.get('/', authenticateToken, RewardController.getAvailableRewards);
module.exports = router;
