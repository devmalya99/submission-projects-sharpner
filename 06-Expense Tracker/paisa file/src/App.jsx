import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Login from './SIGN PAGE/Login'
import Signup from './SIGN PAGE/Signup'
import Forgot from './SIGN PAGE/Forgot'
import Home from './Home/Home'
import Profile from './Pages/Profile'

function App() {
 
  
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/forgotPassword" element={<Forgot/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
