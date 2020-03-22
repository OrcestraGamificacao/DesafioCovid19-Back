const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const aglomeracaoSchema = new mongoose.Schema({
    location_name: String,
    description: String,
    image_url: String,
    aglomeration_level: Number,
    start_timestamp: {type:Date, default: Date.now},
    end_timestamp: Date,
    active: Boolean,
    votes_positive: Number,
    votes_negative: Number,
    location: {
      type: PointSchema,
      index: '2dsphere'
    }
  });

  module.exports = mongoose.model('Aglomeracao', aglomeracaoSchema);