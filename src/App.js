import "./App.css";
import Navbar from './Components/Navbar'
import Home from "./pages/Home" 
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute'

import { useState } from 'react';

function App() {

  // LOGIN HAI YAA NAHI , AUR USKO SET KARNE KE LIYE 
 const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    
      <div className="w-screen h-screen bg-richblack-900 flex flex-col">
        
        {/* NAVBAR  */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* LOGIN PAGE  */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} 
/>} />

          {/* SIGN UP PAGE */}
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

          {/* DASHBOARD PAGE */}
          {/* ISME TAB HE JAAT SAKTE HAI JAB LOGIN HO , DIRETLY KOI LINK SE ENTER KARE TO LOGIN PAGE MAI */}
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}> <Dashboard /> </PrivateRoute>
          } />

        </Routes>
      </div>
  )
}

export default App;
