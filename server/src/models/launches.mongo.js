const mongoose = require("mongoose")

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true
    },
    target: {
        type: String,
        required: true,
    },
    costumers: [String],
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    },
})

// connects launches schema with launches collection
module.exports = mongoose.model('Launch', launchesSchema)