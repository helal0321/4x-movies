import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
function MovieCard(props){
  let {data}=props
    return(

        <SwiperSlide className="movieCard" key={data.id}>
          
            <Link to={`/movie_details/${data.id}`}><img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}/></Link>
            <Link to={`/movie_details/${data.id}`}><h1>{data.title}</h1></Link>
            <p>{props.data.release_date}</p>
         
        </SwiperSlide>

    )
}
export default MovieCard