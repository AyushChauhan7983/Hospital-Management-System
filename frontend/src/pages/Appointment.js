// import { useEffect } from 'react';
// import { useAppointmentContext } from '../hooks/useAppointmentsContext'

// import AppointmentDetails from '../components/AppointmentDetails'
// import AppointmentForm from '../components/AppointmentForm'

// const Appointment = () => {
//     const {appointments, dispatch} = useAppointmentContext()

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             const response = await fetch('/api/appointments')
//             const json = await response.json()

//             if(response.ok) {
//                 dispatch({type: 'SET_APPOINTMENTS', payload: json})
//             }
//         }

//         fetchAppointments()
//     }, [dispatch])

//     return (
//         <div className='appointment'>
//             <div className = 'appointments'>
//                 {appointments && appointments.map((appointment) => (
//                     <AppointmentDetails key={appointment._id} appointment={appointment} />
//                 ))}
//             </div>
//             <AppointmentForm />
//         </div>
//     )
// }

// export default Appointment
import { useEffect } from 'react';
import { useAppointmentContext } from '../hooks/useAppointmentsContext'
import lp from '../assets/landing_page.jpg';
import avatar from '../assets/avatar.jpg'
import {Link} from 'react-router-dom'
import AppointmentDetails from '../components/AppointmentDetails'
import AppointmentForm from '../components/AppointmentForm'
import { useAuthContext } from "../hooks/useAuthContext"

const Appointment = () => {
    const {appointments, dispatch} = useAppointmentContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch('/api/appointments', {
                headers: {'Authorization': `Bearer ${user.token}`},
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_APPOINTMENTS', payload: json})
            }
        }

        if (user) {
            fetchAppointments()
        }
    }, [dispatch, user])

    return (
        <div>
            <header class="text-gray-600 body-font m-10">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 font-sans font-bold text-xl">Healed</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/landing'>Home</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/finddoctor'>Find a doctor</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/appointment'>Book an appointment</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/pharmacy'>Pharmacy</Link>
      <Link class="mr-5 text-slate-200 font-sans font-semibold px-4 py-1 bg-indigo-500 hover:bg-indigo-600 rounded-full" to='/disease_prediction'>Disease prediction</Link>
      <img src={avatar} alt="profile" class='rounded-full w-15 h-12'></img> 
    </nav>
  </div>
            </header>
        <div className='appointment'>
            <div className = 'appointments'>
                {appointments && appointments.map((appointment) => (
                    <AppointmentDetails key={appointment._id} appointment={appointment} />
                ))}
            </div>
            <AppointmentForm />
        </div>
        </div>
        
    )
}

export default Appointment