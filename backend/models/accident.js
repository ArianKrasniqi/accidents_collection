const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accidentSchema = new Schema({
  description: {
    type: String
  },
  datetime: {
    type: Date,
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
    type: String
  },
  speed_limit: {
    type: Number
  },
  weather: {
    type: String
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