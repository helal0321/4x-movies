import { useEffect, useState } from 'react'
import '../css/watchlist.css'
import WatchlistCard from '../components/watch list/watchlistCard'
import { useSelector,useDispatch } from 'react-redux'

function Watchlist(){
    const watchListMovies=useSelector((state)=>{return state.watchlist})
     
    return(
        <div className="watchlist bodyPage">
            <div className='container'> 
            <h1>My Watchlist</h1>
            <div className="cardContainer">
                   { (watchListMovies.length>0)?watchListMovies.map((movie)=>{
                        return <WatchlistCard data={movie} />
                     }):<p className='no_items'>no selected movies in your watchlist</p>}
            </div>
            </div>

        </div>
    )
}
export default Watchlist