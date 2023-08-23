import axios from "axios"
async function GetAccessToken () {
    const CLIENT_ID  = import.meta.env.VITE_CLIENT_ID
    const CLIENT_SECRET  = import.meta.env.VITE_CLIENT_SECRET

    const URL = import.meta.env.VITE_BASE_URL_TOKEN
    const results = await axios.post(`${URL}`,{grant_type: "client_credentials"},{headers : {'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)}})
    if(results) return results.data.access_token

        
}

 

export default GetAccessToken