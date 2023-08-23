import useFetch from "../../api/useFetch"
import { Heading,Text,Skeleton,Grid, GridItem, Box, Card,Link, Show,Hide} from "@chakra-ui/react"
import CutString from "../../helpers/CutString"
const NewReleaseAlbums = () => {
    
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/browse/new-releases?country=ID&limit=6`)
    const albums = datas?.albums
    return (
        <>
        {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        <Grid templateColumns={{lg : "repeat(3,1fr)",md : 'repeat(2,1fr)',base : 'repeat(2,1fr)'}} gap={'3'} marginBottom={'20px'}>
            {!pending && !Error.isError && albums.items.map(album => {
                const image = album.images[0].url
                return (
                    <GridItem key={album.id}>
                        <Card width={'full'} bgColor={'white'} borderRadius={'md'} boxShadow={'2xl'} minHeight={'20vh'} maxHeight={'20vh'} backgroundImage={image} backgroundSize={'cover'} backgroundPosition={'top'} backgroundRepeat={'no-repeat'}>
                          <Box width={'full'} height={'100vh'} borderRadius={'md'} bgGradient={'linear(to-b, whiteAlpha.100 10% , black 90%) '} paddingTop={'90px'} >
                            <Show above="md">
                                <Heading   fontSize={{lg : '1.5vw'}} marginLeft={{lg : '4',base :'3'}} marginTop={{base :'20px'}}>
                                    <Link textColor={'white'}   href={`/album/${album.id}`}>{CutString(12,album.name)}</Link>
                                </Heading>
                            </Show>
                            <Hide above="md">
                                <Heading   fontSize={{lg : '1.5vw'}} marginLeft={{lg : '4',base :'3'}} marginTop={{base :'10px'}}>
                                    <Link textColor={'white'}   href={`/album/${album.id}`}>{CutString(9,album.name)}</Link>
                                </Heading>
                            </Hide>
                          </Box>
                        </Card>
                    </GridItem>
                    )
                    
            })}
        </Grid>
        </>
    )
}


export default NewReleaseAlbums