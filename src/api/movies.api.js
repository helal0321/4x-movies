import { fetchData } from "./fetchData.api"
export const fetchTrendingMovies=async(trendingOption)=>{

    return fetchData(`trending/movie/${trendingOption}`)  
}
export const fetchUpcomingMovies=async()=>{

    return fetchData(`movie/upcoming`) 
}

export const fetchPopularMovies=async()=>{

    return fetchData(`movie/upcoming`) 

}
