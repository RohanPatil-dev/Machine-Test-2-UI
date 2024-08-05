import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import userController from "../../controller/user";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(event) {
        event.preventDefault();
        try {
            const response = await userController.signup(email, password);

            return navigate("/");
        } catch (error) {
            if (error.response && error.response.data) {
                return toast.error(error.response.data.err)
            }
        }
    }

    // async function handleSignup(event) {
    //     event.preventDefault();
    
    //     try {
    //         const response = await userController.signup(email, password);
    //         navigate("/");
    //     } catch (error) {
    //         console.error("Signup Error:", error); // Log the full error object
    //         if (error.response && error.response.data) {
    //             return toast.error(error.response.data.err);
    //         } 
    //     }
    // }
    


    return (
        <>
            <ToastContainer />
            <div className="flex w-full h-screen" id="signup">
                <div className="w-full flex items-center justify-center">
                    <div className='px-10 py-20 rounded-3xl bg-white border-2 bg-transparent border-gray-100 backdrop-blur-[10px]'>
                        <h1 className='text-5xl  font-semibold text-center text-white'>USER REGISTER</h1>
                        <p className='font-medium text-lg text-gray-300 mt-4 text-center'>Welcome back! Please enter you details.</p>
                        <div className='mt-8 backdrop-blur-[150px]'>
                            <form onSubmit={handleSignup}>
                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-lg font-medium text-gray-100'>Email</label>
                                    <input type="email" id="email" value={email} onChange={(event)=>{return setEmail(event.target.value)}} class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Enter your email........." />
                                </div>
                                
                                <div className='flex flex-col mt-4'>
                                    <label htmlFor="password" className='text-lg font-medium text-gray-100'>Password</label>
                                    <input type="password" id="password" value={password} onChange={(event)=>{return setPassword(event.target.value)}}  class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Enter your password........." />
                                </div>

                                <div className='mt-8 flex flex-col gap-y-4'>
                                    <button type="submit" className='active:scale-[.98] active:duration-75 text-lg transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}