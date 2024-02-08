import '../css/home.css'
import "react-multi-carousel/lib/styles.css";
import Landing from '../components/home/landing';
import Trending from '../components/home/trending';
import Upcoming from '../components/home/upcoming';
import Popular from '../components/home/popular';
import Join from '../components/home/join';
function Home(){

    return(
        <>
        <Landing />
        <Trending />
        <Upcoming />
        <Popular />
        <Join />
        
        
        

        </>
    )
}
export default Home