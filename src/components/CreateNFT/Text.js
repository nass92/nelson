import { Text, Box,   Textarea} from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import { useState } from "react"
import SendNFT from "./SendButton"




const TXT =() =>{

  let [value, setValue] = useState({txt: "",title:"", author: "", url:"" })

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue({...value, txt: inputValue})
  }

    return (
        <>
        <Container align='center' >
        <Box  h="55vh" backgroundColor="#6C6B6B"  w="md" borderWidth="10px" borderRadius="xl" boxShadow="2xl" p="10" overflow="hidden"  align="center">
           
        <Text align="center" fontSize="2xl">Transform your text to a NFT</Text>
        
          
          <form  id="first-name" >
          <Text align="center" fontSize="2xl">Your Text</Text>
          <Textarea 
        value={value.txt}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="lg"
        type="flushed"
        isRequired="true"
        height="30vh"
        
      />
            
            <SendNFT value={value} setValue={setValue} />
           </form>
          </Box>

       
        </Container>
        
</>


    )
}
export default TXT;