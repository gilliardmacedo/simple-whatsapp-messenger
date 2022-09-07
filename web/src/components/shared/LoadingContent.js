import { Flex, Spinner } from '@chakra-ui/react'

const LoadingContent = () => {
  return (
    <Flex paddingTop="100px" justify="center">
      <Spinner />
    </Flex>
  )
}

export default LoadingContent
