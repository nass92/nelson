import { Text, Box, Textarea } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { useState } from "react"
import SendNFT from "./SendButton"




const TXT = () => {

  let [value, setValue] = useState({ txt: "", title: "", author: "", url: "" })

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue({ ...value, txt: inputValue })
  }

  return (
    <>
      <Container align='center' >
        <Box h="40vh" backgroundColor="#EBEBEB" w="25rem" borderWidth="10px" borderRadius="xl" boxShadow="2xl" p="10" overflow="hidden" align="center">

          <Text align="center" fontSize="2xl">Creation Of a NFT</Text>


          <form id="first-name" >

            <Textarea
              mt='20px'
              value={value.txt}
              onChange={handleInputChange}
              placeholder="Here is a sample placeholder"
              size="sm"
              type="flushed"
              isRequired="true"
              height="20vh"
              w='15rem'
            />

            <SendNFT mt='80px' value={value} setValue={setValue} />
          </form>
        </Box>


      </Container>

    </>


  )
}
export default TXT;