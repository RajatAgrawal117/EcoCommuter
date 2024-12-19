const mongoose = require('mongoose');

const commuteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    route: String,
    mode: String,
    duration: Number,
    riskScore: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Commute', commuteSchema);
