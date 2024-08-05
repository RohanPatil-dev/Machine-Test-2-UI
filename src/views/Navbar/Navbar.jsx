import React, { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"

import ProductController from "../../controller/products";

export default function Navbar() {

    const token = localStorage.getItem("uid")

    const [name, setName] = useState("")

    useEffect(() => {
        token ? ProductController.fetchUserEmail(setName) : setName("")
    }, [])

    function logout() {
        return localStorage.removeItem("uid")
    }

    return (
        <>
            <div className="bg-slate-900">
                <nav>
                    <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                        <div className="flex items-center flex-1">
                            <span className="text-3xl font-bold relative right-[60px]">HomeCart</span>
                        </div>

                        <div className="lg:flex md:flex lg: flex-1 center justify-end font-normal">
                            <div className="flex-10">
                                <ul className="flex gap-8 mr-16 text-[18px]">
                                    {token ?
                                        <>
                                            <p className="mt-2 ml-[130px]">{name ? name : "unknown user"}</p>
                                            <Link to="/" className="mt-2" onClick={() => { return logout() }}>Logout</Link>
                                        </>
                                        :
                                        <>
                                            <Link to="/" className="mt-2 ml-[130px]">Signin</Link>
                                            <Link to="/signup" className="mt-2" >Signup</Link>
                                        </>


                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
            <Outlet />
        </>
    )
}