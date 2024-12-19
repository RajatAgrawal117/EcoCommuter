const express = require('express');
const AdminController = require('../controllers/AdminController');
const {authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

// Admin routes
router.get('/rewards', authenticateToken, AdminController.getRewards); // Manage rewards
router.get('/pollution-data', authenticateToken, AdminController.getPollutionData); // Monitor pollution data
router.get('/analytics', authenticateToken, AdminController.getAnalytics); // View app analytics
router.get('/users', authenticateToken, AdminController.listAllUsers);
module.exports = router;
