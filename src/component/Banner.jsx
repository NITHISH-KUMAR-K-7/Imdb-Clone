import React from 'react'
import banner from '../assets/Movie_poster.jpg'

function Banner() {
  return (
    <div
      //className="h-[30vh] bg-cover bg-center sm:h-[100vh] md:h-[55vh] lg:h-[75vh]  flex items-end"
      className="w-full h-[440px]  bg-cover bg-center flex items-end lg:h-[500px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-gray-400 text-white p-4 text-xl font-bold text-center w-full">
        Avengers
      </div>
    </div>
  );
}


export default Banner