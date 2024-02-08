import { fetchData } from "./fetchData.api"
export const filterMovies=async(parameters)=>{
   
    return fetchData('discover/movie',parameters)

}

export const fetchGenresList=async()=>{
    return fetchData('genre/movie/list')
}
export const fetchCountriesList=async()=>{
    return fetchData('configuration/countries')
}
export const fetchLanguagesList=async()=>{
    return fetchData('configuration/languages')
}