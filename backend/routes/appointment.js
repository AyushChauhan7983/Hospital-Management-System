const express = require('express')
const {
    createAppointment,
    getAppointments,
    getAppointment,
    deleteAppointment,
    updateAppointment
} = require('../controller/appointmentController')
//error check
const requireAuth = require('../middleware/requireauth')

const router = express.Router()

//require auth for all routes
router.use(requireAuth)

//GET all appointments
router.get('/', getAppointments)

//GET a single appointment
router.get('/:id', getAppointment)

//POST a new appointment
router.post('/', createAppointment)

//DELETE an appointment
router.delete('/:id', deleteAppointment)

//UPDATE an appointment
router.patch('/:id', updateAppointment)

module.exports = router