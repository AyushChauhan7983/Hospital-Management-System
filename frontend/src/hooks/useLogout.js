import { useAuthContext } from './useAuthContext'
import { useAppointmentContext } from './useAppointmentsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: appointmentsDispatch } = useAppointmentContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    appointmentsDispatch({type: 'SET_APPOINTMENTS', payload: null})
  }

  return { logout }
}