import {Box, Card, CardBody,Show,Hide,Link, CardHeader, Grid,GridItem,Heading} from "@chakra-ui/react"
import CutString from "../../../helpers/CutString"
import CutArtistsString from "../../../helpers/CutArtistsString"

const Albums = ({props}) => {

    return (
        <>
        
        <Heading marginTop={'20px'} marginBottom={5}>Result albums</Heading>
        <Box width={'100%'} minHeight={'100vh'} maxHeight={'100vh'} overflow={'auto'} >
        <Grid  templateColumns={{lg : 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : 'repeat(2,1fr)'} } gap={3} marginTop={'10'} marginBottom={'290'}>
            {props.items.map((album,index) => {
                const image = album.images[0].url
                return (
                <GridItem>
                    <Card boxShadow={'md'} minHeight={'30vh'} maxHeight={'30vh'} key={album.id}>
                        <CardHeader backgroundImage={image} borderRadius={'md'} bgSize={'cover'} backgroundPosition={'center'}>
                            <Box width={'full'} height={'10vh'}>
                            </Box>
                        
                        </CardHeader>

                        <CardBody>
                            <Heading fontSize={'19'} marginBottom={'1.5'}>{album.album_type}</Heading>
                            <Show above="md">
                                <Link href="" fontSize={{lg : '1vw',md : '1.5vw',base : '2vw'}} fontWeight={'bold'} display={'block'}>{CutString(20,album.name)}</Link>
                            </Show>
                            <Hide above='md'>
                                
                                <Link href="" fontSize={{lg : '1vw',md : '1.5vw',base : '2vw'}} fontWeight={'bold'} display={'block'}>{CutString(24,album.name)}</Link>
                            </Hide>

                      
                         <Show above="md">
                            {CutArtistsString(22,album.artists).map((data,index,arr) => {
                                return (
                                    <Link href="" key={data.id} fontSize={{lg : '1vw',md : '1.5vw',base : '1vw'}}>{data.name}{index !== arr.length-1 && ","}</Link>
                                    )
                                })}
                            </Show>
                        <Hide above="md">
                            {CutArtistsString(22,album.artists).map((data,index,arr) => {
                                return (
                                    <Link href="" key={data.id} fontSize={{lg : '1vw',md : '1.5vw',base : '2vw'}}>{data.name}{index !== arr.length-1 && ","}</Link>
                                    )
                                })}
                        </Hide>
                        </CardBody>
                    </Card>
                </GridItem>
                )
            })}
        </Grid>
        </Box>
        </>
    )

}

export default Albums