const express = require('express');
const AirQualityController = require('../controllers/AirQualityController');

const router = express.Router();

// Define the route for air quality data
router.post('/air-quality', AirQualityController.getAirQuality);

module.exports = router;
