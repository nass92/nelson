import { Stack, HStack, VStack, Box, Heading, Text } from "@chakra-ui/react"


function Feature({ title, desc, ...rest }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}


function StackEx() {
  return (
    <VStack className='justify-content-center' spacing={3}>
      <Feature
        title="MetaMask"
        desc="Please Install Metamask extension before use any fonction of this site."
      />

    </VStack>
  )
}

export default StackEx
