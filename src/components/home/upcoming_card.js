import '../css/trailer_card.css'
import { Link } from 'react-router-dom'

function UpcomingCard(props){

    return(
        <div className="card">

                            <div className='vidio'>
                            
                            <Link to={`/movie_details/${props.data.id}`} ><img src={`http://image.tmdb.org/t/p/w500${props.data.backdrop_path}`} /></Link> 
                        </div>
                        
                        <div className="box">
                            <h1><Link to={`/movie_details/${props.data.id}`} >{props.data.original_title}</Link></h1>
                            
                        </div>
            

        
        </div>
    )
}
export default UpcomingCard