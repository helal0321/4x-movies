import Logo from "./logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faSquareInstagram,faSquareTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './css/footer.css'
function Footer(){
    return(
        <div className="footer">
            <div className="container">
               <Logo />
               <div className="box">
                <p>Immerse yourself in a vast collection of films spanning various
                     genres, from heartwarming dramas to exhilarating action-packed 
                     adventures. Our carefully curated selection ensures there's something
                      for every cinephile, whether you're seeking thought-provoking masterpieces
                       or light-hearted entertainment to brighten your day.</p>
                <ul className="links">
                    <li><a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a></li>

                  
                </ul>
                </div> 
            </div>
        </div>
    )
}
export default Footer