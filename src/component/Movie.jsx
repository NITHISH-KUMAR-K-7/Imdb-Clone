import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './pagination'


function Movie({handleAddtoWatchList,handleRemoveFromWatchlist,watchlist}) {

  const [movies,setMovies] = useState([])
  const [pageNo,setPageNo] = useState(1)

  const handlePre = ()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9858dac58cea7aa5883266afaa7f8417&language=en-US&page=${pageNo}`).then(function(res){
      //console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[pageNo])
  return (
    <div className="p-5">
        <div className="text-2xl font-bold text-center m-5">
            Trending Movies
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-7">

            {movies.map((movieObj)=>{
              return <Moviecard key={movieObj.id} movieObj={movieObj} 
              poster_path={movieObj.poster_path} 
              name={movieObj.original_title} 
              handleAddtoWatchList={handleAddtoWatchList} 
              handleRemoveFromWatchlist={handleRemoveFromWatchlist} 
              watchlist={watchlist}/>
            })}
            
           
        </div>

        <Pagination pageNo={pageNo} handlePre={handlePre} handleNext={handleNext}/>

    </div>
  )
}

export default Movie

//https://api.themoviedb.org/3/person/popular?api_key=9858dac58cea7aa5883266afaa7f8417&language=en-US&page=2