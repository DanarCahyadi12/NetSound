import {Box, Card, CardBody,Show,Hide,Link, CardHeader,Text, Grid,GridItem,Heading} from "@chakra-ui/react"
import CutString from "../../../helpers/CutString"

const Playlist = ({props}) => {

    return (
        <>
          <Heading marginTop={'20px'} marginBottom={5}>Result playlists</Heading>
          <Box width={'100%'} minHeight={'100vh'} maxHeight={'100vh'}   overflowY={'auto'}>
        <Grid  templateColumns={{lg : 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : 'repeat(2,1fr)'} } gap={3} marginTop={'10'} marginBottom={'290'}>
            {props.items.map((playlist) => {
                const image = playlist.images[0].url
                return (
                <GridItem> 
                    <Card boxShadow={'md'} minHeight={'33vh'} maxHeight={'33vh'} key={playlist.id}>
                        <CardHeader backgroundImage={image} borderRadius={'md'} backgroundSize={'cover'} backgroundPosition={'center'}>
                            <Box width={'full'} height={'10vh'}>
                            </Box>
                        
                        </CardHeader>

                        <CardBody>
                            <Show above="md">
                                <Link href={`/playlist/${playlist.id}`} fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.5vw'}} display={'block'}>{CutString(19,playlist.name)}</Link>
                            </Show>
                            <Hide above="md">
                                <Link href={`/playlist/${playlist.id}`} fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.5vw'}} display={'block'}>{CutString(29,playlist.name)}</Link>
                            </Hide>
                          <Text fontWeight={'light'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.3vw'}}>{CutString(25,playlist.owner.display_name)}</Text>
                          <Text fontSize={{md : 14,base : 13}} marginTop={'2'}>{playlist.tracks.total} songs</Text>
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


export default Playlist