
import { Grid, GridItem, Heading, chakra, useDisclosure } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button, IconButton, Text, Box} from '@chakra-ui/react'

import { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Divider } from '@chakra-ui/react'

import './App.css'
import { CardModal } from './assets/Components/Modal';
import { ChakraProvider, Container } from '@chakra-ui/react'
import { CreateNewCard } from './assets/Components/NewCard';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cards, setCards] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('toDo')

  const onOpenModal = (section) => {
    setCurrentStatus(section);
    onOpen();
  };
  
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Container className='mainPage' >
      <Grid templateColumns='repeat(3, 300px)' gap={3}>

        {/* TO DO */}

        <GridItem w='100%' h='100%' background={'lightgray'} borderRadius={'1em'}>
          <Box  margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} textAlign={'left'}>
                <Text fontSize={'24px'} as={'b'} >
                  To do
                </Text>
              </GridItem>
              <GridItem colStart={3} textAlign={'right'}>
                <IconButton colorScheme='teal' variant='ghost' icon={<BsThreeDots />} marginBottom={'1em'}/>
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
          
        <Box margin={'auto'}>
          <>
          {cards.length > 0 ? (
            cards.map((tarjeta, index) => (
              tarjeta.status === 'toDo' ? (
              <div key={index}>
                <CreateNewCard
                titulo={tarjeta.titulo}
                descripcion={tarjeta.descripcion}
                status={tarjeta.status}
                />
              </div>
               ) : null
            ))
          ) : (
            <p>No hay tarjetas</p>
          )}
          </>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}
         onClick={() => onOpenModal('toDo')} >
          Add a Card
        </Button>
        
        </Box>
        </GridItem>


    {/* DOING */}
    <GridItem w='100%' h='100%' background={'lightblue'} borderRadius={'1em'}>
          <Box  margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} textAlign={'left'}>
                <Text fontSize={'24px'} as={'b'} >
                  Doing
                </Text>
              </GridItem>
              <GridItem colStart={3} textAlign={'right'}>
                <IconButton colorScheme='teal' variant='ghost' icon={<BsThreeDots />} marginBottom={'1em'}/>
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
          
        <Box margin={'auto'}>

          {/* Implementar funcion para crear cartas ? */}
          <>
          {cards.length > 0 ? (
            cards.map((tarjeta, index) => (
              tarjeta.status === 'doing' ? (
              <div key={index}>
                <CreateNewCard
                titulo={tarjeta.titulo}
                descripcion={tarjeta.descripcion}
                status={tarjeta.status}
                />
              </div>
               ) : null
            ))
          ) : (
            <p>No hay tarjetas</p>
          )}
          </>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}
         onClick={() => onOpenModal('doing')} >
          Add a Card
        </Button>
        
        </Box>
        </GridItem>

    {/* COMPLETED */}
    <GridItem w='100%' h='100%' background={'lightgreen'} borderRadius={'1em'}>
          <Box  margin={'1em'}>
            <Grid templateColumns='repeat(3, 33%)'>
              <GridItem colStart={1} colEnd={3} textAlign={'left'}>
                <Text fontSize={'24px'} as={'b'} >
                  Completed
                </Text>
              </GridItem>
              <GridItem colStart={3} textAlign={'right'}>
                <IconButton colorScheme='teal' variant='ghost' icon={<BsThreeDots />} marginBottom={'1em'}/>
              </GridItem>
            </Grid>  
            <Divider />
          </Box>
          
        <Box margin={'auto'}>

          {/* Implementar funcion para crear cartas ? */}
          <>
          {cards.length > 0 ? (
            cards.map((tarjeta, index) => (
              tarjeta.status === 'completed' ? (
              <div key={index}>
                <CreateNewCard
                titulo={tarjeta.titulo}
                descripcion={tarjeta.descripcion}
                status={tarjeta.status}
                />
              </div>
               ) : null
            ))
          ) : (
            <p>No hay tarjetas</p>
          )}
          </>
        <Button textAlign={'left'} leftIcon={<GoPlus />} colorScheme='teal' variant='ghost' margin={'1em'}
         onClick={() => onOpenModal('completed')} > 
          Add a Card
        </Button>
        
        </Box>
        </GridItem>
      </Grid>
      </Container>

      <CardModal 
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cards={cards}
        setCards={setCards}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
      />

      


    </ChakraProvider>
  )
}
export default App
