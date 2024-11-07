const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  role: { type: String, enum: ['community', 'volunteer', 'responder'] },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
});

module.exports = mongoose.model('User', userSchema);
