import React from 'react'
import frameImage from "../assets/frame.png"
import LogInForm from "./LogInForm"
import SignUpForm from "./SignUpForm"
import {FcGoogle} from "react-icons/fc" 

export default function Template(props) {

    const title = props.title ; 
    const desc1 = props.desc1 ; 
    const desc2 = props.desc2 ; 
    const img = props.image ; 
    const formType = props.formType ; 
    let setIsLoggedIn = props.setIsLoggedIn ;
    


  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        {/* LEFT HAND SIDE  */}
        <div className='w-11/12 max-w-[450px]'>

            {/* HEADING  */}
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'> {title} </h1>

            {/* description */}
            <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span  className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {/* TYPE OF FORM */}
            {
                formType === "signup" ? 
                (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : 
                (<LogInForm setIsLoggedIn={setIsLoggedIn} />)
            }

            {/* OR LIKHA HUA AUR AAS PASS LINE HAI */}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

            {/* SIGN UP WITH GOOGLE */}
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle />
                <p>Sign up with Google</p>
            </button>

        </div>

        {/* RIGHT HAND SIDE */}

        <div  className='relative w-11/12 max-w-[450px] '>
            
            {/* BACK GROUND IMAGE AND IMAGE ON IT  */}
            <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy" />

            <img src={img} alt="img" width={558} height={490} loading="lazy" className='absolute -top-4 right-4' />

        </div>
    
       
    </div>
  )
}
