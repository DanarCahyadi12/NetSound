import { useParams } from "react-router-dom"
import { Grid,Box, GridItem } from "@chakra-ui/react"
import Aside from "../components/Home/Aside"
import PlaylistHeader from "../components/Playlists/PlaylistHeader"
import PlaylistTrack from "../components/Playlists/PlaylistTrack"
const DetailPlaylist = () => {
    const {idPlaylist} = useParams()
    return (
        <>
        <Box backgroundImage={'/ellipse-blue.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'top'}>
        <Box backgroundImage={'/ellipse-blur.svg'} backgroundRepeat={'no-repeat'} backgroundPosition={'right'}>
        <Grid templateColumns={{md : '200px 1fr', base : '1fr'}}>
            <GridItem>
                <Aside/>
            </GridItem>
            <GridItem padding={30} minHeight={'100vh'} maxHeight={'100vh'} overflowY={'auto'}>  
                <PlaylistHeader props={{idPlaylist}} />
                <PlaylistTrack props={{idPlaylist}}/>
            </GridItem>
        </Grid>
        </Box>
        </Box>
        </>
    )
}

export default DetailPlaylist