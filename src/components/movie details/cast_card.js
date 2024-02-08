import '../css/cast_card.css'

function CastCard(props){
    let{data}=props
    return(
    <div className="cast_card">
        <img src={`http://image.tmdb.org/t/p/w500${data.profile_path}`} />
        <div className='box'>
           <h3>{data.name}</h3>
           <p>{data.character}</p>
        </div>
    </div>
    )
}
export default CastCard