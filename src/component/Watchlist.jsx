import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

import genreids from '../Utility/genre'

function Watchlist({watchlist,setWatchList,handleRemoveFromWatchlist}) {

  const [search,setSearch] = useState("")
  const [genreList,setGenreList] = useState(['All Genres'])
  const [currGenre,setCurrGenre] = useState('All Genres')

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  // this handleFilter do is set the current genre 
  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }

  let sortIncreasing = ()=>{
    let sortedIncreasing = watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }

  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  // what the job of this use effect do - it will be basically get the list of genre and to update the state and so create state above
  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    //  use Set for remove dulicate genre
    temp = new Set(temp)
    setGenreList(['All Genres',...temp])
    //console.log(temp) // display temp values for which movie category should watch  
  },[watchlist])
    
  return (
    <>

    
    <div className="flex overflow-x-auto justify-center flex-wrap gap-2 m-4">

      {genreList.map((genre)=>{
          return <div key={genre} onClick={()=>handleFilter(genre)} className={currGenre==genre ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4 hover:cursor-pointer" : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4 hover:cursor-pointer"}>{genre}</div>
      })}
      
      
    </div>
    
    <div className="flex justify-center my-4">
       <input onChange={handleSearch} type="text" placeholder='Search Movies' className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"/>
    </div>

    <div className="overflow-auto rounded-lg border border-gray-200 m-8">
      <table className="w-full text-gray-500 text-center">
        <thead className="border-b-2">
          <tr>
            <th>Name</th>
            <th className="flex justify-center">
              <div onClick={sortIncreasing} className="p-2 hover:cursor-pointer"><FaArrowUpLong /></div>
            <div className="p-2">Rating</div>
              <div onClick={sortDecreasing} className="p-2 hover:cursor-pointer"><FaArrowDownLong /></div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>

        </thead>

        <tbody>

          {watchlist.filter((movieObj)=>{
            if(currGenre=='All Genres'){
              return true
            }else{
              return genreids[movieObj.genre_ids[0]]==currGenre;
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return <tr key={movieObj.id} className="border-b-2">
            <td className="flex items-center px-6 py-4">
              <img className="h-[6rem] w-[10rem]" src={`https://image.tmdb.org/t/p/w300${movieObj.poster_path}`}/>
              <div className="mx-10">{movieObj.title}</div>
            </td>

            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{genreids[movieObj.genre_ids[0]]}</td>
            <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className="text-red-800 hover:cursor-pointer">Delete</td>
        </tr>
          })}

         

          
                
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Watchlist