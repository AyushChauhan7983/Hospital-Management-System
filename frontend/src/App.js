import './App.css';
import Landing from './pages/Landing';
import Finddoctor from './pages/Finddoctor';
import Appointment from './pages/Appointment';
import Pharmacy from './pages/Pharmacy';
import Disease_prediction from './pages/Disease_prediction';
import Books from './pages/Books';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Aboutus from './pages/Aboutus';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'
import { AppointmentsContextProvider } from './context/AppointmentContext';
  

function App() {
  const { user } = useAuthContext()

  return (
    <div>
      <BrowserRouter>
      <AppointmentsContextProvider>
        <Routes>
          <Route path='/' element={user ? <Landing/> : <Navigate to="/login" />}></Route>
          <Route path='/landing' element={user ? <Landing/> : <Navigate to="/login" />}></Route>
          <Route path='/finddoctor' element={user ? <Finddoctor /> : <Navigate to="/login" />}></Route>
          <Route path='/appointment' element={user ? <Appointment /> : <Navigate to="/login" />}></Route>
          <Route path='/pharmacy' element={user ? <Pharmacy /> : <Navigate to="/login" />}></Route>
          <Route path='/disease_prediction' element={user ? <Disease_prediction />  : <Navigate to="/login" />}></Route>
          <Route path='/books' element={user ? <Books />  : <Navigate to="/login" />}></Route>
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />}></Route>
          <Route path='/aboutus' element={user ? <Aboutus/> : <Navigate to="/login" />}></Route>
        </Routes>
        </AppointmentsContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;