import { Flex } from '@chakra-ui/react'

import NewMessage from 'src/components/Message/NewMessage'
import Header from 'src/pages/HomePage/components/Header'

const NewMessagePage = () => {
  return (
    <Flex direction="column">
      <Header />
      <NewMessage />
    </Flex>
  )
}

export default NewMessagePage
