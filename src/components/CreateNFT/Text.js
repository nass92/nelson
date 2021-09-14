import React from "react";
import {Box, CloseButton, Button} from "@chakra-ui/react"
import { useToast} from "@chakra-ui/react"
import { DappContext} from "../../Dapp"
import { useState, useContext } from "react"
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import { useForm } from "react-hook-form"
import axios from "axios";
require('dotenv').config()

const Create= () => {
  const [web3State] = useContext(Web3Context);
  const TXT = useContext(DappContext)
  const toast = useToast()
  const {
    register,
    watch,
    handleSubmit,
  } = useForm();
  const [, setLoading] = useState(false)

  const pinOnIpfs = async (file) => {
  try {
    let formatData = new FormData();
    formatData.append("file", file);

    const hash = await axios.post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, formatData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formatData._boundary}`,
          pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
        },
      })
      .then((result) => result.data.IpfsHash);

    return hash
  } catch (e) {
    console.error(e.message)
  }
}


const handleSendNFT = async () => {
  try {
    setLoading(true)
    const txt = watch().message.trim().split("").filter(el => !['!','?','.',';',':','/',','].includes(el)).join('').split('  ').join('').toLowerCase()
    const textHashed = await ethers.utils.id(txt)
    const hash = await pinOnIpfs(watch().file[0])
    const nft = {
      author: watch().author.toString(),
      textHashed: textHashed,
      txt: watch().message,
      url: `https://gateway.pinata.cloud/ipfs/${hash}`,
      title: watch().title,
    }
    console.log(nft)
    const tx = await TXT.certify(nft.textHashed, nft.txt, nft.title, nft.url, nft.author)
    console.log('coucou')
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
    console.log(e)
     toast({
      title: 'Error',
      description: e.message,
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
    <form onSubmit={handleSubmit(handleSendNFT)} className="contact-form">
    <h2>Create Your NFT</h2>
    <div className="form-content">
      <input
        type="text"
        required
        placeholder="Artist name"
        {...register('author')}
      />
      <input
        type="text"
        placeholder="NFT title"
        {...register('title')}
      />
      
   
      <input
        type="file"
        id='file'
        name='file'
        accept='image/*, video/*'
        placeholder="https://ipfs.io/ipfs/Qmede1ffVCyfg3YvPoAhSmFY3p8CeCzRPHejoX8hv6YrNL "
        {...register('file')}
      />
         
        
      <textarea
        placeholder="message *"
        {...register('message')}
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