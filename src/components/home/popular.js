import Slider from "../slider"
import '../css/popular.css'
import { fetchPopularMovies } from "../../api/movies.api"
import { useState,useEffect } from "react"
function Popular(){
    let [popular,setPopular]=useState()
    useEffect(()=>{
        const fetchData= async()=>{
            const data=await fetchPopularMovies()
            setPopular( data )
                        
        }
        fetchData()
    },[])
    return(
        <div className="popular">
            <div className="container">
            <h1>Popular Movies</h1>
            <Slider movies={popular}/>
            </div>
        </div>

        


    )
}
export default Popular