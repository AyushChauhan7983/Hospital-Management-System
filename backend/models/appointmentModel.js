const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        //enum: ['male', 'female', 'other'],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    date_of_appt: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Appointment', appointmentSchema)