const baseUrl='https://api.themoviedb.org/3/'
const apiKey='ecb054ba5b9937f5cc725e5c599ededa'

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