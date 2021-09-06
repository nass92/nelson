import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import { Button, useColorMode, useColorModeValue, Stack, VStack } from "@chakra-ui/react";
import { Box, Text, Heading, useDisclosure } from "@chakra-ui/react";
import { Navbar } from 'react-bootstrap'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Login({ title, desc, ...rest }) {
  const [web3State, login] = useContext(Web3Context);
  const { toggleColorMode } = useColorMode();
  const { formBackground } = useColorModeValue("gray.100", "gray.300");
  const { isOpen: isOpenLogoutModal, onOpen: onOpenLogoutModal, onClose: onCloseLogoutModal } = useDisclosure();

  const handleClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };

  return (
    <>
      <Modal isOpen={isOpenLogoutModal} onClose={onCloseLogoutModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log out from a Dapp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You can not log out from a Dapp.</Text>
            <Text>If you want to log out of this website, do it directly from MetaMask.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onCloseLogoutModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Stack direction="row" spacing={6} justifyContent="space-between" px={8} pt={3}>
        <Button
          colorScheme="tomato"
          bg="green"
          onClick={() => (!web3State.isLogged ? handleClickLogin() : onOpenLogoutModal())}
        >
          {!web3State.isLogged ? "Log in" : web3State.chainId === 4 ?
            web3State.account.split("").splice(0, 6).join("") + "..." +
            web3State.account.split("").splice(-4).join("") : (<p style={{ color: "red" }}>WRONG NETWORK</p>)}
        </Button>

        <VStack >
          <Heading>
            <Navbar.Brand href="#home">Makamo N.</Navbar.Brand>
          </Heading>
          <p>The NelsonTokenAddress : <a href="https://rinkeby.etherscan.io/address/xxxxx" style={{ color: "red" }}>{ }</a></p>
        </VStack>
      </Stack>

    </>
  );
}

export default Login;