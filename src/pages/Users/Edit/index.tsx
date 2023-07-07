import React, { useId } from "react";
import {
	Center,
	FormControl,
	Flex,
	Heading,
	Input,
	Button,
	Box,
} from "@chakra-ui/react";
import strings from "../../../services/strings";
import { editUser, getOneUserById } from "../../../services/api";
import { useHistory } from "../../../hooks/useHistory";

interface IProps {
    username: string,
    email: string,
}

export const Edit: React.FC = () => {

	const pageStrings = strings.pages.users.edit;
	const [ user, setUser ] = React.useState<IProps>({
		username: "",
		email: "",
	});
	const history = useHistory();

	const id = useId();

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: e.currentTarget.value,
			email: user.email,
		});
	};

	const handleEmail= (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: user.username,
			email: e.currentTarget.value,
		});
	};

	React.useEffect(() => {
		const fetch = async () => {
			const userById = await getOneUserById(id);
			setUser({
				username: userById.user.username,
				email: userById.user.email,
			});
		};

		fetch();
	}, []);

	const onEditUser = async () => {
		await editUser(user, id);
		history.goBack();
	};

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
					<Box>
						<Heading 
							color="#ffffff" 
							fontWeight="bold" 
							fontSize={32}
							py={3}
						>
							{pageStrings.title}
						</Heading>
						<Input
							bgColor="#fff"
							type="text"
							value={user.username}
							onChange={handleUsername}
							my={5}
							py={6}
						/>
						<Input
							bgColor="#fff"
							type="email"
							value={user.email}
							onChange={handleEmail}
							mb={5}
							py={6}
						/>
					</Box>
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
						onClick={onEditUser}
					>
						{strings.generals.edit}
					</Button>
				</Flex>
			</FormControl>
		</Center>
	);
};
