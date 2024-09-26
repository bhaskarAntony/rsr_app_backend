const Trip = require('../models/Trip');

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find()
            // .populate('route')
            // .populate('employee');
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateTripStatus = async (req, res) => {
    const { tripId, status } = req.body;

    try {
        const trip = await Trip.findById(tripId);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        trip.status = status;
        await trip.save();

        res.json(trip);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getTrips, updateTripStatus };
