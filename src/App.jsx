import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './components/Signup'; 
import Login from './components/Login';
import { ToastContainer, toast } from "react-toastify";
import Profile from './components/Profile';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </Router>

    </>
  )
}

export default App