import React from 'react'
import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';
import {Route,Routes} from "react-router-dom";
import UserAccount from '../Dashboard/user-account/UserAccount';
import DoctorAccount from '../Dashboard/doctor-account/DoctorAccount';
import ProctectedRoute from './ProctectedRoute';
const Routers = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/services' element={<Services />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<SignUp />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/doctors' element={<Doctors />}/> 
    <Route path='/doctors/:id' element={<DoctorsDetails />} />
     <Route path='/users/profile/me' element={<ProctectedRoute allowedRoles={['patient']}><UserAccount /></ProctectedRoute>} />
     <Route path='/doctors/profile/me' element={<ProctectedRoute allowedRoles={['doctor']}><DoctorAccount  /></ProctectedRoute> }/>

   </Routes>
   </>
  )
}

export default Routers;