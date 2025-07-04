import Navbar from "./component/Navbar"
import Movie from "./component/Movie"
import Watchlist from "./component/Watchlist"

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from "./component/Banner"
import { useEffect, useState } from "react"


function App() {

  let [watchlist,setWatchList] = useState([])

  let handleAddtoWatchlist = (movieObj)=>{
    let newWatchList = [...watchlist,movieObj]
    localStorage.setItem('movieApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveFromWatchlist = (movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id !=movieObj.id
    })
    setWatchList(filteredWatchlist)
    localStorage.setItem('movieApp',JSON.stringify(filteredWatchlist))
  }


  //get the data from the localstorage
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('movieApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])
 

  return (
    <>
    <BrowserRouter>

      <Navbar/>

        <Routes>
          <Route path="/" element={
            <>
              <Banner/> <Movie watchlist={watchlist} 
              handleAddtoWatchList={handleAddtoWatchlist} 
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
            </>
          }/>
          
          <Route path="/watchlist" element={ <Watchlist watchlist={watchlist}
           setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
          

        </Routes>

       

    </BrowserRouter>


    </>
  )
}

export default App
