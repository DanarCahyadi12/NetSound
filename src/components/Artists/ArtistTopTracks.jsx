import useFetch from "../../api/useFetch"
import { Skeleton,Box,Heading,Text, Grid, Show,Hide,Avatar,Link,Image } from "@chakra-ui/react"
import ConvertDuration from "../../helpers/ConvertDuration"
import CutArtistsString from "../../helpers/CutArtistsString"
import CutString from "../../helpers/CutString"
import playButton from '../../assets/play-button.png'
const ArtistTopTracks = ({props}) => {
    const {idArtist} = props
    console.log('Id Artist ',idArtist)
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/artists/${idArtist}/top-tracks?market=ID`)

    return (
        <>
        <Box marginTop={'5'}>
          {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'40vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'40vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        </Box>
        
        {!pending && <Heading marginTop={'10'} marginBottom={'10px'}>Top Tracks</Heading> } 
        {!pending && <Box  marginTop={'3'} minHeight={'60vh'} maxHeight={'60vh'} overflowY={'auto'}>
                  { datas.tracks.map((track,i) => {
                    const image = track.album.images[0].url
                    return (
                       <Box display={'grid'} padding={'10px'} key={track.id} borderRadius={'md'}  border={'1px solid black'} marginBottom={'2'} gridTemplateColumns={'0.1fr 0.2fr 1fr 1fr 0.5fr 0.2fr'} justifyContent={'left'} alignItems={'center'} gap={3}>
                            <Text fontSize={{md :'1vw',base : '10px'} }>{i+1}</Text>
                            <Avatar borderRadius={'md'}src={image} boxSize={{base : '7vw',md : '38'}}></Avatar>
                            <Show above="md">
                                <Heading fontSize={{md :'1vw',base : '1vw'} } >{CutString(80,track.name)}</Heading>
                            </Show>
                            <Hide above="md">
                                <Heading fontSize={{md : '1vw' ,base: '1.9vw'}} >{CutString(20,track.name)}</Heading>
                            </Hide>
                            <Show above="md">
                            <Box>
                               {CutArtistsString(103,track.artists).map((data,index,arr) => {
                                   return (
                                       <Link href={`/artist/${data.id}`} fontSize={{base : '2vw',md : '1.1vw'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                                       )
                                    })
                                }       
                            </Box>
                            </Show>

                            <Hide above="md">
                            <Box>
                               {CutArtistsString(20,track.artists).map((data,index,arr) => {
                                   return (
                                       <Link href={`/artist/${data.id}`} fontSize={{base : '2vw',md : '1.1vw'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                                       )
                                    })
                                }       
                            </Box>
                            </Hide>
                            <Text fontSize={{base : '2vw' ,md : '1vw'}} justifySelf={'right'}>{ConvertDuration(track.duration_ms)}</Text>
                            <Link href={track.uri} justifySelf={'right'}>
                                <Image src ={ playButton} boxSize={{md : 5,base : 3}} justifySelf={'right'} marginRight={'4'}></Image>
                            </Link>
                       </Box>
                    )
                })
            }
            </Box>
        }
        </>
    )
}


export default ArtistTopTracks