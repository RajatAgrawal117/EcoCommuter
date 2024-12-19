const Admin = require('../models/Admin');
const User = require('../models/User');

const AdminController = {
    
    // Manage reward system
    getRewards: async (req, res) => {
        try {
            const rewards = await Admin.find().select('rewardData');
            res.status(200).json(rewards);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch reward data.' });
        }
    },

    // Monitor pollution data trends
    getPollutionData: async (req, res) => {
        try {
            const pollutionData = await Admin.find().select('pollutionData');
            res.status(200).json(pollutionData);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch pollution data.' });
        }
    },

    // View app analytics
    getAnalytics: async (req, res) => {
        try {
            const analytics = await Admin.find().select('analyticsData');
            res.status(200).json(analytics);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch analytics data.' });
        }
    },
    listAllUsers: async (req, res) => {
        try {
            // Verify if the requester is an admin by checking the Admin model
            const isAdmin = await Admin.findOne({ _id: req.user.id });
            if (!isAdmin) {
                return res.status(403).json({ success: false, message: 'Access denied: Admin privileges required' });
            }
    
            // Fetch all users from the database, excluding sensitive fields like passwords
            const users = await User.find({}, { password: 0 });
            res.status(200).json({ success: true, users });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Unable to fetch users', error: error.message });
        }
    },
    
};

module.exports = AdminController;



