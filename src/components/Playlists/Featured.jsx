import useFetch from "../../api/useFetch"
import { Skeleton,Box,Text,Heading, Grid, GridItem ,Card, Show,Hide,Link} from "@chakra-ui/react"
import CutString from "../../helpers/CutString"
const Featured = () => {
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/browse/featured-playlists?country=ID&limit=10`)
    console.log('FEATURED ',datas)
    
    return (
        <>
         {Error.isError 
            && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
            </Box>}
        {pending && !Error.isError && <Skeleton height={'35vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}  
        <Grid templateColumns={{lg : 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : 'repeat(2,1fr)'} } gap={3}>
            {!pending && datas.playlists.items.map(playlist => {
                const image = playlist.images[0].url
                return (
                <GridItem bgColor={'white'}  key={playlist.id} >
                    <Card width={'full'} bgColor={'white'} borderRadius={'md'} boxShadow={'2xl'} minHeight={'20vh'} maxHeight={'20vh'} backgroundImage={image} backgroundSize={'cover'} backgroundPosition={'top'} backgroundRepeat={'no-repeat'}>
                          <Box width={'full'} height={'100vh'} borderRadius={'md'} bgGradient={'linear(to-b, whiteAlpha.100 10% , black 90%) '} paddingTop={'90px'} >
                            <Show above="md">
                                <Heading   fontSize={{lg : '1.5vw'}} marginLeft={{lg : '4',base :'3'}} marginTop={{base :'20px'}}>
                                    <Link href={`/playlist/${playlist.id}`} textColor={'white'}  >{CutString(15,playlist.name)}</Link>
                                </Heading>
                            </Show>
                            <Hide above="md">
                                <Heading   fontSize={{lg : '1.5vw'}} marginLeft={{lg : '4',base :'3'}} marginTop={{base :'10px'}}>
                                    <Link href={`/playlist/${playlist.id}`} textColor={'white'}  >{CutString(20,playlist.name)}</Link>
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

export default Featured