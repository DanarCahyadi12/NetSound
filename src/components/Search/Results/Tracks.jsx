import { Box, Heading ,Hide,Text, Avatar,Image,Link, Show} from "@chakra-ui/react"
import playButton from "../../../assets/play-button.png"
import ConvertDuration from "../../../helpers/ConvertDuration"
import CutString from "../../../helpers/CutString"
import CutArtistsString from "../../../helpers/CutArtistsString"
import { useState,useRef } from "react"
import pauseButton from '../../../assets/pause.png'


const Tracks = ({props}) => {
    const [indexButton,setIndexButton] = useState(null)
    const audioRef = useRef(new Audio)
    
    const PlayAudio = src => {
        audioRef.current.src = src
        audioRef.current.play()
    }
    
    const PauseAudio = () => {
        audioRef.current.pause()
    }

    return (
        <>
        <Heading marginTop={'20px'} >Result tracks</Heading>
        <Box  height={'100vh'} overflowY={'auto'} >
            <Box marginTop={'30px'}>
                { props.items.map((track,i) => {
                        const image = track.album.images[0].url
                        return (
                            <Box display={'grid'} padding={'10px'} key={track.id} borderRadius={'md'}  border={'1px solid black'} marginBottom={'2'} gridTemplateColumns={{md :   '0.1fr 0.2fr 1fr 1fr 0.2fr 0.2fr' ,base :  '0.1fr 0.2fr 1fr 1fr  0.2fr'}  } justifyContent={'left'} alignItems={'center'} gap={3}>
                            <Text fontSize={{md :'13px',base : '10px'} }>{i+1}</Text>
                            <Avatar borderRadius={'md'}src={image} boxSize={{base : '7vw',md : '38'}}></Avatar>
                            <Show above="md">
                                <Heading fontSize={{md :'15px',base : '11px'} } >{CutString(80,track.name)}</Heading>
                            </Show>
                            <Hide above="md">
                                <Heading fontSize={{md : '15px' ,base: '11px'}} >{CutString(16,track.name)}</Heading>
                            </Hide>
                            <Show above="lg">
                            <Box>
                               {CutArtistsString(103,track.artists).map((data,index,arr) => {
                                   return (
                                       <Link href={`/artist/${data.id}`} fontSize={{base : '11px',md : '15px'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                                       )
                                    })
                                }       
                            </Box>
                            </Show>
            
                            <Hide above="lg">
                            <Box>
                               {CutArtistsString(13,track.artists).map((data,index,arr) => {
                                   return (
                                       <Link href={`/artist/${data.id}`} fontSize={{base : '11px',md : '15px'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                                       )
                                    })
                                }       
                            </Box>
                            </Hide>
                            <Text fontSize={{base : '11px' ,md : '13px'}} display={{md : 'block',base :'none'}} justifySelf={'right'} >{ConvertDuration(track.duration_ms)}</Text>
                            <Link href={track.uri} justifySelf={'right'} >
                                {indexButton === i ?  <Image onMouseEnter={() => {
                                    PlayAudio(track.preview_url)
                                    setIndexButton(i)
                                  } 
                                } onMouseLeave={() => {
                                    PauseAudio()
                                    setIndexButton(null)
                                } } src ={ pauseButton} boxSize={{md : 5,base : 3}} justifySelf={'right'} marginRight={'4'}></Image>
                                :
                                <Image onMouseEnter={() => {
                                    PlayAudio(track.preview_url)
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
                    })
                }
            </Box>
        </Box>
        </>
    )

}

export default Tracks