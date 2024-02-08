import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './logo'
import './css/header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { searchMovies } from '../api/searchMovies.api'
function Header(){
    let [menuOpened,setMenuOpened]=useState(false)
    let [pageWidth,setPageWidth]=useState(window.innerWidth)
    let [searchValue,setSearchValue]=useState('')
    let [searchedMovies,setSearchedMovies]=useState([])
    let navigate=useNavigate()
    let fetchData=async(e)=>{
        if(e.target.value.length>0){
            setSearchValue(e.target.value)
            const data= await searchMovies(`&query=${searchValue}`)
            setSearchedMovies(data.results)
        }
        else{
            setSearchValue('')
            setSearchedMovies([])
        }

    }

    window.onresize=()=>{
        setPageWidth(window.innerWidth)
    }

    let handleMenu=()=>{
            setMenuOpened(false)
    }
    let resetSearch=()=>{
        setSearchValue('')
        setSearchedMovies([])
    }
    
    return(
    <div className="header">
        <div className="container">
            <div className="row">
                <div className="column1">
                    <Logo />
                   <button onClick={()=>{
                    setMenuOpened(!menuOpened)
                   }}><FontAwesomeIcon icon={faBars} /></button> 
                    <ul className="links" style={
                        (pageWidth<=840)?((menuOpened===true)?{height:'163px'}:{height:0}):{height:'auto'}}>
                        <li><NavLink to='/' onClick={()=>handleMenu()}>Home</NavLink></li>
                        <li><NavLink to='/movies' onClick={()=>handleMenu()}>Movies</NavLink></li>
                        <li><NavLink to='/watchlist' onClick={()=>handleMenu()}>Watchlist</NavLink></li>
                        <li><a href='#' onClick={()=>handleMenu()}>about us</a></li>
                    </ul>
                </div>
                <div className="column2">
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" placeholder="search for a movie..." value={searchValue}  onChange={(e)=>{
                        fetchData(e)
                    }}/>
                    

                        {(searchedMovies.length>0)&& (
                                 <ul>
                                     {searchedMovies.map((movie)=>{
                                             return (
                                                <li key={movie.id}>
                                                    <Link to={`/movie_details/${movie.id}`} onClick={()=>resetSearch()}><img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link> 
                                                    <Link to={`/movie_details/${movie.id}`} onClick={()=>resetSearch()}><h2>{movie.title}</h2></Link> 
                    
                                                </li>
                                                     )
                                         })}
                </ul>
            )}
                     
                    
                </div>

            </div>

        </div>
        
    </div>
    )
}
                        

export default Header