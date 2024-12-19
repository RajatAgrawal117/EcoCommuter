const mongoose = require("mongoose");

const alternateRouteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    route: [
      {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true },
        pollution_level: { type: Number, required: true }
      }
    ],
    suggestedMode: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlternateRoute", alternateRouteSchema);
