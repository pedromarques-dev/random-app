import * as React from "react";
import { useNavigation } from "react-router-dom";
import { 
    Button,
    Center,
    Checkbox,
    Flex,
    FormControl,
    Input,
    Text,
} from "@chakra-ui/react";
import { useHistory } from "../../hooks/useHistory";

export const Login: React.FC = () => {

    const history = useHistory();
    return (
        <Center>
            <FormControl>
                <Flex
                    bgColor="rgba(255,255,255,0.3)"
                    mt={50}
                    w={500}
                    flexDir="column"
                    borderWidth={1}
                    borderRadius={20}
                    borderColor="#ffffff"
                    padding={10}
                >
                    <Text 
                        color="#ffffff" 
                        fontWeight="bold" 
                        fontSize={30}
                        pt={5}
                    >
                        LOGIN
                    </Text>
                    <Input
                        bgColor="#fff"
                        type="email"
                        placeholder="Digite seu email aqui"
                        my={10}
                        py={6}
                    />
                    <Input
                        bgColor="#fff"
                        type="password"
                        placeholder="Digite sua senha aqui"
                        py={6}
                    />
                    <Checkbox mt={5} colorScheme="pink">
                        Lembrar de mim
                    </Checkbox>
                    <Button 
                        type="button"
                        bgColor="#e91e63"
                        _hover={{
                            bgColor: "#FFA7B9",
                            color: "#e91e63"
                        }}
                        _active={{
                            bgColor: "#964268",
                            color: "#fff"
                        }}
                        color="white"
                        my={5}
                        py={7}
                        fontSize={20}
                        onClick={() => history.push("/home")}
                    >
                        Entrar
                   </Button>
                </Flex>     
            </FormControl>
        </Center>
    )
}

