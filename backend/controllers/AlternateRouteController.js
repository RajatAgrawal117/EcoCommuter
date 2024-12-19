const AlternateRoute = require('../models/AlternateRoute');
const User = require('../models/User');

const AlternateRouteController = {
    // Suggest alternate routes based on pollution data
    suggestAlternateRoutes: async (req, res) => {
        const { start, destination } = req.body;

        try {
            const alternateRoutes = await AlternateRoute.find({
                userId: req.user.id,
                route: {
                    $elemMatch: {
                        lat: { $gte: start.lat, $lte: destination.lat },
                        lon: { $gte: start.lon, $lte: destination.lon }
                    }
                }
            });

            res.status(200).json(alternateRoutes);
        } catch (error) {
            res.status(500).json({ error: 'Unable to fetch alternate routes.' });
        }
    }
};

module.exports = AlternateRouteController;
