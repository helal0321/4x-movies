const baseUrl='https://api.themoviedb.org/3/'
const apiKey=process.env.REACT_APP_API_KEY

export const fetchData=async(endPoind,parameters='')=>{
    try{
        const res=await fetch(`${baseUrl}${endPoind}?api_key=${apiKey}${parameters}`)
        const data=await res.json()
        return data
    }
    catch(error){
        console.log(error)
    }
}
