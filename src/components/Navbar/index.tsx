import React from "react"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, MenuIcon, useDisclosure, Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { DragHandleIcon } from "@chakra-ui/icons"

export const Navbar:React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box mb={3}>
        <Button onClick={onOpen}>
            <DragHandleIcon mr={2} />
            Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
  
            <DrawerBody>
              <Link to="/" >
                <Text mt={10} color="#e91e63" fontSize={22}>Login</Text>
              </Link>
              <Link to="/home" >
                <Text mt={3} color="#e91e63" fontSize={22}>Home</Text>
              </Link>
              <Link to="/http" >
                <Text mt={3} color="#e91e63" fontSize={22}>Http</Text>
              </Link>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Fechar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }