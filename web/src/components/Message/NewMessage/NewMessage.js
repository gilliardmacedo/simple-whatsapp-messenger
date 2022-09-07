import { Flex } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MessageForm from 'src/components/Message/MessageForm'

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

const NewMessage = () => {
  const [createMessage, { loading, error }] = useMutation(
    CREATE_MESSAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Message created')
        navigate(routes.messages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMessage({ variables: { input } })
  }

  return (
    <Flex justify="center">
      <MessageForm onSave={onSave} loading={loading} error={error} />
    </Flex>
  )
}

export default NewMessage
