import { fetchData } from "./fetchData.api"
export const fetchMovieDetails=async(movieId)=>{

    return fetchData(`movie/${movieId}`)
}
export const fetchMovieRecommendations=async(movieId)=>{

    return fetchData(`movie/${movieId}/recommendations`)
}
export const fetchMovieTrailer=async(movieId)=>{

    return fetchData(`movie/${movieId}/videos`)
}

export const fetchMovieCast=async(movieId)=>{

    return fetchData(`movie/${movieId}/credits`)
}