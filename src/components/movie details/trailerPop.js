import '../css/trailerPop.css'
function TrailerPop({url,closepopup}){
    return(
        <div className="popup">

                <div className='popop_container'>
                    <button onClick={()=>{
                         closepopup()
                     }}>x</button>
                    <iframe
                    title="YouTube Video Player"

                    src={`https://www.youtube.com/embed/${url}`}
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>

        </div>
    )
}
export default TrailerPop
