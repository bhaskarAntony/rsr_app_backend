const express = require('express');
const { getTripById, updateCurrentLocation } = require('../controllers/tripController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(protect);

router.get('/:id', getTripById);
router.get('/list', getTripById);
router.patch('/location', updateCurrentLocation);

module.exports = router;
