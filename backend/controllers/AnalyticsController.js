const Analytics = require('../models/Analytics');
const Commute = require('../models/Commute');
const User = require('../models/User');

const AnalyticsController = {
    // Get weekly commute analytics
    getCommuteAnalytics: async (req, res) => {
        try {
            const analytics = await Analytics.find({ userId: req.user.id })
                .populate('commuteId')
                .sort({ createdAt: -1 });

            res.status(200).json(analytics);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch commute analytics.' });
        }
    },

    // Save commute analytics
    saveCommuteAnalytics: async (commuteData) => {
        try {
            const { userId, commuteId, totalExposure, pointsEarned } = commuteData;

            const analytics = new Analytics({
                userId,
                commuteId,
                totalExposure,
                pointsEarned
            });

            await analytics.save();
        } catch (error) {
            console.error('Error saving commute analytics:', error);
        }
    }
};

module.exports = AnalyticsController;
