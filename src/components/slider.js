import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './css/slider.css'

function Slider (props){
      let trending=(<p>Loading</p>)

    if(props.movies){
       trending=props.movies.results.map((movie)=>{
        return(
           
           <SwiperSlide className="movieCard"><Link to={`/movie_details/${movie.id}`}><img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}/></Link>
            <Link to={`/movie_details/${movie.id}`}><h1>{movie.title}</h1></Link>
            <p>{movie.release_date}</p></SwiperSlide>
        )
      })
    }
    
    return(
        <div className='slider'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Pagination]}
        navigation={true}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
            
          },
          868: {
            slidesPerView: 4,
            spaceBetween: 40,
            
          },

          1224: {
            slidesPerView: 5,
            spaceBetween: 50,
            
          },
        }}
        
        className="mySwiper"
      >
        
        {trending}
      </Swiper>
          
   
        </div>
    )
}
export default Slider