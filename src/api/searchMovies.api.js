import { fetchData } from "./fetchData.api";

export const searchMovies=async(parameters)=>{
    return fetchData(`search/movie`,parameters)
}