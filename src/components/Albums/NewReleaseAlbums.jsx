import { VStack,Box,  Heading,Grid ,GridItem,Show,Hide,Card,CardHeader,CardBody,Link,Skeleton} from "@chakra-ui/react"
import useFetch from "../../api/useFetch"
import CutArtistsString from "../../helpers/CutArtistsString"
import CutString from "../../helpers/CutString"
const NewReleaseAlbums = () => {
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/browse/new-releases?country=ID&limit=20`)
    
    return (
        <>
         {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        <VStack align={'stretch'}>
            <Grid templateColumns={{lg: 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : "repeat(2,1fr)"} } gap={3} >
                {!pending && datas.albums.items.map(album => {
                    const image = album.images[0].url
                    return (
                        <GridItem >
                             <Card boxShadow={'md'} minHeight={'33vh'} maxHeight={'33vh'} key={album.id}>
                        <CardHeader backgroundImage={image} borderRadius={'md'} bgSize={'cover'} backgroundPosition={'center'}>
                            <Box width={'full'} height={'10vh'}>
                            </Box>
                        
                        </CardHeader>

                        <CardBody>
                            <Heading fontSize={{base : '14',md : '19'}} marginBottom={'1.5'}>{album.album_type}</Heading>
                            <Show above="md">
                                <Link href={`/album/${album.id}`} fontSize={{lg : '1vw',md : '1.5vw',base : '4vw'}} fontWeight={'bold'} display={'block'}>{CutString(20,album.name)}</Link>
                            </Show>
                            <Hide above='md'>
                                
                                <Link href={`/album/${album.id}`} fontSize={{lg : '1vw',md : '1.5vw',base : '4vw'}} fontWeight={'bold'} display={'block'}>{CutString(11,album.name)}</Link>
                            </Hide>

                      
                         <Show above="md">
                            {CutArtistsString(20,album.artists).map((data,index,arr) => {
                                return (
                                    <Link href={`/artist/${data.id}`} key={data.id}  fontSize={{lg : '1vw',md : '1.5vw',base : '2.4vw'}}>{data.name}{index !== arr.length-1 && ","}</Link>
                                    )
                                })}
                            </Show>
                        <Hide above="md">
                            {CutArtistsString(22,album.artists).map((data,index,arr) => {
                                return (
                                    <Link href={`/artist/${data.id}`} key={data.id} fontSize={{lg : '1vw',md : '1.5vw',base : '2.4vw'}}>{data.name}{index !== arr.length-1 && ","}</Link>
                                    )
                                })}
                        </Hide>
                        </CardBody>
                    </Card>
                    </GridItem>
                    )
                })}
            </Grid>
        </VStack>
        
        </>
    )
}

export default NewReleaseAlbums