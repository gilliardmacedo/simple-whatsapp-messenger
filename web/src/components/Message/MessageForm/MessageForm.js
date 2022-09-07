import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { FormControl, FormLabel, Button, Flex } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { Form, Submit, TextField } from '@redwoodjs/forms'

const MessageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.message?.id)
  }

  return (
    <Flex>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Input as={TextField} name="message" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="destination">
            Phone to (with country and area code)
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              as={TextField}
              type="tel"
              placeholder="558899999999"
              name="destination"
            />
          </InputGroup>
        </FormControl>

        <Flex paddingTop="50px" justify="center">
          <Submit disabled={props.loading}>
            <Button leftIcon={<EmailIcon />} colorScheme="blue">
              Send Message
            </Button>
          </Submit>
        </Flex>
      </Form>
    </Flex>
  )
}

export default MessageForm
