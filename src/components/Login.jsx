import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { auth } from './firebase';

const Login = () => {

    // function handleClick(event){
    //     event.preventDefault();
    //     if(email && password){
    //         toast.success("Logged in successfully!");
    //     }
    //     else{
    //         toast.warning("Please enter the details");
    //     }
    // };

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);        //'signInWithEmailAndPassword' can be used(imported) from firebase
            console.log("Logged In !");
            // toast.success("Logged in successfully !")
            window.location.href = "/profile";
        } catch (error) {
            console.log("Login Failed !")
            toast.error(error.message)
        }
    }
    
  return (
    <>
      <form className='mx-auto mt-20 px-10 py-5 rounded-lg max-w-[600px] h-auto shadow-2xl' onSubmit={handleSubmit}>
        <h1 className='text-4xl text-blue-600 text-center font-bold text-'> Login !</h1>
        <br /><br />
        <div className='mb-5'>
            <h3 className='text-xl text-blue-500 font-semibold'>Email</h3>
            <input
            className='px-3 py-3 rounded-lg mt-2 w-full'
            type="email" 
            placeholder='Enter your email id...' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required />
        </div>
        <div className="mb-5">
            <h3 className='text-xl text-blue-500 font-semibold'>Password</h3>
            <input
            className='px-3 py-3 rounded-lg mt-2 w-full' 
            type="password" 
            placeholder='Enter password...'
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            required />
        </div>
        <div className="mt-5 text-center" >
            <button className='bg-blue-600 text-white text-xl px-3 py-2 rounded-md active:scale-90 border-none hover:bg-blue-500' type="submit"> Login </button>
            <br /><br />
            <span className='text-black'>Don't have an account? </span><Link to="/signup" className='text-blue-600 font-semibold'>Sign Up</Link>
        </div>
      </form>
    </>
  )
}

export default Login;