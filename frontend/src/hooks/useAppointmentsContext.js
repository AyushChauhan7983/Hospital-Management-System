import { AppointmentsContext } from '../context/AppointmentContext';
import { useContext } from 'react'

export const useAppointmentContext = () => {
    const context = useContext(AppointmentsContext)

    if(!context) {
        throw Error('useAppointmentsContext must be inside an AppointmentsContextProvider')
    }

    return context
}