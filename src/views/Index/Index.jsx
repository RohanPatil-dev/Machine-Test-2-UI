import React from "react"
import Signup from "../Signup & Signin/Signup"

import "../../CSS/signup.css"
import "../../CSS/Error.css"
import "../../CSS/buttons.css"

import Signin from "../Signup & Signin/Signin"
import Navbar from "../Navbar/Navbar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "../Error/Error"
import Homepage from "../Homepage/Homepage"

export default function Index() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route path="/" element={ <Signin />}/>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/homepage" element={<Homepage />} />
                    </Route>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
          
       
           
        </>
    )
}