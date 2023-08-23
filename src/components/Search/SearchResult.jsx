import { Box,Button } from "@chakra-ui/react"
import { useState } from "react"
import Tracks from "./Results/Tracks"
import Albums from "./Results/Albums"
import Playlist from "./Results/Playlists"
import Artists from "./Results/Artist"

const SearchResult = ({props}) => {
    const {tracks} = props
    const {albums} = props
    const {playlists} = props
    const {artists} = props
    
    const [types,setTypes] = useState({
        tracks : true,
        albums : false,
        playlists : false,
        artists : false
    })

    const HandleTypes = e => {
        
        if(e.target.name === 'tracks' && !types.tracks  ){
            setTypes({
                tracks : true,
                albums : false,
                playlists : false,
                artists : false
            })
        
            return
            
        } 
        if(e.target.name === 'albums' && !types.albums ) {
            setTypes({
                tracks : false,
                albums : true,
                playlists : false,
                artists : false
            })
            
            return
        } 
        if(e.target.name === 'playlists' && !types.playlists) {
            setTypes({
                tracks : false,
                albums : false,
                playlists : true,
                artists : false
            })
            return
        } 
        if(e.target.name === 'artists' && !types.artists) {
            setTypes({
                tracks : false,
                albums : false,
                playlists : false,
                artists : true
            })
            
            return
        } 
    }

    return (
        <>
         <Box  display={'grid'} gridTemplateColumns={'repeat(4,80px)'}  gap={3} marginTop={'20px'}  >
        {types.tracks ? 
        <Button name="tracks" onClick={HandleTypes} colorScheme="blue" variant={'solid'} borderRadius={'md'} textAlign={'center'} color={'white'}>tracks</Button> 
        : 
        <Button name="tracks" onClick={HandleTypes}  borderRadius={'md'} variant={'outline'} textAlign={'center'} color={'black'}>tracks</Button>}

        {types.albums ?
        <Button name="albums" onClick={HandleTypes}  borderRadius={'md'}  colorScheme="blue" variant={'solid'} textAlign={'center'} color={'white'}>albums</Button>
         :
        <Button name="albums" onClick={HandleTypes}  borderRadius={'md'} textAlign={'center'} variant={'outline'} color={'black'}>albums</Button>}

        {types.playlists ?
        <Button name="playlists" onClick={HandleTypes}  borderRadius={'md'}  colorScheme="blue" variant={'solid'} textAlign={'center'} color={'white'}>playlists</Button> 
        :
        <Button name="playlists" onClick={HandleTypes}  borderRadius={'md'} textAlign={'center'} variant={'outline'} color={'black'}>playlists</Button>}

        {types.artists ?
        <Button name="artists" onClick={HandleTypes}  borderRadius={'md'}  colorScheme="blue" variant={'solid'} textAlign={'center'} color={'white'}>artists</Button> 
        :
        <Button name="artists" onClick={HandleTypes} variant={'outline'}  borderRadius={'md'} textAlign={'center'} color={'black'}>artists</Button>}
    </Box>
    
    {types.tracks && <Tracks props={tracks}/>}
    {types.albums && <Albums props={albums}/>}
    {types.playlists && <Playlist props={playlists}/>}
    {types.artists && <Artists props={artists}/>}
        
        </>
    )

    
}

export default SearchResult