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

export function CardModal(props) {

    const { isOpen, onOpen, onClose, isCards, setIsCards } = props
    
    const createCard = () => {
      setIsCards(!isCards)
      onClose()
      
    }  
  
    return (
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nueva Tarea</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Nueva cartita</p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button variant='ghost' onClick={createCard}>Aceptar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  )
}