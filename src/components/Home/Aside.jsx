import {  Box,Text,Image,Link,Grid,Hide ,Show,GridItem} from "@chakra-ui/react";
import homeIcon from "../../assets/home.png"
import playlistIcon from "../../assets/playlist.png"
import albumIcon from "../../assets/album.png";
import searchIcon  from "../../assets/search.png"



function Aside () {
    
    return ( 
        <>
        <Show above="md">
          <Box  boxShadow={'md'} padding={{md : '15px',base : '8px'} } maxHeight={'100vh'} minHeight={'100vh'} bgColor={'white'} >
            <Box marginTop={'20px'} display={'inline-flex'} >
                <Text  fontWeight={'bold'} marginLeft={'10px'} marginBottom={'13px'} marginTop={'10px'} >NetSound</Text>
            </Box>
            
            <Box marginLeft={{base : "7px",md :'10px' } } width={{base : "80%",md :'90%'}}>
            <Link href="/">
                <Box marginBottom={'10px'} width={'100%'} display={'inline-flex'}  cursor={'pointer'}  _hover={{bgColor : "#f6dafe"}} padding={'8px'} borderRadius={'5px'} transition={'200ms'}> 
                    <Image src={homeIcon} boxSize={{md :'25px',base :'17px'}} ></Image>
                    <Text marginLeft={{base : "10px",md : '20px'}} fontSize={{base : "10px",md : "17px"}}>Home</Text>
                </Box>
            </Link>
            <Link href="/search">
                <Box marginBottom={'10px'} display={'inline-flex'} width={'100%'} cursor={'pointer'} _hover={{bgColor : "#f6dafe"}} padding={'8px'} borderRadius={'5px'} transition={'200ms'}> 
                    <Image src={searchIcon} boxSize={{md :'25px',base :'17px'}} ></Image>
                    <Text marginLeft={{base : "10px",md : '20px'}} fontSize={{base : "10px",md : "17px"}}>Search</Text>
                </Box>
            </Link>
            <Link href="/playlist">
                <Box marginBottom={'10px'} display={'inline-flex'} width={'100%'} cursor={'pointer'} _hover={{bgColor : "#f6dafe"}} padding={'8px'} borderRadius={'5px'} transition={'200ms'}> 
                    <Image src={playlistIcon} boxSize={{md :'30px',base :'17px'}} ></Image>
                    <Text marginLeft={{base : "10px",md : '20px'}} fontSize={{base : "10px",md : "17px"}}>Playlists</Text>
                </Box>
            </Link>
            <Link href="/album">
                <Box marginBottom={'10px'} display={'inline-flex'} width={'100%'} cursor={'pointer'} _hover={{bgColor : "#f6dafe"}} padding={'8px'} borderRadius={'5px'} transition={'200ms'}> 
                    <Image src={albumIcon} boxSize={{md :'30px',base :'17px'}} ></Image>
                    <Text href="/album" marginLeft={{base : "10px",md : '20px'}} fontSize={{base : "10px",md : "17px"}}>Albums</Text>
                </Box>
            </Link>
            </Box>

            </Box>
          </Show>

          <Hide above="md">
            <Box width={'100%'} height={'50px'} bgColor={'white'} boxShadow={'md'} padding={'10px'} position={'fixed'}  bottom={'0'} zIndex={1}>
                <Grid templateColumns={'repeat(2,1fr)'}  gap={'10'}>
                    <GridItem display={'grid'} gridTemplateColumns={{base : 'repeat(5,40px)',sm  : 'repeat(5,50px)' }  } alignContent={'center'} marginLeft={'10px'}>
                        <Link href="/">
                            <Image src={homeIcon} boxSize={'20px'} ></Image>
                        </Link>
                        <Link href="/search">
                            <Image src={searchIcon} boxSize={'21px'} marginTop={'1px'}></Image>
                        </Link>
                        <Link href="/playlist">
                            <Image src={playlistIcon} boxSize={'26px'} marginTop={'-0.5'}></Image>
                        </Link>
                        <Link href='/album'>
                            <Image src={albumIcon} boxSize={'24px'}></Image>
                        </Link>
                    </GridItem>
                </Grid>
            </Box>
          </Hide>
        </>
    )
}

export default Aside