//../controllers/Commute.js
const Commute = require('../models/Commute');

// Controller to handle adding a commute
exports.addCommute = async (req, res) => {
  try {
    const { route, mode, duration } = req.body;

    // Create a new commute document
    const commute = new Commute({
      user: req.user.userId, // Assuming `verifyToken` sets `req.user`
      route,
      mode,
      duration,
      riskScore: calculateRiskScore(duration), // Mock logic for calculating risk
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
};

// Controller to fetch all commutes for a user
exports.getUserCommutes = async (req, res) => {
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
};
async function getRecentCommutes(req, res) {
  try {
      const userId = req.user.id;
      const recentCommutes = await Commute.find({
          userId,
          date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }, // Last 30 days
      }).sort({ date: -1 });
      res.status(200).json(recentCommutes);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve recent commutes.' });
  }
}

module.exports = { getRecentCommutes };
// Mock function to calculate risk score
const calculateRiskScore = (duration) => {
  return duration * 1.5; // Example logic
};
