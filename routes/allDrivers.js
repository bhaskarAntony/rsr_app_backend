const express = require('express');
const Driver = require('../models/driver');
const router = express.Router();

router.get('/drivers', async (req, res) => {
    try {
      const drivers = await Driver.find();
      res.json(drivers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get a single driver by license plate
  router.get('/drivers/:id', async (req, res) => {
    try {
      const driver = await Driver.findOne({ _id: req.params.id });
      if (driver) {
        res.json(driver);
      } else {
        res.status(404).json({ message: 'Driver not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Create a new driver
  router.post('/drivers', async (req, res) => {
    const { licensePlate, name, phoneNumber, vehicleType } = req.body;
  
    const newDriver = new Driver({
      licensePlate,
      name,
      phoneNumber,
      vehicleType
    });
  
    try {
      const savedDriver = await newDriver.save();
      res.status(201).json(savedDriver);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update a driver by license plate
  router.put('/drivers/:licensePlate', async (req, res) => {
    try {
      const updatedDriver = await Driver.findOneAndUpdate(
        { licensePlate: req.params.licensePlate },
        req.body,
        { new: true }
      );
      if (updatedDriver) {
        res.json(updatedDriver);
      } else {
        res.status(404).json({ message: 'Driver not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a driver by license plate
  router.delete('/drivers/:licensePlate', async (req, res) => {
    try {
      const deletedDriver = await Driver.findOneAndDelete({ licensePlate: req.params.licensePlate });
      if (deletedDriver) {
        res.json(deletedDriver);
      } else {
        res.status(404).json({ message: 'Driver not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;