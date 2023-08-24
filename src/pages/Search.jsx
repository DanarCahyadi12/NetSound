import { Box, Grid, GridItem } from "@chakra-ui/react"
import SearchComponents from "../components/Search/SearchComponents"
import Aside from "../components/Home/Aside"



const Search = () => {
    return (
        <>
        <Box  backgroundImage={'/ellipse-blur-2.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'right'}>
        <Box  backgroundImage={'/ellipse-blur.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'bottom'}>
        <Box  backgroundImage={'/Blob-vector.png'} backgroundRepeat={'no-repeat'}>
        <Grid templateColumns={{base : '0.9fr',md : '200px 0.9fr'}} gap={'30px'} justifyContent={{base : 'center', md : "unset"}}>
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem >
                <Box  minHeight={'100vh'} maxHeight={'100vh'} marginTop={'20px'}>
                  <SearchComponents/>
                </Box>
            </GridItem>
        </Grid>
        </Box>
        </Box>
        </Box>
        
        </>
    )
}

export default Search