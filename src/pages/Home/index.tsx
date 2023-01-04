import * as React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import api from '../../services';
import { IUserInfo } from '../../interfaces';
import { Navbar, SearchInput, UserCard } from '../../components';

export const Home: React.FC = () => {
  const [ users, setUsers ] = React.useState<IUserInfo[]>([]);
  const [ newUsers, setNewUsers ] = React.useState<IUserInfo[]>([]);
  const [ pagination, setPagination ] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("")
  const [showButtonPagination, setShowButtonPagination] = React.useState<boolean>(true)
  const twoSecondsInMiliSeconds = 2000;

  React.useEffect(() => {
    const fetch = async () => {
      const user = await api.getAllUsers(pagination)
      setUsers(user.results)
    }
    
    fetch()
  }, [pagination])

  const onGoNextPage = () => {
    if (pagination === 5) return ;
    setSearch("")
    setPagination(pagination + 1)
  }
  const onGoPreviousPage = () => {
    if (pagination === 1) return ;
    setSearch("")
    setPagination(pagination - 1)
  }


  const handleChange = (event: any) => {
    setSearch(event.target.value)

    setTimeout(() => {
      filterUsers()
    }, twoSecondsInMiliSeconds)
  }

  const searchToLowerCase = (str: string) => {
    const searchLowerCase = search.toLowerCase()
    return str.toLowerCase().includes(searchLowerCase)
  }

  const filterUsers = async () => {

    if (!search) {
      setShowButtonPagination(true)
    } else {
      setShowButtonPagination(false)
    }

    const usersFiltered = users.filter((userActual) => {
        return (
            searchToLowerCase(userActual.name.first)
            ||
            searchToLowerCase(userActual.name.last)
            ||
            searchToLowerCase(userActual.login.username)
            ||
            searchToLowerCase(userActual.email)
        )
    })
    setNewUsers(usersFiltered)
}

  return (
    <>
      <Navbar />
      <Box w="100%" my={5} mr={12}>
        <Heading textAlign="center" pt={4}>Lista de usuários do site</Heading>
        <SearchInput
            placeholder="Busque um usuario pelo username, nome ou email"
            onChange={handleChange}
            value={search}
        />
          {
            users && !search ?  
            ( 
              <Box>
              <Flex wrap="wrap" justifyContent="center" alignItems="center" mt={5}>
                {
                  users.map((user: IUserInfo, index: number) => (
                    <UserCard key={index} user={user} />
                ))
                }
              </Flex>
                <Flex my={10} justifyContent="center" alignItems="center">
                  <Button onClick={onGoPreviousPage}>Voltar</Button>
                  <Text mx={5}>Pagina {pagination} de 5</Text>
                  <Button onClick={onGoNextPage}>Proximo</Button>
                </Flex>
              </Box>
            ) : (
              <Box w="100%" textAlign="center">
                <Heading w="100%" textAlign="center" fontSize={18} my={3}>Busca por... {search}</Heading>
                <Flex wrap="wrap" justifyContent="center" alignItems="center" mt={5}>
                  {
                    newUsers.map((user: IUserInfo, index: number) => (
                      <UserCard key={index} user={user} />
                      ))
                    }
                </Flex>
              </Box>
            
            )
          }
      </Box>
    </>
  )
}
