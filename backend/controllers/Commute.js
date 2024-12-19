const Commute = require('../models/Commute');

const CommuteController = {
  // Mock function to calculate risk score
  calculateRiskScore: (duration) => {
    return duration * 1.5; // Example logic
  },

  // Add commute
  addCommute: async (req, res) => {
    try {
      const { route, mode, duration } = req.body;

      const commute = new Commute({
        user: req.user.userId, // Assuming `authenticateToken` sets `req.user`
        route,
        mode,
        duration,
        riskScore: CommuteController.calculateRiskScore(duration),
      });

      await commute.save();
      return res.status(201).json({
        success: true,
        commute,
        message: 'Commute added successfully.',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Error adding commute.',
        error: error.message,
      });
    }
  },

  // Get all user commutes
  getUserCommutes: async (req, res) => {
    try {
      const commutes = await Commute.find({ user: req.user.userId }).sort('-createdAt');
      return res.status(200).json({
        success: true,
        commutes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Error fetching commutes.',
        error: error.message,
      });
    }
  },

  // Get recent commutes
  getRecentCommutes: async (req, res) => {
    try {
      const userId = req.user.userId; // Assuming `authenticateToken` sets `req.user`
      const recentCommutes = await Commute.find({
        user: userId,
        date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }, // Last 30 days
      }).sort({ date: -1 });

      return res.status(200).json({
        success: true,
        recentCommutes,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve recent commutes.',
        error: error.message,
      });
    }
  },
};

module.exports = CommuteController;
