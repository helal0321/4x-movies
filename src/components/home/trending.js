import Slider from "../slider"
import '../css/trending.css'
import { useState,useEffect } from "react"
import { fetchTrendingMovies } from "../../api/movies.api"
function Trending(){
    let [trending,setTrending]=useState()
    let [trendingOption,setTrendingOption]=useState('day')

    let handleOption=(e)=>{
        setTrendingOption(e.target.value)
    }


    
    useEffect(()=>{
       const fetchData= async()=>{
            const data=await fetchTrendingMovies(trendingOption)
            setTrending( data )
                        
        }
        fetchData()

    },[trendingOption])
    return(
        <div className="trending">
            
            <div className="container">
            <div className="buttons">
            <h1>Trending</h1>
            <div className="btn">
                <input type="radio" name='trending' value='day' id="day" checked={trendingOption==='day'}  onChange={(e)=>{
                    handleOption(e)
                }}/>
                <label for='day'>Today</label>
                <input type="radio" name='trending' value='week' checked={trendingOption==='week'} id="week" onChange={(e)=>{
                    handleOption(e)
                }}/>
                <label for='week'>This Week</label>

            </div>
            
        </div>
        <Slider movies={trending}/>
            </div>

        </div>


    )
}
export default Trending