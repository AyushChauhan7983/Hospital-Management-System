const Appointment = require('../models/appointmentModel')
const mongoose = require('mongoose')

//get all appointments
const getAppointments = async (req, res) => {
    const user_id = req.user._id

    const appointment = await Appointment.find({ user_id }).sort({createdAt: -1}) //for descending we used -1

    res.status(200).json(appointment)
}

//get a single appointment
const getAppointment = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment'})
    }

    const appointment = await Appointment.findById(id)

    if(!appointment) {
        return res.status(404).json({error: 'No such appointment'})
    }

    res.status(200).json({appointment})
}

//create new appointment
const createAppointment = async (req, res) => {
    const {name, gender, age, date_of_birth, department, date_of_appt} = req.body

    let empytFields = []

    if(!name) {
        empytFields.push('name')
    }
    if(!gender) {
        empytFields.push('gender')
    }
    if(!age) {
        empytFields.push('age')
    }
    if(!date_of_birth) {
        empytFields.push('date_of_birth')
    }
    if(!department) {
        empytFields.push('department')
    }
    if(!date_of_appt) {
        empytFields.push('date_of_appt')
    }
    if(empytFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the details', empytFields })
    }

    //add doc to db
    try {
        const user_id = req.user._id
        const appointment = await Appointment.create({name, gender, age, date_of_birth, department, date_of_appt, user_id})
        res.status(200).json(appointment)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete an appointment
const deleteAppointment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment'})
    }

    const appointment = await Appointment.findByIdAndDelete({_id: id})

    if(!appointment) {
        return res.status(404).json({error: 'No such appointments'})
    }

    res.status(200).json(appointment)
}

//update an appointments
const updateAppointment = async (req, res) => {
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment'})
    }

    const appointment = await Appointment.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!appointment) {
        return res.status(400).json({error: 'No such appointment'})
    }
    res.status(200).json(appointment)
}


module.exports = {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
}