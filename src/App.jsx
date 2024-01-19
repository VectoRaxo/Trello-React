
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button, IconButton, Text, Box } from '@chakra-ui/react'
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Divider } from '@chakra-ui/react'

import './App.css'

import { ChakraProvider, Container } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Container className='mainPage' >
      <Grid templateColumns='repeat(3, 300px)' gap={3}>

        {/* TO DO */}

        <GridItem w='100%' h='100%' background={'lightgrey'} borderRadius={'1em'}>
          <Box  margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} textAlign={'left'}>
                <Text fontSize={'20px'} as={'b'} >
                  To do
                </Text>
              </GridItem>
              <GridItem colStart={3} textAlign={'right'}>
                <IconButton colorScheme='teal' variant='ghost' icon={<BsThreeDots />} />
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
          
        <Box margin={'auto'}>
          {/* Implementar funcion para crear cartas ? */}
        <Card margin={'1em'}>
          <CardHeader>
            <Heading  size='md'>RoboQuest</Heading>
          </CardHeader>
            <CardBody>
              <Text>Pasárselo enterito</Text>
            </CardBody>
        </Card>
        <Card margin={'1em'}>
          <CardHeader>
            <Heading  size='md'>RoboQuest</Heading>
          </CardHeader>
            <CardBody>
              <Text>Pasárselo enterito</Text>
            </CardBody>
        </Card>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}>
          Add a Card
        </Button>
        
        </Box>
        </GridItem>


    {/* DOING */}
        <GridItem w='100%' h='100%' background={'lightblue'} borderRadius={'1em'}>
          <Box textAlign={'left'} margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} >
                <Text fontSize={'20px'} as={'b'} >
                  Doing
                </Text>
              </GridItem>
              <GridItem colStart={3} >
                <Button alignContent={'right'}  leftIcon={<BsThreeDots />} colorScheme='teal' variant='ghost' />
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
        <Box  w='85%' margin={'auto'}>
          {/* Implementar funcion para crear cartas ? */}
        <Card>
          <CardHeader>
            <Heading  size='md'>RoboQuest</Heading>
          </CardHeader>
            <CardBody>
              <Text>Pasárselo enterito</Text>
            </CardBody>
        </Card>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}>
          Add a Card
        </Button>
        
        </Box>
        </GridItem>

    {/* COMPLETED */}
    <GridItem w='100%' h='100%' background={'lightgreen'} borderRadius={'1em'}>
          <Box textAlign={'left'} margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} >
                <Text fontSize={'20px'} as={'b'} >
                  Completed
                </Text>
              </GridItem>
              <GridItem colStart={3} >
                <Button alignContent={'right'}  leftIcon={<BsThreeDots />} colorScheme='teal' variant='ghost' />
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
        <Box  w='85%' margin={'auto'}>
          {/* Implementar funcion para crear cartas ? */}
        <Card>
          <CardHeader>
            <Heading  size='md'>RoboQuest</Heading>
          </CardHeader>
            <CardBody>
              <Text>Pasárselo enterito</Text>
            </CardBody>
        </Card>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}>
          Add a Card
        </Button>
        
        </Box>
        </GridItem>
      </Grid>
      </Container>
    </ChakraProvider>
  )
}
export default App
