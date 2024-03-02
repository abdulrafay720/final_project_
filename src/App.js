import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Machanic from './pages/Machanic/Machanic';
import Contact from './pages/Contact/Contact';
import Sign from './components/Tab/SignUp';
import Login from './components/Tab/Login';
import { NotFound } from './pages/RouteNoMatch';
import NavigationBar from './components/SideBar/NavigationBar';
import './App.css';
import MechanicRequests from '../src/pages/MechanicRequests/mechanicRequests';
import RejectedRequests from '../src/pages/RejectedRequests/RejectedRequests';
import AllMechanics from '../src/pages/AllMechanics/AllMechanics';
import AllUsers from '../src/pages/AllUsers/AllUsers';
import MechanicServices from '../src/pages/MechanicServices/MechanicServices';



function App() {

  return (
    <>

<Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/admin/*' element={<AdminLayout />} />
        {/* <Route path='' element={<NotFound />} /> */}
      </Routes>    
    </>
  );
}


function MainLayout() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Machanic' element={<Machanic />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Sign />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function AdminLayout() {
  return (
    <>
      <NavigationBar /> {/* This should always be rendered in the admin layout */}
      <Routes>
        <Route path='/mechanic-requests' element={<MechanicRequests />} />
        <Route path='/rejected-requests' element={<RejectedRequests />} />
        <Route path='/all-mechanics' element={<AllMechanics />} />
        <Route path='/mechanic-services' element={<MechanicServices />} />
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}



export default App;
