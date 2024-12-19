const express = require('express');
const AlternateRouteController = require('../controllers/AlternateRouteController');
const {authenticateToken} = require('../middleware/authMiddleware');

const router = express.Router();

// Suggest alternate routes
router.post('/suggest', authenticateToken, AlternateRouteController.suggestAlternateRoutes);

module.exports = router;
