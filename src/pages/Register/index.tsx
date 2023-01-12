import React from "react";
import { 
	Center, 
	FormControl, 
	Flex,
	Box,
	Checkbox,
	Heading,
	Input,
	Button,
	useToast,
} from "@chakra-ui/react";
import strings from "../../services/strings";
import { IUser } from "../../interfaces";
import { createUser } from "../../services/api";
import { showErrorToast, showSuccessToast } from "../../services/toast";
import { useHistory } from "../../hooks/useHistory";
import { AxiosError } from "axios";

export const Register: React.FC = () => {
	const pageStrings = strings.pages.register;
	const [ user, setUser ] = React.useState<IUser>({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const history = useHistory();

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: e.currentTarget.value,
			email: user.email,
			password: user.password,
			confirmPassword: user.confirmPassword,
		});
	};

	const handleEmail= (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: user.username,
			email: e.currentTarget.value,
			password: user.password,
			confirmPassword: user.confirmPassword,
		});
	};

	const handlePassword= (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: user.username,
			email: user.email,
			password: e.currentTarget.value,
			confirmPassword: user.confirmPassword,
		});
	};

	const handleConfirmPassword= (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			username: user.username,
			email: user.email,
			password: user.password,
			confirmPassword: e.currentTarget.value,
		});
	};

	const registerUser = async () => {
		try {
			await createUser(user);
			showSuccessToast("Usuário criado com sucesso!");
			history.push("/");
		} catch (e) {
			const error = e as AxiosError<{msg: string}>;
			console.error(error);
			if (error.response) {
				showErrorToast(error.response.data.msg);
			}
		}
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
							placeholder={pageStrings.placeholders.username}
							my={5}
							py={6}
						/>
						<Input
							bgColor="#fff"
							type="email"
							value={user.email}
							onChange={handleEmail}
							placeholder={pageStrings.placeholders.email}
							mb={5}
							py={6}
						/>
						<Input
							bgColor="#fff"
							type="password"
							value={user.password}
							onChange={handlePassword}
							placeholder={pageStrings.placeholders.password}
							py={6}
							mb={5}
						/>
						<Input
							bgColor="#fff"
							type="password"
							value={user.confirmPassword}
							onChange={handleConfirmPassword}
							placeholder={pageStrings.placeholders.confirmPassword}
							py={6}
						/>
						<Checkbox mt={5} colorScheme="pink">
							{pageStrings.termsOfUse}
						</Checkbox>
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
                        
						onClick={registerUser}
					>
						{strings.generals.register}
					</Button>
				</Flex>
			</FormControl>
		</Center>
	);
};
