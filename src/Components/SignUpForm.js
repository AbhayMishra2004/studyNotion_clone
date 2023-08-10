import React from 'react'
import {useState} from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast" ; 
import { useNavigate } from 'react-router-dom';


export default function SignUpForm(props) {

    const navigate = useNavigate() ; 

    const setIsLoggedIn = props.setIsLoggedIn ;

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }) ;

    // CHANGE HANDLER FOR THE INPUT 
    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }


    const [showPassword, setShowPassword] =  useState(false) ; 

    // KIS TYPE KA ACCOUNT LOGIN KAR RAHE HAI 
    const [accountType , setAccountType] = useState("student") ; 


    // ON SUBMISSION OF THE FORM
    function submitHandler(event)
    {
        event.preventDefault() ; 
        
        // AGAR PASSWORD AUR CONFIRM MATCH NA HO TO 
        if(formData.password !== formData.confirmPassword)
        {
            toast.error("Passwords do not match") ; 
            return ; 
        }
        
        // ACCOUNT CREATE 
        setIsLoggedIn(true) ; 
        toast.success("Account Created") ;

        // GO TO DASH BOARD DIRECTLY 
        navigate("/dashboard") ; 
    }


  return (
    <div>

        {/* STUDNET INSTRUCTOR TAB  */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            {/* BUTTON OF THE STUDENT  */}
            <button onClick={() => setAccountType("student")} className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}> Student </button>

            {/* BUTTON OF THE INSTRUCTOR  */}
            <button onClick={() => setAccountType("instructor")} className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}> Instructor </button>
        </div>
        
        {/* FORM */}
        <form onSubmit={submitHandler}>

            {/* NAME */}
            <div className='flex gap-x-4 mt-[20px]'>

                {/* FIRST NAME */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'> * </sup></p>
                    <input type="text" name="firstName" placeHolder="Enter First Name" onChange={changeHandler} value={formData.firstName} required 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>


                    {/* LAST NAME */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'> * </sup></p>
                    <input type="text" name="lastName" placeHolder="Enter last Name" onChange={changeHandler} value={formData.lastName} required 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="mt-[20px]">
                <label className='w-full mt-[20px]'>
                    {/* FIRST NAME */}
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'> * </sup></p>
                    <input type="email" name="email" placeHolder="Enter Email Addresse" onChange={changeHandler} value={formData.email} required 
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            

            {/* CREATE AND CONFIRM PASSWORD */}
            <div  className='w-full flex gap-x-4 mt-[20px]'>
                {/* PASSWORD */}
                 <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'> * </sup></p>

                    <input name="password" placeHolder="Enter password" onChange={changeHandler} value={formData.password} type= {showPassword ? ("text") : ("password")} required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                    {/* ICON OF SHOW OR NOT SHOW PASSWORD */}
                    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer' >
                        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                {/* CONFIRM  PASSWORD */}
                 <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'> * </sup></p>
                    <input name="confirmPassword" placeHolder="confirm Password" onChange={changeHandler} value={formData.confirmPassword} type= {showPassword ? ("text") : ("password")} required className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                    {/* ICON OF SHOW OR NOT SHOW PASSWORD */}
                    <span onClick={() => setShowPassword((prev) => !prev)} 
                    className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>


            {/* create account */}
            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account
            </button>

        </form>



      
    </div>
  )
}
