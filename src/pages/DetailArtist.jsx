import { Grid,Box, GridItem } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import Aside from "../components/Home/Aside"
import ArtistHeader from "../components/Artists/ArtistHeader"
import ArtistTopTracks from "../components/Artists/ArtistTopTracks"
import ArtistAlbum from "../components/Artists/ArtistAlbum"
import RelatedArtist from "../components/Artists/RelatedArtist"

const DetailArtists = () => {
    const {idArtist} =  useParams()

    return (
        <>
        <Box backgroundImage={'/public/ellipse.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'}>
        <Box backgroundImage={'/public/ellipse-blur-2.svg'} backgroundRepeat={'no-repeat'}>
        <Grid templateColumns={{md : '200px 1fr', base : '1fr'}}>
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem padding={30} minHeight={'100vh'} maxHeight={'100vh'} overflowY={'auto'}>
                <ArtistHeader props={{idArtist}}/>
                <ArtistTopTracks props={{idArtist}}/>
                <ArtistAlbum props={{idArtist}}/>
                <RelatedArtist props={{idArtist}}/>
            </GridItem>
        </Grid>
        </Box>
        </Box>
        </>
    )
}


export default DetailArtists