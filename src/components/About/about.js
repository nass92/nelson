import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, useDisclosure, Link
} from "@chakra-ui/react"
import Lorem from './lorem'

function About() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Link onClick={onOpen}>About</Link>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About Nelson Makamo </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={1} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default About
