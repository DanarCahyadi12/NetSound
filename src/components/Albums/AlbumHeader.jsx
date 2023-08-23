import useFetch from "../../api/useFetch"
import { Box,Skeleton,Heading,Text, Grid, GridItem, Avatar,Link ,Image} from "@chakra-ui/react"
import CutString from "../../helpers/CutString"
import noteIcon from '../../assets/musical-note.png'
import CutArtistsString from "../../helpers/CutArtistsString"
import FormatDate from "../../helpers/FormatDate"
import FormatNumber from "../../helpers/FormatNumber"
const AlbumHeader = ({props}) =>{
    const {idAlbum} = props
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/albums/${idAlbum}?market=ID`)
    console.log('Details albums ',datas)

    return (
        <>
         {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}

        {!pending && <Grid templateColumns={'0.1fr 1fr'}  borderRadius={'md'} boxShadow={'md'} padding={5} gap={4}>
            <GridItem>
                <Avatar src={datas.images[0].url} borderRadius={'md'} boxSize={{md : '120px',base : '100px'}}/>
            </GridItem>
            <GridItem>
                <Heading fontWeight={'medium'} fontSize={{md : 20,base : 13}} marginBottom={1}>{datas.album_type}</Heading>
                <Heading fontSize={{md : '2vw',base : '1xl'}} break>{datas.name}</Heading>
                {CutArtistsString(103,datas.artists).map((data,index,arr) => {
                       return (
                           <Link href={`/artist/${data.id}`} fontSize={{base : '10px',md : '15px'} } key={data.id}>{data.name} {index !== arr.length -1 && ','}</Link>
                           )
                        })
                    }       
            </GridItem>
            <GridItem colSpan={2} >
                <Box display={'flex'} alignContent={'center'}>
                    <Text fontSize={15} >Release at {FormatDate(datas.release_date)}</Text>
                    <Image src={noteIcon} boxSize={{md : 4 ,base :3}} marginLeft={5} marginTop={1}/>
                    <Text fontSize={{md :15 ,base:13} } >{FormatNumber(datas.tracks.total)} songs</Text>
                </Box>

            </GridItem>
        </Grid>}
        </>
    )
}

export default AlbumHeader