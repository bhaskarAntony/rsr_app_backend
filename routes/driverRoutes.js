const express = require('express');
const { getTrips, updateTripStatus } = require('../controllers/driverController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(protect);

router.get('/trips', getTrips);
router.patch('/trips/status', updateTripStatus);

module.exports = router;
