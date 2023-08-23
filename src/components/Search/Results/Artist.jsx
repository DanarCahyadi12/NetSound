import {Box, Card, CardBody,Show,Hide,Link, CardHeader,Text, Grid,GridItem,Heading, Avatar} from "@chakra-ui/react"
import CutString from "../../../helpers/CutString"
const Artists = ({props}) => {

    return (
        <>
        <Heading marginTop={'20px'} marginBottom={5}>Result artists</Heading>
        <Box width={'100%'} minHeight={'100vh'} maxHeight={'100vh'} overflow={'auto'} >
      <Grid  templateColumns={{lg : 'repeat(5,1fr)',md : 'repeat(3,1fr)',base : 'repeat(2,1fr)'} } gap={3} marginTop={'10'} marginBottom={'279'}>
          {props.items.map((artist) => {
              const image = artist.images[0]?.url
              return (
              <GridItem >
                  <Card boxShadow={'md'} minHeight={'27vh'} maxHeight={'27vh'} key={artist.id}>
                      <CardHeader >
                          <Avatar src={image} boxSize={20} />
                      </CardHeader>

                      <CardBody marginTop={'-20px'}>
                          <Show above="md">
                              <Link fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.8vw'}} display={'block'}>{CutString(19,artist.name)}</Link>
                          </Show>
                          <Hide above="md">
                              <Link fontWeight={'medium'} fontSize={{lg : '1vw',md : '1.3vw',base : '2.8vw'}} display={'block'}>{CutString(21,artist.name)}</Link>
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

export default Artists