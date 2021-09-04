import { Circle, Box } from "@chakra-ui/react"
import Content from "./Content"



const NFT = ({ nft }) => {
  return (

    <Box h="35vh" backgroundColor="#F9F9F9" w="17rem" borderWidth="5px" borderRadius="xl" boxShadow="xl" p="7" overflow="hidden" align="center">
      <Circle mb="-8" position="relative" bottom="1rem" left="-11rem" size="16" fontWeight="bold" fontSize="40" color="#463A38" >
        {nft.id}
      </Circle>

      <Content nft={nft} />

    </Box>

  )

}

export default NFT