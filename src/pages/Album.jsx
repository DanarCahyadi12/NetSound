import {Grid,Box,GridItem,Heading} from '@chakra-ui/react'
import Aside from '../components/Home/Aside'
import NewReleaseAlbums from '../components/Albums/NewReleaseAlbums'
const Album = () =>{

return (
        <>
        <Box backgroundImage={'/ellipse.svg' } backgroundRepeat={'no-repeat'}>
        <Box backgroundImage={"/ellipse-blur.svg"} backgroundRepeat={'no-repeat'}>
        <Box backgroundImage={'/ellipse-blur-2.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'right'}>
        <Grid templateColumns={{md : '200px 1fr',base : '1fr'}} >
            <GridItem>
                <Aside/>
            </GridItem>

            <GridItem padding={{md : 20,base : 5}} minHeight={'100vh'} maxHeight={'100vh'} overflowY={'auto'} >
            <Box marginTop={'1'} marginBottom={'4'}>
                <Heading fontSize={{md : '5vw',base : '8vw'}} textAlign={'center'}>New releases</Heading>
                <Heading bgClip={'text'} bgGradient={'linear(to-l,#fbcedf 45%,#4893ff 70% )'} fontSize={'5vw'} textAlign={'center'}>albums!</Heading>
            </Box>
                <NewReleaseAlbums/>
            </GridItem>
        </Grid>
        </Box>
        </Box>
        </Box>
        </>
    )
    
}

export default Album