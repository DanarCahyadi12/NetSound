import { Box,Text,Grid, GridItem,Heading, Image, Highlight } from '@chakra-ui/react';
import Aside from '../components/Home/Aside';
import Recomendations from '../components/Home/Recomendations';
import cloudMusic from "../assets/cloud-music.png"
import NewReleaseAlbums from '../components/Home/NewReleaseAlbums';

 function Home() {

    return (
        <Box backgroundImage={'/ellipse.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'top'}>
        <Box backgroundImage={'/ellipse 2.svg'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
        <Grid templateColumns={{base : '1fr',md : '200px 1fr'}}>
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem >
                <Box maxHeight={'100vh'} minHeight={'100vh'} overflowY={'auto'} padding={{base :'20px',md : '30px'}} >
                    <Text fontWeight={'bold'} fontSize={'3xl'}  paddingTop={'20px'}>Home</Text>
                    <Text fontWeight={'medium'} fontSize={{base : '20px ',md :'2xl'}} marginBottom={'10px'}>Recommendations</Text>
                    <Box marginTop={'20px'} minHeight={'40vh'}  maxHeight={'40vh'} overflowY={'auto'} >
                        <Recomendations/> 
                    </Box>
                 
                    <Grid templateColumns={{base :'1fr)',md : 'repeat(2,33vw)'} } justifyContent='left'  marginBottom={'50px'} >
                        <GridItem >
                            <Image src={cloudMusic} objectFit={'cover'} borderRadius={'none'} display={{base : 'none',md :" block"}}></Image>
                        </GridItem>
                        <GridItem >
                            <Box  paddingTop={'20%'} paddingLeft={{md : '8%',base :'0'}} >
                                <Heading  fontSize={{base :'60px',md :'5vw'} } >
                                    120++
                                </Heading>
                                <Heading bgClip={'text'} bgGradient='linear(to-l, #FF0080,#4893ff)' fontSize={{base :'80px',md :'5vw'} }>
                                    Genres
                                </Heading>
                            <Text fontWeight={'medium'}  marginLeft={'10px'} fontSize={{base :'2xl',md :'3vw'} } >Listen to songs of various genres.</Text>
                        </Box>
                        </GridItem>
                    </Grid>
                    

                    
                    <Grid templateColumns={{base : '1fr',lg : '30vw 1fr'}} marginTop={'15%'} padding={'20px'}> 
                        <GridItem >
                            <Heading fontSize={{base : '4xl',md :'4vw'}} marginBottom={'20px'}>
                                <Highlight query={'release'}styles={{px : '2',py : '1',bgColor : "#4d4e64",rounded : 'full',textColor : 'white',lineHeight : 'tall'}}>
                                    New release Albums!
                                </Highlight>
                            </Heading>
                        </GridItem>
                        <GridItem >
                                <NewReleaseAlbums/>
                        </GridItem>
                    </Grid> 
                </Box>
                
            </GridItem>
        </Grid>
        </Box>
        </Box>
    );
}

export default Home