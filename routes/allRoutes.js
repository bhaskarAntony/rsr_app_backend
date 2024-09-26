const express = require('express');
const { PostRoute, getAllRoutes, getRouteById } = require('../controllers/allroutes');
const router = express.Router()

router.post('/post', PostRoute)
router.get('/list', getAllRoutes)
router.get('/:id', getRouteById)


module.exports = router;