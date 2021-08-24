import Login from './loguin'
import { Button, useColorMode, useColorModeValue, Stack, VStack } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import { Box, Text, Heading, useDisclosure } from "@chakra-ui/react";
import About from '../About/about';
import { Navbar, Nav, Container } from 'react-bootstrap'


const NavBar = () => {

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
    <Navbar bg="light" variant="light">
      <Container>

        <Navbar.Brand href="#home">Nakamo N.</Navbar.Brand>

        <Nav className="justiify-content-end" >
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#art">Art</Nav.Link>
          <Nav.Link href="#about"> <About /> </Nav.Link>
        </Nav>

        <Nav>
          <Button
            colorScheme="tomato"
            bg="#D6D6D6"
            onClick={() => (!web3State.isLogged ? handleClickLogin() : onOpenLogoutModal())}
          >
            {!web3State.isLogged ? "Log in" : web3State.chainId === 4 ?
              web3State.account.split("").splice(0, 6).join("") + "..." +
              web3State.account.split("").splice(-4).join("") : (<p style={{ color: "red" }}>WRONG NETWORK</p>)}
          </Button>

          <Button colorScheme="tomato" bg="#D6D6D6" onClick={toggleColorMode}>
            Dark Mode
            </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar;

