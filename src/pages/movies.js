import { useState,useEffect } from "react"
import MovieCard from "../components/movieCard"
import '../css/movies.css'
import { filterMovies,fetchGenresList,fetchCountriesList,fetchLanguagesList} from "../api/filterMovies.api"
function Movies(){
    let [movies,setMovies]=useState([])
    let [page,setPage]=useState(1)
    let [genresList,setGenresList]=useState([])
    let [selectedSort,setSelectedSort]=useState('popularity.desc')
    let [selectedGenres,setSelectedGenres]=useState([])
    let [countryList,setCountryList]=useState([])
    let[selectedCountry,setSelectedCountry]=useState('')
    let[languageList,setLanguageList]=useState([])
    let[selectedLanguage,setSelectedLanguage]=useState('')
    let [moviesFound,setMoviesFound]=useState(true)
    const filterParameters=`&sort_by=${selectedSort}&with_genres=${selectedGenres.join(',')}&with_origin_country=${selectedCountry}&with_original_language=${selectedLanguage}`

    const applyFilter=()=>{
        setPage(1)
        setMovies([])
    }
    useEffect(()=>{
        const fetchMovies=async()=>{
            
            const data=await filterMovies(`&page=${page}${filterParameters}`)
            setMovies([...movies,...data.results])
            if(data.results.length===0){
                setMoviesFound(false)
            }
            console.log(movies)
         
        }
   
        fetchMovies()

      
   
    },[selectedSort,selectedGenres,selectedCountry,selectedLanguage,page])
    
    useEffect(()=>{
        const fetchLists=async()=>{
            const Genres=await fetchGenresList()
            setGenresList(Genres.genres)          
            const Countries=await fetchCountriesList()
            setCountryList(Countries)  
            const Languages= await fetchLanguagesList()
            setLanguageList(Languages)
 
        }
        
            fetchLists()
    },[])


    let handleGenres=(e)=>{
        
        if(selectedGenres.includes(e.target.value)===false){
            setSelectedGenres([...selectedGenres,e.target.value])
           
        }
        else{
            
           setSelectedGenres(selectedGenres.filter((g)=>g!==e.target.value))
        }
    }
 
    return(
        <>
        <div className="parentMovies">
            <div className="container">


            <div className="filter">
                <h1>Filters</h1>
                <div className="box genres">
                    <h2>Genres</h2>
                    {genresList.map((genre)=>{
                        return (<><input type="checkbox" value={genre.id} key={genre.id}  id={genre.name} onChange={(e)=>{
                            applyFilter()
                                 handleGenres(e)
                                 }}/>
                        <label for={genre.name}>{genre.name}</label>   </> )
                   })}
                </div>
                <div className="box sort">
                    <h2>Sort</h2>
                    <select value={selectedSort} onChange={(e)=>{
                        applyFilter()
                        setSelectedSort(e.target.value)
                    }}>
                        <option value='popularity.asc'>popularity.asc</option>
                        <option value='popularity.desc'>popularity.desc</option>
                        <option value='revenue.asc'>revenue.asc</option>
                        <option value='revenue.desc'>revenue.desc</option>
                        <option value='primary_release_date.asc'>primary_release_date.asc</option>
                        <option value='primary_release_date.desc'>primary_release_date.desc</option>
                    </select>
                </div>
                <div className="box country">
                    <h2>Country</h2>
                    <select value={selectedCountry} onChange={(e)=>{
                        applyFilter()
                      setSelectedCountry(e.target.value)
                    }}>
                        {countryList.map((country)=>{
                            return <option value={country.iso_3166_1}>{country.english_name}</option>
                          })}
                    </select>
                </div>
                <div className="box language">
                    <h2>Language</h2>
                    <select onChange={(e)=>{
                        applyFilter()
                        setSelectedLanguage(e.target.value)
                    }}>
                        {languageList.map((language)=>{
                             return <option value={language.iso_639_1}>{language.english_name}</option>
                          })}
                    </select>
                </div>
            </div>
            <div className="movies">
                <div className="container">
                    <h1>Movies</h1>
                   <div className="moviesContainer">
                            {movies.map((movie)=>{
                                return <MovieCard data={movie} />
                             })}
                    </div>
                    {(moviesFound)&&<button onClick={()=>{
                        console.log(movies)
                        setPage(page+1)
                       
                    }}>load more...</button>}
                </div>
            </div>
            </div>
        </div>
            </>
    )}

export default Movies