const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    startLocation: {
        type: String,
        required: true,
    },
    endLocation: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Route', RouteSchema);
