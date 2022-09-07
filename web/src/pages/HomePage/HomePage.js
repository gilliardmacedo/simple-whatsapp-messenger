import { EmailIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Header from './components/Header'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Simple whatsapp messenger"
        description="Simple whatsapp messenger"
      />
      <Header />
      <Flex
        direction="column"
        paddingTop="100px"
        gap="100px"
        justifyContent="space-between"
      >
        <Flex justifyContent="center">
          <Heading>Welcome, user!</Heading>
        </Flex>
      </Flex>
    </>
  )
}

export default HomePage
