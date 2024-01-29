import { Card, CardHeader, Heading, CardBody, CardFooter, Button, IconButton, Text, Box} from '@chakra-ui/react'


export function CreateNewCard(props) {

  const {
    titulo,
    descripcion,
    status
  } = props


  return (
        <Card margin={'1em'}>
          <CardHeader>
            <Heading size='md'>
              {titulo}
              </Heading>
          </CardHeader>
            <CardBody>
              <Text>{descripcion}</Text>
            </CardBody>
        </Card>
  )
}