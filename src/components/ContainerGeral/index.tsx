import { Flex } from '@chakra-ui/react'
import React from 'react'

interface IProps {
  children: React.ReactNode;
}

export const ContainerGeral: React.FC<IProps> = ({children}) => (
    <Flex 
        w="100%" 
        justifyContent="center" 
        bgGradient='linear(to-br, #FFA7B9,#e91e63, #964268, #2B0D39 )'
        minH="100vh" 
    >
      {children}
    </Flex>
)