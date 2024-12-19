const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    commuteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Commute',
      required: true
    },
    totalExposure: { type: Number, required: true },
    pointsEarned: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analytics", analyticsSchema);
