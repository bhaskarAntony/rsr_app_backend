const Trip = require('../models/Trip');
const Route = require('../models/Route');
const { v4: uuidv4 } = require('uuid');

const getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createTrip = async (req, res) => {
    const { routeId, driverId } = req.body;
    const employeeId = req.user.id;

    try {
        const trip = new Trip({
            employee: employeeId,
            driver: driverId,
            route: routeId,
            trackingId: uuidv4(),
        });

        await trip.save();
        res.status(201).json(trip);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({ employee: req.user.id })
            .populate('route')
            .populate('driver');
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getRoutes, createTrip, getTrips };
