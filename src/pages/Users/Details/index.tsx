import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { getOneUserById } from "../../../services/api";
import { CentralizedCard } from "../../../components";
import { DetailsRow } from "../../../components/DetailsRow";


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
    
	React.useEffect(() => {
		const fetch = async () => {
			const userById = await getOneUserById(_id);
			setUser(userById.user);
		};

		fetch();
	}, []);

	return (
		<Flex justifyContent="center" flexDirection="column" alignItems="center">
			<Heading>Detalhes</Heading>
			<CentralizedCard boxProps={{ flexDir: "column"}}>
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
			</CentralizedCard>
		</Flex>
	);
};