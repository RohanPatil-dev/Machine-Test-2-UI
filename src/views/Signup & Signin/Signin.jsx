import React, { useState } from "react"

import { Link } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import userController from "../../controller/user"
import { useNavigate } from "react-router-dom";


export default function Signin() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignin(event) {
        event.preventDefault();
        try {
            const response = await userController.signin(email, password);

            return navigate("/homepage");
        } catch (error) {
            if (error.response && error.response.data) {
                return toast.error(error.response.data.err)
            }
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="flex w-full h-screen" id="signin">
                <div className="w-full flex items-center justify-center">
                    <div className='px-10 py-20 rounded-3xl bg-white border-2 bg-transparent border-gray-100 backdrop-blur-[10px]'>
                        <h1 className='text-5xl  font-semibold text-center text-white'>USER LOGIN</h1>
                        <p className='font-medium text-lg text-gray-700 mt-4 text-center'>Welcome back! Please enter you details.</p>
                        <div className='mt-8 backdrop-blur-[150px]'>
                            <form onSubmit={handleSignin}>
                                <div className='flex flex-col'>
                                    <label htmlFor="email" className='text-lg font-medium text-gray-100'>Email</label>
                                    <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} id="email" class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email........." />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <label htmlFor="password" className='text-lg font-medium text-gray-100'>Password</label>
                                    <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} id="password" class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password........." />
                                </div>

                                <div className='mt-8 flex flex-col gap-y-4'>
                                    <button type="submit" className='active:scale-[.98] active:duration-75 text-lg transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}