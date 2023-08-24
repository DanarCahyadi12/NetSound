import { useParams } from "react-router-dom"
import { Box,Grid,GridItem } from "@chakra-ui/react"
import Aside from "../components/Home/Aside"
import AlbumHeader from "../components/Albums/AlbumHeader"
import AlbumTrack from "../components/Albums/AlbumTrack"
const DetailAlbum = () => {
    const {idAlbum} = useParams()

    return (
        <>
        <Box backgroundImage={'/ellipse-blue.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'top'}>
        <Box backgroundImage={'/ellipse-blur.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'right'}>
        <Grid templateColumns={{md : '200px 1fr', base : '1fr'}}>
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem padding={30} minHeight={'100vh'} maxHeight={'100vh'} overflowY={'auto'}>  
                <AlbumHeader props={{idAlbum}}/>
                <AlbumTrack props={{idAlbum}} />
            </GridItem>
        </Grid>
        </Box>
        </Box>
        </>
    )
}

export default DetailAlbum