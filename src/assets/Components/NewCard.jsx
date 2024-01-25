import { Card, CardHeader, Heading, CardBody, CardFooter, Button, IconButton, Text, Box} from '@chakra-ui/react'


export function CreateNewCard() {


  return (
        <Card margin={'1em'}>
          <CardHeader>
            <Heading  size='md'>RoboQuest</Heading>
          </CardHeader>
            <CardBody>
              <Text>Pasárselo enterito</Text>
            </CardBody>
        </Card>
  )
}