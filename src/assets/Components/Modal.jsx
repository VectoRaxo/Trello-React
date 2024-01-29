import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

import { Input, Stack, Textarea, Text  } from '@chakra-ui/react'
import { useState } from 'react';
import { Radio, RadioGroup } from '@chakra-ui/react'


export function CardModal(props) {

    const { isOpen,
            onOpen,
            onClose,
            cards,
            setCards,
            currentStatus,
            setCurrentStatus
          } = props
    

    // Estado para almacenar el contenido del input
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescript, setTaskDescript] = useState('')

    const createCard = () => {
    // Verificar si hay contenido en el input antes de crear la tarjeta
      if (taskTitle.trim() !== '') {
        // Crear una nueva tarjeta con el contenido del input
        const nuevaTarjeta = {
          titulo: taskTitle,
          descripcion: taskDescript,
          status: currentStatus
          // Otros detalles de la tarjeta...
        };

        // Actualizar el conjunto de tarjetas y cerrar el modal
        setCards([...cards, nuevaTarjeta]);
        setTaskTitle('')
        setTaskDescript('')
        onClose();
      }
    };
  
    return (
  
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Titulo:
          <Stack>
            {/* Añadir evento onChange para actualizar el estado del input */}
            <Input
              placeholder='Nombre de tarea'
              size='md'
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Stack>
          <Stack>
            Estado de la tarea:
            <RadioGroup defaultValue={currentStatus}
              onChange={(e) => setCurrentStatus(e)}
            >
              <Stack spacing={5} paddingTop={'0.5em'} margin={'5px'} direction='row'>
                <Radio colorScheme='gray' value='toDo'>
                  To Do
                </Radio>
                <Radio colorScheme='blue' value='doing'>
                  Doing
                </Radio>
                <Radio colorScheme='green' value='completed'>
                  Completed
                </Radio>
              </Stack>
            </RadioGroup>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Text mb='8px'>Descripción de la tarea: </Text>
        <Textarea
          value={taskDescript}
          onChange={(e) => setTaskDescript(e.target.value)}
          placeholder='Descripción de la tarea'
          size='sm'
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Cancelar
          </Button>
          {/* Llamar a createCard sin argumentos, ya que el valor se toma del estado del input */}
          <Button variant='ghost' onClick={createCard}>
            Aceptar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}