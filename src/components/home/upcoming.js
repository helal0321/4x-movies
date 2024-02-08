import UpcomingCard from "./upcoming_card.js"
import '../css/upcoming.css'
import { useState,useEffect } from "react"
import { fetchUpcomingMovies } from "../../api/movies.api.js"
function Upcoming(){
   let [upcoming,setUpcoming]=useState([])
 
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await fetchUpcomingMovies()
            setUpcoming(data.results)
           
        }
        fetchData()
    },[])

    return(
        <div className="upcoming">
            <h1>Upcoming Movies</h1>
            <div className='container'>
                {upcoming.map((card)=>{
                     return <UpcomingCard data={card} key={card.id} />
                 })}
            
            
            </div>

        </div>
    )
}
export default Upcoming