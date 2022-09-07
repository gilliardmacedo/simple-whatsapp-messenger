import { EmailIcon, HamburgerIcon, SunIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const MenuApp = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        color="white"
      />
      <MenuList>
        <Link to={routes.home()}>
          <MenuItem icon={<SunIcon />} command="⌘H">
            Home
          </MenuItem>
        </Link>
        <Link to={routes.messages()}>
          <MenuItem icon={<ViewIcon />} command="⌘T">
            View last messages
          </MenuItem>
        </Link>
        <Link to={routes.newMessage()}>
          <MenuItem icon={<EmailIcon />} command="⌘N">
            New message
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}

export default MenuApp
