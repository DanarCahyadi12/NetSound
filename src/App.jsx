import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Album from './pages/Album'
import DetailArtists from './pages/DetailArtist'
import DetailPlaylist from './pages/DetailPlaylist'
import DetailAlbum from './pages/DetailAlbum'
function App() {
  const URL = import.meta.env.VITE_ROUTE_URL
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/search' element= {<Search/>}/>
          <Route path='/playlist' element= {<Playlist/>}/>
          <Route path='/album' element = {<Album/>}/>
          <Route path='/artist/:idArtist' element={<DetailArtists/>}/>
          <Route path='/playlist/:idPlaylist' element={<DetailPlaylist/>}/>
          <Route path='/album/:idAlbum' element={<DetailAlbum/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
    
  )
}

export default App
