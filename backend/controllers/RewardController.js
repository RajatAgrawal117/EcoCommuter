const Reward = require('../models/Reward');

const RewardController = {
    // Assign points for rewards
    assignPoints: async (req, res) => {
        const { points } = req.body;

        try {
            const reward = new Reward({
                userId: req.user.id,
                points: points
            });

            await reward.save();
            res.status(200).json({ points: reward.points });
        } catch (error) {
            res.status(500).json({ error: 'Unable to assign points.' });
        }
    },

    // Redeem points for rewards
    redeemPoints: async (req, res) => {
        const { points } = req.body;

        try {
            const reward = await Reward.findOne({ userId: req.user.id });

            if (reward && reward.points >= points) {
                reward.points -= points;
                await reward.save();
                res.status(200).json({ points: reward.points });
            } else {
                res.status(400).json({ error: 'Insufficient points to redeem.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Unable to redeem points.' });
        }
    },
    getAvailableRewards: async(req,res)=>{
        try {
            const rewards = await Reward.find({}); // Fetch all rewards, apply filters if necessary
            res.status(200).json(rewards);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve available rewards.' });
        }
    }
};

module.exports = RewardController;


