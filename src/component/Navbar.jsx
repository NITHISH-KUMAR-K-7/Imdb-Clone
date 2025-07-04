import React from 'react'
import Logo from "../assets/Movie_logo.jpg"
import {Link} from 'react-router-dom'


function Navbar() {
  return (
  
   <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8 items-center px-3 py-4 bg-gray-200">
  
   <img className="h-10 w-10 rounded-full" src={Logo}/>
        <Link to="/" className="text-blue-500 text-xl font-bold">Movie</Link>
        <Link to="/watchlist" className="text-blue-500  text-xl font-bold">Watchlist</Link>

    </div>
  )
}

export default Navbar