import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { getOneUserById } from "../../../services/api";
import { CentralizedCard } from "../../../components";
import { DetailsRow } from "../../../components/DetailsRow";
import { useHistory } from "../../../hooks/useHistory";
import strings from "../../../services/strings";


interface IProps {
    username: string;
    email: string;
}

export const Details: React.FC = () => {

	const _id = React.useId();
	const [ user, setUser ] = React.useState<IProps>({
		username: "",
		email: "", 
	});
	const history = useHistory();
    
	React.useEffect(() => {
		const fetch = async () => {
			const userById = await getOneUserById(_id);
			setUser(userById.user);
		};

		fetch();
	}, []);

	return (
		<Flex justifyContent="center" flexDirection="column" alignItems="center">
			<CentralizedCard boxProps={{ flexDir: "column", w: 600, p: 10}}>
				<Heading>Detalhes</Heading>
				<DetailsRow
					label="Nome de usuário"
					value={user.username}
					boxProps={{
						my: 5,
					}}
				/>
				<DetailsRow
					label="Email"
					value={user.email}
					boxProps={{
						mb: 5,
					}}
				/>
				<Button 
					type="button"
					size="md"
					w="60%"
					_hover={{
						bgColor: "#FFA7B9",
						color: "#e91e63"
					}}
					bgColor="rgba(255,255,255,0.1)"
					color="white"
					my={5}
					py={7}
					onClick={() => history.goBack()}
				>
					{strings.generals.back}
				</Button>
			</CentralizedCard>
		</Flex>
	);
};