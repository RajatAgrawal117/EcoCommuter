const User = require('../models/User');

const UserController = {
    // Fetch user points
    getUserPoints: async (req, res) => {
        try {
            const user = await User.findById(req.user.id);  // Extract user from token
            res.status(200).json({ points: user.points });
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch user points.' });
        }
    },

    // Update user points
    updateUserPoints: async (req, res) => {
        const { points } = req.body;
        
        try {
            const user = await User.findById(req.user.id);  // Extract user from token
            user.points = points;
            await user.save();
            res.status(200).json({ points: user.points });
        } catch (error) {
            res.status(500).json({ error: 'Unable to update user points.' });
        }
    },
    createOrUpdatePoints: async (req, res) => {
        const { points } = req.body;
        
        try {
            let user = await User.findById(req.user.id);
            if (!user) {
                // Create new user with points
                user = new User({ _id: req.user.id, points });
            } else {
                // Update existing user points
                user.points = points;
            }
            await user.save();
            res.status(200).json({ points: user.points });
        } catch (error) {
            res.status(500).json({ error: 'Unable to create or update user points.' });
        }
    }
};

module.exports = UserController;
