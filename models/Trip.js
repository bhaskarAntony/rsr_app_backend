const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
    employee: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type:String,
        required: true,
    },
    driver: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type:String,
        required: true,
    },
    route: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Route',
        type:String,
        required: true,
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
    },
    trackingId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'in-progress', 'completed', 'cancelled'],
        default: 'pending',
    },
    currentLocation: {
        type: String,
    },
});

module.exports = mongoose.model('Trip', TripSchema);
