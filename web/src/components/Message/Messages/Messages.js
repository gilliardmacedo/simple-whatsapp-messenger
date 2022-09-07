import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const MessagesList = ({ messages }) => {
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th isNumeric>Id</Th>
            <Th>Message</Th>
            <Th>Destination</Th>
            <Th>Created at</Th>
          </Tr>
        </Thead>
        <Tbody>
          {messages.map((message) => (
            <Tr key={message.id}>
              <Td isNumeric>{truncate(message.id)}</Td>

              <Td>{truncate(message.message)}</Td>

              <Td>{truncate(message.destination)}</Td>

              <Td>{timeTag(message.createdAt)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default MessagesList
