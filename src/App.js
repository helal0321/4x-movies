import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import MovieDetails from './pages/movie_details';
import Movies from './pages/movies';
import Watchlist from './pages/watchlist';
import {Routes,Route} from 'react-router-dom'
import NotFound from './pages/notFound';


function App() {

  return (
    <div className="App">
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie_details/:movieId' element={<MovieDetails />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
             
        </>
    </div>
  );
}

export default App;
