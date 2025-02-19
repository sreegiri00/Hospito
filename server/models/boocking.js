const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  doctorName: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BookingModel = mongoose.model('booking', bookingSchema);
module.exports = BookingModel;