const Trip = require('../models/Trip');

const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id)
            .populate('route')
            .populate('employee')
            .populate('driver');

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        res.json(trip);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateCurrentLocation = async (req, res) => {
    const { tripId, currentLocation } = req.body;

    try {
        const trip = await Trip.findById(tripId);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        trip.currentLocation = currentLocation;
        await trip.save();

        res.json(trip);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getTripById, updateCurrentLocation };
