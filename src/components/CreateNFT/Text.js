import React from "react";
import { Input,Box, InputGroup, InputLeftAddon,CloseButton, Textarea, Stack, Button} from "@chakra-ui/react"
import {useDisclosure, useToast} from "@chakra-ui/react"
import { DappContext} from "../../Dapp"
import { useState, useContext } from "react"
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";

const Create= () => {
  let [value, setValue] = useState({txt: "",title:"", author: "", url:"" })
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue({...value, txt: inputValue})
  }
  const TXT = useContext(DappContext)
  const [web3State] = useContext(Web3Context);
  const [, setLoading] = useState(false)
  const toast = useToast()


const handleSendNFT = async () => {
  const txt = value.txt.trim().split("").filter(el => !['!','?','.',';',':','/',','].includes(el)).join('').split('  ').join('').toLowerCase()
  const textHashed = await ethers.utils.id(txt)
 
   const nft = {
      author: value.author.toString(),
      textHashed: textHashed,
      txt: value.txt,
      url: value.url,
      title: value.title,
      }
     setLoading(true)
   try {
    const tx = await TXT.certify(nft, web3State.account)
    const network = web3State.networkName.toLowerCase()
    const link = `https://${network}.etherscan.io/tx/${tx.hash}`
   
     toast({
      title: 'Transaction sent successfully !',
       render: () => (
          <Box color="white" p={3} bg="green.500" rounded={20}>
            <CloseButton />
            <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p>
            <br />You can view your pending transaction at hash :
            <br /><a target="blank" style={{color: "orange"}} href={link}>{tx.hash}</a>
          </Box>),
      position: 'bottom',
      duration: 9000,
      isClosable: true,
    })
    await tx.wait()
  } catch (e) {
     toast({
      title: 'Error',
      description:  e.message,
      status: 'error',
      position: 'top-right',
      duration: 9000,
      isClosable: true,
    })
  } finally {
    setLoading(false)
  }
}

  return(
    <form className="contact-form">
    <h2>contactez-nous</h2>
    <div className="form-content">
      <input
        type="text"
        required
        onChange={(e) => setValue({...value, author: e.target.value})} 
        placeholder="Artist name"
        value={value.author}
      />
      <input
        type="text"
        onChange={(e) => setValue({...value, title: e.target.value})} 
        placeholder="NFT title"
        value={value.title}
      />
      
   
      <input
        type="text"
        onChange={(e) => setValue({...value, url: e.target.value})} 
        placeholder="https://ipfs.io/ipfs/Qmede1ffVCyfg3YvPoAhSmFY3p8CeCzRPHejoX8hv6YrNL "
        value={value.url}
      />
         
        
      <textarea
        onChange={handleInputChange}
        placeholder="message *"
        value={value.txt}
        required
      />
    </div>
    
    <Button onClick={handleSendNFT}  colorScheme="blue" mr={3}>
    Create
              </Button>
    <div className="form-message"></div>
  </form>
  );
};





export default Create;