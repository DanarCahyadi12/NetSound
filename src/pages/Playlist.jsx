import { Box, Grid, GridItem, Image ,Heading, Highlight} from "@chakra-ui/react"
import Aside from "../components/Home/Aside"
import headphoneImage from "../assets/headphone.svg"
import Featured from "../components/Playlists/Featured"
const Playlist = () => {
    return (
        <>
        <Box width={'full'} backgroundImage={'public/ellipse-blue.svg'} backgroundRepeat={'no-repeat'} height={'100vh'} backgroundPosition={'left'} > 
        <Grid templateColumns={{md : '200px 1fr',base : '1fr'}} >
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem padding={30} justifyItems={'center'} overflowY={'auto'} height={'100vh'}>
                <Box display={'grid'} gridTemplateColumns={{base : '1fr ',md: '0.8fr 1fr'} }  gap={30} >
                    <Box marginLeft={{md : '70px',base : '10px'}} paddingTop={{md : '25%',base : '5%'}}> 
                        <Heading fontSize={{md : '4vw',base :'8vw'}} textAlign={{base : 'center',md :'left'}} lineHeight={'tall'}>
                            <Highlight query={'playlists'} styles={{px : '2',py: '1',rounded : 'full', bg : '#edb4c8'}}>
                                Many playlists here.
                            </Highlight>
                            
                        </Heading>
                        <Heading textAlign={{base : 'center',md : 'left'}} fontSize={{md : '2vw',base : '5vw'} }>Listen now!</Heading>
                    </Box>
                    <Box>
                        <Image src={headphoneImage} boxSize={{base : '55vw',md :'34vw'}} margin={'auto'}/>
                    </Box>
                </Box>

                <Box marginTop={'30px'}>
                    <Featured/>
                </Box>


            </GridItem>
        </Grid>
        </Box>
        </>
    )

}

export default Playlist