import React from 'react'
import Watchlist from './Watchlist'

function Moviecard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist}) {

  function doesContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id == movieObj.id){
        return true
      }
    }
    return false
  }
  return (
    
    <div className="h-[50vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster_path})` }}>
     
      {doesContain(movieObj) ? (
        <div onClick={()=>(handleRemoveFromWatchlist(movieObj))} className="m-2 flex justify-center bg-gray-900/60 h-8 w-8 items-center rounded-lg">&#10060;</div>
      ) : (
        <div onClick={()=>(handleAddtoWatchList(movieObj))} className="m-2 flex justify-center bg-gray-900/60 h-8 w-8 items-center rounded-lg">
          &#128525;
        </div>
      )}
        
        
        
        <div className=' p-1 text-white w-full text-center text-xl bg-gray-900/70 rounded-xl '>
          {name}
        </div>
    </div>
  )
}

export default Moviecard