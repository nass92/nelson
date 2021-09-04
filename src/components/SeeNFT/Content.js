import { Center, Heading, Image, Container, VStack } from "@chakra-ui/react"
import ContentModal from "./SeeContent"
import { AspectRatio } from "@chakra-ui/react"
import React from 'react'
import ReactPlayer from 'react-player'
const Content = ({ nft }) => {
  return (
    <Container >
      <VStack spacing="20px">
        <Center mt="-5" position="relative">
          <Heading as="h1" size="lg">{nft.title}</Heading>
        </Center>

        <Center >
          <ReactPlayer
            className='react-player'
            url={nft.url}

            width='100%'
            height='60%'
            controls
          />



        </Center>

        <Center>
          <ContentModal txt={nft.txt} />
        </Center>

      </VStack>
    </Container>
  )
}

export default Content