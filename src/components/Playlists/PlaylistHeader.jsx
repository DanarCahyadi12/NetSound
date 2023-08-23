import { Box, Grid, GridItem ,Skeleton,Heading,Text, Avatar,Image} from "@chakra-ui/react"
import useFetch from "../../api/useFetch"
import likeIcon from '../../assets/heart.png'
import { useEffect, useState } from "react"
import axios from "axios"
import GetAccessToken from "../../api/GetAccessToken"
import CutString from "../../helpers/CutString"
import FormatNumber from "../../helpers/FormatNumber"   
import noteIcon from "../../assets/musical-note.png"
const PlaylistHeader = ({props}) => {
    const {idPlaylist } = props
    const URL = import.meta.env.VITE_BASE_URL
    const [userProfile,setUserProfile] = useState(null)
    const {datas,pending,Error} = useFetch(`${URL}/playlists/${idPlaylist}`)
    
    useEffect(() => {
        if(!pending){ 
            GetAccessToken()
            .then(accToken =>{
                axios.get(datas.owner.href,{headers : {Authorization : `Bearer ${accToken}`}})
                .then(res => setUserProfile(res.data.images[0].url))
            })
        
                
        }
            
        
    },[datas])
    
    return (
        <>
        {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        {!pending && <Box borderRadius={'md'} boxShadow={'md'} padding={5}>
            <Grid templateColumns={ '0.1fr 1fr' } gap={{md : 10 , base : 5}}>
                <GridItem>
                    <Avatar src={datas.images[0].url}  borderRadius={'md'} boxSize={{md : '120px',base : '100px'}}/>
                </GridItem>
                <GridItem>
                    <Heading fontSize={{md : '3.5vw',base : '1xl'}} break>{CutString(69,datas.name)}</Heading>
                    <Text fontSize={{md : '15px',base : '11px'}} marginTop={'10px'}>{datas.description}</Text>
                </GridItem>
                <GridItem colSpan={2} display={'flex'}>
                    <Box display={'flex'}>
                        <Image src={likeIcon} boxSize={{md : 7 ,base :5}} />
                        <Text marginLeft={'2'} fontSize={{md : '15px',base : '13px'}}>{FormatNumber(datas.followers.total)} likes</Text>
                    </Box>
                    
                    <Box display={'flex'} marginLeft={'3'}>
                        <Avatar src={userProfile} boxSize={{md : 7 ,base :5}}></Avatar>
                        <Text marginLeft={'2'} fontSize={{md : '15px',base : '13px'}}>{datas.owner.display_name} </Text>
                    </Box>
                    <Box display={'flex'} marginLeft={'3'}>
                        <Image src={noteIcon} boxSize={{md : 6 ,base :5}} />
                        <Text>{FormatNumber(datas.tracks.total)} songs</Text>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
        }   
        </>
    )
}

export default PlaylistHeader