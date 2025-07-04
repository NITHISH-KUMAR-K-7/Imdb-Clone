import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function Pagination({handlePre, handleNext, pageNo}) {
  return (
    <div className="bg-gray-400 p-3 flex justify-center mt-6"> 
    <div onClick={handlePre} className="mx-8 p-1 hover:cursor-pointer"><FaArrowLeft /></div>
    <div className="font-bold">{pageNo}</div>
    <div onClick={handleNext} className="mx-8 p-1 hover:cursor-pointer"><FaArrowRight /></div>
    </div>
  )
}

export default Pagination