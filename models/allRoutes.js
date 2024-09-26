const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    time:{
        type:String,
        required: true,
    },
    phone:{
        type:String,
        required: true,
    }

});

module.exports = mongoose.model('AllRoutes', RouteSchema);
