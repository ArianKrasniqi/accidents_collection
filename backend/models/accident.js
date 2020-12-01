const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accidentSchema = new Schema({
  description: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  street: {
    type: String
  },
  temperature: {
    type: Number
  },
  vehicles_involved: {
    type: Number
  },
  severity: {
    type: Number
  },
  people_involved: {
    type: Number
  },
  casualties: {
    type: Number
  },
  road_category: {
    type: Number
  },
  speed_limit: {
    type: Number
  },
  weather: {
    type: Number
  },
  visibility: {
    type: Number
  },
  wind_speed: {
    type: Number
  },
  humidity: {
    type: Number
  },
}, { timesstamps: true })

module.exports = mongoose.model('Accident', accidentSchema);