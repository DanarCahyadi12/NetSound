import { InputGroup,InputRightElement,Input,IconButton,Skeleton ,Box,Heading,Text,Image} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"
import SearchResult from "./SearchResult"
import axios from "axios"
import GetAccessToken from "../../api/GetAccessToken"


const SearchComponents = () => {
    const URL = import.meta.env.VITE_BASE_URL
    const [datas,setDatas] = useState(null)
    const [pending,setPending] = useState(null)
    const [Error,setError] = useState({
        isError : false,
        log : ''
    })
    const [query,setQuery] = useState({
        query : null
    })

    const HandleInput = e => {
        setQuery({...query,[e.target.name] : e.target.value})
        
    }
    
    const HandleSubmit = async () => {
        setPending(true)
        try {

            const accessToken = await GetAccessToken()
            const responses = await axios.get(`${URL}/search?q=${query.query}&type=track%2Calbum%2Cplaylist%2Cartist&market=ID&limit=50`,{headers : {Authorization : `Bearer ${accessToken}`}})
            setDatas(responses.data)
            setPending(false)
        } catch (error) {
            setError({isError : true, log : error?.response.data.error})
        }
        
    }
    return (
    <>
    <InputGroup>    
        <Input placeholder='Search.....'  name="query"onChange={HandleInput} />
        <InputRightElement >
        <IconButton
            colorScheme='blue'
            aria-label='Search database'
            icon={<SearchIcon />}
            onClick={HandleSubmit}
        />
        </InputRightElement>
    </InputGroup>

    <Box  marginTop={'20px'}>
    {Error.isError 
    && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
        <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
        <Heading textAlign={'center'} >{Error?.log.status}</Heading>
        <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
       </Box>}
    {pending && !Error.isError && <Skeleton height={'100vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}    
    {datas && !pending && !Error.isError && <SearchResult props={datas}/>}
    </Box>
    
    </>
    )

}


export default SearchComponents