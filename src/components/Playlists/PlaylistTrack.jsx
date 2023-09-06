import { useState,useRef, useEffect } from "react"
import useFetch from "../../api/useFetch"
import { Box,Skeleton,Show,Text,Hide, Avatar,Image,Link,Heading, Button} from "@chakra-ui/react"
import clock from "../../assets/clock.png"
import CutString from "../../helpers/CutString"
import CutArtistsString from  "../../helpers/CutArtistsString"
import ConvertDuration from "../../helpers/ConvertDuration"
import playButton from  '../../assets/play-button.png'
import pauseButton from "../../assets/pause.png"
import GetAccessToken from "../../api/GetAccessToken"
import axios from "axios"
const PlaylistTrack = ({props}) => {
    const {idPlaylist } = props
    const URL =import.meta.env.VITE_BASE_URL
    const audioRef = useRef(new Audio)
    const [indexButton,setIndexButton] = useState(null)
    
    const [dataHeader,setDataHeader] = useState({
        href : null,
        limit : null,
        next : null,
        offset : null,
        previous : null,
        total : 0
    })
    const [items,setItems] = useState([])
    const {datas,pending,Error} = useFetch(`${URL}/playlists/${idPlaylist}/tracks`)
    useEffect(() => {
        setItems(datas?.items)
        setDataHeader({
            href : datas?.href,
            limit : datas?.limit,
            next : datas?.next,
            offset : datas?.offset,
            previous : datas?.previous,
            total : datas?.total,
        })
    },[datas])

    useEffect(() => {
        if(dataHeader.next) {
            GetAccessToken()
            .then(accToken => {
                axios.get(dataHeader.next,{headers : {Authorization : `Bearer ${accToken}`}})
                .then(res => {
                    const responseItems = res.data.items
                    setDataHeader({
                        href : res.data.href,
                        limit : res.data.limit,
                        next: res.data.next,
                        offset : res.data.offset,
                        previous : res.data.previous,
                        total : res.data.total,
                    })           
                    const newItems = [...items,...responseItems]
                    setItems(newItems)
                    
                    
                })
            })
            
        }
    },[dataHeader.next])

    
    const PlayAudio = src => {
        audioRef.current.src = src
        audioRef.current.play()
    }
    
    const PauseAudio = () => {
        audioRef.current.pause()
    }
    
    return (
        <>
         <Box marginTop={4}>
            <Box display={'grid'} padding={'10px'} borderRadius={'md'}  border={'1px solid black'} marginBottom={'2'} gridTemplateColumns={'0.1fr 0.2fr 1fr 1fr 0.5fr 0.2fr'} justifyContent={'left'} alignItems={'center'} gap={3}>
                <Box></Box>
                <Box></Box>
                <Text>Title</Text>
                <Text>Artist</Text>
                <Box>
                    <Image src={clock}  boxSize={5} marginLeft={'65%'}/>
                </Box>
                <Box></Box>
            </Box>
            <Box maxHeight={'60vh'}  overflowY={'auto'}>
                {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
                <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
                <Heading textAlign={'center'} >{Error?.log.status}</Heading>
                <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
            </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'50vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
            {items && items.map((item ,i) => {
            const image = item.track.album.images[0].url
            return (
                <Box display={'grid'} padding={'10px'} key={item.track.id} borderRadius={'md'}  border={'1px solid black'} marginBottom={'2'} gridTemplateColumns={{md :   '0.1fr 0.2fr 1fr 1fr 0.2fr 0.2fr' ,base :  '0.1fr 0.2fr 1fr 1fr  0.2fr'}  } justifyContent={'left'} alignItems={'center'} gap={3}>
                <Text fontSize={{md :'13px',base : '10px'} }>{i+1}</Text>
                <Avatar borderRadius={'md'}src={image} boxSize={{base : '7vw',md : '38'}}></Avatar>
                <Show above="md">
                    <Heading fontSize={{md :'15px',base : '11px'} } >{CutString(80,item.track.name)}</Heading>
                </Show>
                <Hide above="md">
                    <Heading fontSize={{md : '15px' ,base: '11px'}} >{CutString(13,item.track.name)}</Heading>
                </Hide>
                <Show above="lg">
                <Box>
                   {CutArtistsString(103,item.track.artists).map((data,index,arr) => {
                       return (
                           <Link href={`/artist/${data.id}`} fontSize={{base : '11px',md : '15px'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                           )
                        })
                    }       
                </Box>
                </Show>

                <Hide above="lg">
                <Box>
                   {CutArtistsString(13,item.track.artists).map((data,index,arr) => {
                       return (
                           <Link href={`/artist/${data.id}`} fontSize={{base : '11px',md : '15px'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                           )
                        })
                    }       
                </Box>
                </Hide>
                <Text fontSize={{base : '11px' ,md : '13px'}} display={{md : 'block',base :'none'}} justifySelf={'right'} >{ConvertDuration(item.track.duration_ms)}</Text>
                <Link href={item.track.uri} justifySelf={'right'} >
                    {indexButton === i ?  <Image onMouseEnter={() => {
                        PlayAudio(item.track.preview_url)
                        setIndexButton(i)
                      } 
                    } onMouseLeave={() => {
                        PauseAudio()
                        setIndexButton(null)
                    } } src ={ pauseButton} boxSize={{md : 5,base : 3}} justifySelf={'right'} marginRight={'4'}></Image>
                    :
                    <Image onMouseEnter={() => {
                        PlayAudio(item.track.preview_url)
                        setIndexButton(i)
                      } 
                    } onMouseLeave={() => {
                        PauseAudio()
                        setIndexButton(null)
                    } } src ={ playButton} boxSize={{md : 5,base : 3}} justifySelf={'right'} marginRight={'4'}></Image>
                }
                   
                </Link>
           </Box>
                )
            })}
            </Box>
         </Box>
        </>
    )

}

export default PlaylistTrack