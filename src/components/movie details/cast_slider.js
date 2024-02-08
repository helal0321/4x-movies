import CastCard from "./cast_card"
import '../css/cast_slider.css'
import { useState,useEffect } from "react"
import { fetchMovieCast } from "../../api/movieDetails.api"
function CastSlider(props){
    let movieID=props.id
    let [cast,setCast]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetchMovieCast(movieID)
            setCast(data.cast)
        }

    fetchData()
    },[movieID])

    return(
        <div className="cast_slider">
                {cast.map((card)=>{
                    return (
                      <CastCard data={card} key={card.id}/>
                           )
                       })}
        </div>
    )
}
export default CastSlider