const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  description: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Alert', alertSchema);
