import axios from 'axios'
import  {useState,useEffect}  from  'react'
import GetAccessToken from './GetAccessToken'
const useFetch =  url => {
    const [datas,setDatas] = useState(null)
    const [pending,setPending] = useState(true)
    const [Error,setError] = useState({
        isError : false,
        log : ''
    })
    
    useEffect(() => {
        const FetchData =  async() => {
            const accessToken = await GetAccessToken()                   
        
        try {
            axios.get(url,{headers : {Authorization : `Bearer ${accessToken}`}})
            .then(res => {
                setDatas(res.data)
                setPending(false)
            })
            .catch(err => setError({isError:true, log : err.response?.data.error}))
        } catch (error) {
            setError({isError : true, log : error })
            setPending(false)
        }
      } 

      FetchData()

      return () => {
        setDatas(null);
        setPending(true);
        setError({isError: false, log : ''});
      };
    },[url])

    return {datas,pending,Error}

}

export default useFetch