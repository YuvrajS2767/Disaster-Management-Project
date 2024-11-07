const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: String,
  type: String,
  contactInfo: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
});

module.exports = mongoose.model('Resource', resourceSchema);
