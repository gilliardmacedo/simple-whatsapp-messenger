import { EmailIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const NewMessageButton = () => {
  return (
    <Link to={routes.newMessage()}>
      <Button leftIcon={<EmailIcon />} size="lg" colorScheme="blue">
        New message
      </Button>
    </Link>
  )
}

export default NewMessageButton
