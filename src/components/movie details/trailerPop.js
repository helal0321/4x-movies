import '../css/trailerPop.css'
import { useDispatch,useSelector } from 'react-redux'
import {reset} from '../../rtk/trailerslice'
function TrailerPop(){
    let Url=useSelector((state)=>{return state.trailer.url})
    let dispatch=useDispatch()
    return(
        <div className="popup">

                <div className='popop_container'>
                    <button onClick={()=>{
                         dispatch(reset())
                     }}>x</button>
                    <iframe
                    title="YouTube Video Player"

                    src={`https://www.youtube.com/embed/${Url}`}
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>

        </div>
    )
}
export default TrailerPop