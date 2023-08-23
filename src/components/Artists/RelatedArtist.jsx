import useFetch from "../../api/useFetch"
import {Box, Card, CardBody,Show,Hide,Link, CardHeader,Text, Grid,GridItem,Heading, Avatar,Skeleton} from "@chakra-ui/react"
import CutString from "../../helpers/CutString"
const RelatedArtist = ({props}) => {
    const {idArtist} = props
    const URL = import.meta.env.VITE_BASE_URL
    const {datas,pending,Error} = useFetch(`${URL}/artists/${idArtist}/related-artists`)
    

    return (
        <>
         {Error.isError  && <Box width={'full'} bgColor={'red'} borderRadius={'md'} height={'30vh'}>
            <Heading textAlign={'center'} paddingTop={'40px'}>Something Error</Heading>
            <Heading textAlign={'center'} >{Error?.log.status}</Heading>
            <Text textAlign={'center'} fontSize={'4xl'}>{Error?.log.message}</Text>
        
        </Box>}
        {pending && !Error.isError && <Skeleton isLoaded={!pending} height={'30vh'} width={ 'full'} borderRadius={'md'}></Skeleton>}
        {!pending && <Heading marginTop={'20'}>Related artists</Heading>}
           <Box width={'100%'} minHeight={'50vh'} maxHeight={'50vh'} overflow={'auto'} >
      <Grid  templateColumns={{lg : 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : 'repeat(2,1fr)'} } gap={3} marginTop={'10'} marginBottom={'20px'}>
          {!pending && datas.artists.map((artist) => {
              const image = artist.images[0]?.url
              return (
              <GridItem >
                  <Card boxShadow={'md'} minHeight={'27vh'} maxHeight={'27vh'} key={artist.id}>
                      <CardHeader >
                          <Avatar src={image} boxSize={20} />
                      </CardHeader>

                      <CardBody marginTop={'-20px'}>
                          <Show above="md">
                              <Link  href={`/artist/${artist.id}`} fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.8vw'}} display={'block'}>{CutString(19,artist.name)}</Link>
                          </Show>
                          <Hide above="md">
                              <Link href={`/artist/${artist.id}`} fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.8vw'}} display={'block'}>{CutString(21,artist.name)}</Link>
                          </Hide>
                        <Text fontSize={{md : 14,base : 14}} fontWeight={'thin'} marginTop={'2'}>{artist.type} </Text>
                      </CardBody>
                  </Card>
              </GridItem>
              )
          })}
      </Grid>
      </Box>
        </>
    )
}

export default RelatedArtist