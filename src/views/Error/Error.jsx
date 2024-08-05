import React from "react"
import { Link } from "react-router-dom"
export default function Error() {
  return (
    <>
      <div className="Error">
        <Link to="/homepage" className="active:scale-[.98] active:duration-75 text-lg transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg btn bg-red-500 border-2 rounded-xl text-white font-medium ml-8">Go to Homepage</Link>
      </div>
    </>

  )
}