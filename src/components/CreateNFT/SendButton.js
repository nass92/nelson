import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  CloseButton,
} from "@chakra-ui/react"
import { useDisclosure, useToast } from "@chakra-ui/react"
import { DappContext } from "../../Dapp"
import { useState, useContext, React } from "react"
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";



const SendNFT = ({ value, setValue }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const TXT = useContext(DappContext)
  const [web3State] = useContext(Web3Context);
  const [, setLoading] = useState(false)
  const toast = useToast()


  const handleSendNFT = async () => {
    const txt = value.txt.trim().split("").filter(el => !['!', '?', '.', ';', ':', '/', ','].includes(el)).join('').split('  ').join('').toLowerCase()
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
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Transaction sent successfully !</p>
            <br />You can view your pending transaction at hash :
            <br /><a target="blank" style={{ color: "orange" }} href={link}>{tx.hash}</a>
          </Box>),
        position: 'bottom',
        duration: 9000,
        isClosable: true,
      })
      await tx.wait()
    } catch (e) {
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


  return (
    <>
      <Button onClick={onOpen}>Create NFT</Button>


      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>


            <FormControl mt={4}>
              <FormLabel>Author Adresse</FormLabel>
              <Input value={value.author}
                onChange={(e) => setValue({ ...value, author: e.target.value })}
                placeholder="0xe5F6bABf4600E5c5C2Ff3C6400e5f8c16A0BB7AB" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author Name</FormLabel>
              <Input value={value.title}
                onChange={(e) => setValue({ ...value, title: e.target.value })}
                placeholder="Monkey" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Image url (optional)</FormLabel>
              <Input
                value={value.url}
                onChange={(e) => setValue({ ...value, url: e.target.value })}
                placeholder="https://ipfs.io/ipfs/QmaKPJRAPf9fij2epXWLuQrMGPVWEbK4Fv7RDLwGZcFS3N"
              />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSendNFT} colorScheme="blue" mr={3}>
              Create
              </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SendNFT;