const express = require('express');
const { getRoutes, createTrip, getTrips } = require('../controllers/employeeController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(protect);

router.get('/routes', getRoutes);
router.post('/trips', createTrip);
router.get('/trips', getTrips);

module.exports = router;
