const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // type of data that is going to be stored
        ref: "User" // reference to the User model
    },
    name: {
        type: String,
        default: ""
    },
    locations: [pointSchema]
});

mongoose.model("Track", trackSchema); // creates a new collection called tracks