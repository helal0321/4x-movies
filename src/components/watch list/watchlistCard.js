import '../css/watchlistCard.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMovie } from '../../rtk/watchlistSlice'
function WatchlistCard(props){
    let {data}=props
    let dispatch=useDispatch()

    return(
        <div className="watchlistCard">
                 <Link to={`/movie_details/${data.id}`}><img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`} /></Link> 
                <div className="info">
                    <Link to={`/movie_details/${data.id}`}><h2>{data.title}</h2></Link>
                    <span>{data.release_date}</span>
                    <p>{(data.overview.length<=150)?data.overview.slice(0,150):(`${data.overview.slice(0,150)}...`)}</p>
                    <button onClick={()=>{
                       dispatch(deleteMovie(data))
                    }}>remove</button>
                </div>
                
        </div>
    )
}
export default WatchlistCard