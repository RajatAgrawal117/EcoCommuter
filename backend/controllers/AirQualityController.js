const express = require('express');
const axios = require('axios');
require("dotenv").config();
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5/air_pollution';

const AirQualityController = {
    getAirQuality: async (req, res) => {
        const { start, destination } = req.body;

        if (!start || !destination) {
            return res.status(400).json({ error: 'Start and destination coordinates are required.' });
        }

        try {
            const responseStart = await axios.get(`${BASE_URL}?lat=${start.lat}&lon=${start.lon}&appid=${OPENWEATHER_API_KEY}`);
            const responseDestination = await axios.get(`${BASE_URL}?lat=${destination.lat}&lon=${destination.lon}&appid=${OPENWEATHER_API_KEY}`);

            const airQualityDataStart = responseStart.data;
            const airQualityDataDestination = responseDestination.data;

            const result = {
                route: [
                    { 
                        lat: start.lat, 
                        lon: start.lon, 
                        pollution_level: airQualityDataStart.list[0].main.aqi 
                    },
                    { 
                        lat: destination.lat, 
                        lon: destination.lon, 
                        pollution_level: airQualityDataDestination.list[0].main.aqi 
                    }
                ],
                total_pollution: airQualityDataStart.list[0].main.aqi + airQualityDataDestination.list[0].main.aqi,
                suggested_mode: "Cycle"  // This could be dynamically determined based on pollution levels
            };

            res.status(200).json(result);
        } catch (error) {
            console.error(`Error fetching air quality data: ${error.message}`);
            res.status(500).json({ error: 'Unable to fetch air quality data.' });
        }
    }
};

module.exports = AirQualityController;
