const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true, unique: false },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    vehicleType: { type: String, required: true }
  });
  
  const Driver = mongoose.model('Driver', driverSchema);
  module.exports = Driver;