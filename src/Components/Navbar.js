import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"

export default function Navbar(props) {

    // LOGIN HAI YAA NAHI , AUR USKO SET KARNE KE LIYE 
    let isLoggedIn = props.isLoggedIn ; 
    let setIsLoggedIn = props.setIsLoggedIn ; 


    function logOutButtonHandler()
    {
        setIsLoggedIn(false) ; 
        toast.success("Logged Out") ; 
    }


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>  

        {/* STUDY NOTATION LOGO */}
        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} />
        </Link>


        <nav>
            <ul  className='text-richblack-100 flex gap-x-6'>
                
                {/* HOME */}
                <li>
                    <Link to="/"> Home </Link>
                </li>

                {/* ABOUT */}
                <li>
                    <Link to="#"> About </Link>
                </li>

                {/* CONTACT */}
                <li>
                    <Link to="#"> Contact </Link>
                </li>

            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>

            {/* AGAR USER LOGIN NAHI HOGA TO LOG IN KA BUTTON DIKHEGA */}
            {  !isLoggedIn && 
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Login</button>
                </Link>
            }

            {/* AGAR USER LOGIN NAHI HOGA TO SIGN UP KA BUTTON DIKHEGA */}
            {
                 !isLoggedIn && 
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Sign Up</button>
                </Link>
            }

            {/* AGAR USER LOGIN HOGA TO HI LOG OUT KA BUTTON DIKHEGA */}
            {
                isLoggedIn && 
                <Link to="/">
                    <button onClick={logOutButtonHandler} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Log Out</button>
                </Link>
            }

            {/* AGAR USER LOGIN HOGA TO HI DASHBOARD KA BUTTON DIKHEGA */}
            {
                isLoggedIn && 
                <Link to="/dashboard" >
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Dashboard</button>
                </Link>
            }
        </div>


    </div>
  )
}
