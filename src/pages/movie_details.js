import CastSlider from '../components/movie details/cast_slider'
import Slider from '../components/slider'
import '../css/movie_details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark,faPlay } from '@fortawesome/free-solid-svg-icons'
import { json, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { addMovie } from '../rtk/watchlistSlice'
import { useDispatch } from 'react-redux'
import TrailerPop from '../components/movie details/trailerPop';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { fetchMovieDetails,fetchMovieRecommendations,fetchMovieTrailer } from '../api/movieDetails.api'

function MovieDetails(){
    const closeTrailerPopup=()=>{
        setpopupOpened(false)
        setTrailer("")
    }
    let watchlist=useSelector((state)=>{return state.watchlist})
    let movieId=useParams().movieId
    let [movieDetails,setDetails]=useState({})
    let [recommendation,setRecommendation]=useState()
    let [trailer,setTrailer]=useState()
    //
    let [popupOpened,setpopupOpened]=useState(false)
    //
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let movieFound=watchlist.find((element)=>{  return element.id===+movieId})

    useEffect(()=>{
        const fetchData=async()=>{
            const details=await fetchMovieDetails(movieId)
            setDetails(details)
            const recommendations=await fetchMovieRecommendations(movieId)
            setRecommendation(recommendations)
            const Movietrailer=await fetchMovieTrailer(movieId)
            if(Movietrailer.results.length>0){
                
                const OfficialTrailer=Movietrailer.results.find((movie)=>movie.name==="Official Trailer")
                if(OfficialTrailer){
                    
                    setTrailer(OfficialTrailer.key)
                }
                else{
                    setTrailer(Movietrailer.results[0].key)
                }
                
                  
            }

        }
         
         fetchData()   
        window.scrollTo(0,0)
        
    },[movieId])
  
    return(
    
        <div className="movie_details">
             {(popupOpened)&&<TrailerPop url={trailer} closepopup={closeTrailerPopup}/>}
                            <div className="background" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path})`}} >

                                <div className='container'>
                                <div className='box_container'>
                    <div className="image">
                        <img src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />
                        <div className='box'>
                        <p>Available to rent or buy</p>
                        <span>Watch Now</span>
                        </div>

                    </div>
                    <div className='info'>
                        <h1>{movieDetails.title}</h1>
                        
                       <p>{movieDetails.release_date} {(movieDetails.genres)?movieDetails.genres.map((genre)=>{return `. ${genre.name} `}):''} 2h 30m</p>
                       <div className='icons'>
                       <button className={(movieFound)&&"active"} onClick={()=>{
                            dispatch(addMovie(movieDetails))
                                     
                       }}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                           <button onClick={()=>{
                            //
                               setpopupOpened(true)
                               //
                           }}><p><FontAwesomeIcon icon={faPlay} /> Play Trailer</p></button> 
                        </div>
                        <h2>Overview</h2> 
                        <p>{movieDetails.overview}</p>
                    </div>
                    </div>
                                </div>


                </div>
                <div className='casting'>
                    <div className='container'>
                       <h1>Cast</h1>
                       <div className='cast_info'>
                   
                           <div className='cast'>
                      
                            <CastSlider id={movieId}/>

                   </div>
                   <div className='info'>
                        <h4>Status</h4>
                        <p>{movieDetails.status}</p>
                        <h4>original language</h4>
                        <p>{movieDetails.original_language}</p>
                        <h4>budget</h4>
                        <p>${movieDetails.budget}</p>
                        <h4>revenue</h4>
                        <p>${movieDetails.revenue}</p>


                   </div>
                       </div>
                    </div>
                </div>
            
                { (recommendation)&&(recommendation.results.length>0)&& <div className='recommendations'>
                    <div className='container'>
                        <h1>recommendations</h1>
                        <Slider movies={recommendation}/>
                    </div>

                </div>
                }

            
        </div>

    )
}
export default MovieDetails
