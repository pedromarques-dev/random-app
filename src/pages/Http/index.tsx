import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Image, Input, Select, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import api from '../../services'

export const Http: React.FC = () => {

  const [ srcImage, setSrcImage ] = useState("")
  const [ code, setCode ] = useState<number>(0)
  const [ inputValue, setInputValue ] = useState<number>(0)
  const [ isChecked, setIsChecked ] = useState<boolean>(false)

  const imageNotFound = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"

  useEffect(() => {
    const fetch = async () => {
      const response = await api.httpCats.getOneImageByHttpCode(code)
      console.log(response)

    }

    fetch()

  }, [code])

  const handleChange = (e: any) => {
    setCode(e.target.value)
  }

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
    setCode(inputValue)
  }

  return (
   <>
      <Navbar />
      <Flex 
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
          <Flex
            justifyContent="center"
            alignItems="center"
            bgColor="rgba(255,255,255,0.3)"
            borderRadius={20}
            h={300}
            p={20}
            my={300}
          >
            <Box>
              <Flex justifyContent="center" alignItems="center">
                <Select
                    w={400}
                    placeholder="Selecione o status HTTP que deseja: "
                    isDisabled={isChecked}
                    bg="#FFA7B9"
                    color="#e91e63"
                    borderWidth={0.4}
                    borderColor="primary.500"
                    onChange={handleChange}
                    value={code}
                    mr={10}
                    variant="filled"
                  >
                    <option style={{ backgroundColor: "#FFA7B9" }} value=""></option>
                    {
                      api.httpCats.httpCodes.map((code: number, index: number) => (
                          <option style={{ backgroundColor: "#FFA7B9"}} key={`${code}-${index}`} value={code}>
                            {code}
                          </option>
                      ))
                    }
                  </Select>
              </Flex>
              <Box>
              <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)} mt={5} colorScheme="pink">
                Quero selecionar outro codigo HTTP
              </Checkbox>
              {
                isChecked && 
                  <Box>
                      <Input 
                        type="number"
                        w={200}
                        my={10}
                        bgColor="#fff"
                        py={6}
                        placeholder="Digite seu codigo http aqui"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                  </Box>
              }
            </Box>
            </Box>
            <Image src={srcImage} w={200} h={200} />

          </Flex>
      </Flex>
   </>
  )
}
