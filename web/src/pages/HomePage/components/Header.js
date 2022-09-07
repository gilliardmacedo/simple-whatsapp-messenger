import { Flex, Heading } from '@chakra-ui/react'

import MenuApp from './MenuApp'

const Header = () => {
  return (
    <Flex
      maxH="50rem"
      backgroundColor="#9999ff"
      align="center"
      padding="20px"
      gap="10px"
    >
      <MenuApp />
      <Flex>
        <Heading size="lg" color="white" alignSelf="center">
          Simple WA Messenger
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Header
