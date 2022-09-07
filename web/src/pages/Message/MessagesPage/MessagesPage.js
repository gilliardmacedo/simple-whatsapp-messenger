import { Flex } from '@chakra-ui/react'

import MessagesCell from 'src/components/Message/MessagesCell'
import Header from 'src/pages/HomePage/components/Header'

const MessagesPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <MessagesCell />
    </Flex>
  )
}

export default MessagesPage
