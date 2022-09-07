import { ViewIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const ViewMessagesButton = () => {
  return (
    <Link to={routes.messages()}>
      <Button leftIcon={<ViewIcon />} size="lg" colorScheme="blue">
        View last messages
      </Button>
    </Link>
  )
}

export default ViewMessagesButton
