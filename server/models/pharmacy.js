const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const PharmacyModel = mongoose.model('Drug', pharmacySchema);
module.exports = PharmacyModel;
