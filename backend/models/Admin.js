const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    rewardData: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        points: { type: Number, required: true },
        action: { type: String, required: true }
      }
    ],
    pollutionData: [
      {
        coordinates: {
          lat: { type: Number, required: true },
          lon: { type: Number, required: true }
        },
        pollution_level: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now }
      }
    ],
    analyticsData: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        totalExposure: { type: Number, required: true },
        pointsEarned: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
