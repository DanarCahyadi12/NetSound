import { Box, Grid ,Card, CardHeader, Avatar,Link,Image, CardBody,Skeleton, Heading,Text,Button, Show, Hide} from "@chakra-ui/react"
import CutString from "../../helpers/CutString"
import CutArtistsString from "../../helpers/CutArtistsString"
import playButton from "../../assets/play-button.png"
import useFetch from "../../api/useFetch"


const Recomendations = () => {
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/recommendations?limit=6&market=ID&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=electronic%2Cr-n-b%2Calt-rock&seed_tracks=0c6xIDDpzE81m2q797ordA`)
    const tracks = datas?.tracks

    return (
        <>
        {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        <Grid templateColumns={{base : 'repeat(2,1fr)',lg : 'repeat(3,1fr)'}}  gap={{base : '2',md : '3'}} justifyContent={{base : 'center'} } >
            { !pending && !Error.isError && tracks.map(track => {
                return (
                    <Card  bgColor={'white'} key={track.id} maxH={'10vh'} minH={'10vh'} >
                        <CardBody  maxW={'100%%'} minW={'100%'}   display={'grid'} gridTemplateColumns={'40px 1fr'} >
                            <Avatar  boxSize={{base : '40px', md : '50px'}} marginTop={'-2'} marginLeft={'-2'} borderRadius={'md'} src={track.album.images[0].url} ></Avatar>
                            <Show above="md">
                              <Box marginLeft={{base : '10px',md : '20px'}}  marginTop={'-3'}  width={'full'} >
                                <Link href={track.uri} fontWeight={'medium'}  fontSize={{base : "12px",md : '1.6vw',lg :'1.2vw',sm : "2.2vw"}}>{CutString(30,track.name)}</Link>
                              </Box>
                            </Show>
                            <Hide above="md">
                             <Box marginLeft={{base : '5px',md : '20px'}}  marginTop={'-3'}  width={'full'}>
                                <Link href={track.uri} fontWeight={'medium'}  fontSize={{base : "12px",md : '1.6vw',lg :'1.2vw',sm : "2.2vw"}}>{CutString(15,track.name)}</Link>
                             </Box>
                            </Hide>
                        </CardBody>
                        
                    </Card>
                )
            }) }
        </Grid>

        </>
    )
}


export default Recomendations
