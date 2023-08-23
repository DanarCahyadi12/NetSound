import useFetch from "../../api/useFetch"
import {Heading,Text,Skeleton,Box, Grid, GridItem,Avatar} from '@chakra-ui/react'
import FormatNumber from "../../helpers/FormatNumber"
import UpperCaseFirstArrayChar from "../../helpers/UpperCaseFirstArrayChar"
const ArtistHeader = ({props}) => {
    const {idArtist} = props
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/artists/${idArtist}`)

    return (
        <>
        {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        {datas &&
        <Grid width={'full'} padding={10} gap={3} templateColumns={{md : '0.14fr 1fr' ,base : '1fr'} } boxShadow={'md'} borderRadius={'md'}>
            <GridItem> 
                <Avatar src={datas.images[0].url} borderRadius={'md'} boxSize={{md : '120px',base : 'full'} }/>
            </GridItem>
            <GridItem>
                <Heading fontSize={'3xl'} >{datas.name}</Heading>
                <Text fontSize={'1xl'} marginTop={'3'}>{FormatNumber(datas.followers.total)} followers</Text>
                <Box display={'flex'}>
                {UpperCaseFirstArrayChar(datas.genres).map((genre,index,arr) => {
                    return (
                            <Text key={index} fontSize={'1xl'}>{genre}{index !== arr.length-1 && ',' }</Text>
                        
                    )
                })}
                </Box>
            </GridItem>
        </Grid>}
        
        
        </>
    )
}

export default ArtistHeader