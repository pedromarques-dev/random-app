import * as React from "react";
import { 
	Button,
	Center,
	Flex,
	FormControl,
	Text,
} from "@chakra-ui/react";
import { useHistory } from "../../hooks/useHistory";
import { FormLogin } from "../../components";
import strings from "../../services/strings";

import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../services/toast";
import { authLogin } from "../../services/api";
import AuthUser from "../../services/localstorage";

export const Login: React.FC = () => {

	const history = useHistory();
	const [ username, setUsername ] = React.useState<string>("");
	const [ password, setPassword ] = React.useState<string>("");
	const [ isChecked, setIsChecked ] = React.useState<boolean>(false);

	const auth = new AuthUser();

	const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
		setUsername(e.currentTarget.value);
	};

	const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value);
	};

	const onLogin = async () => {
		try {
			const user = await authLogin(username, password);
			if (isChecked) {
				auth.saveOnLocalStorage(username);
			}
			showSuccessToast("Você foi autenticado com sucesso!", `Bem vindo ao nosso site ${user.data.username}`);
			history.push("/home");
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
					<FormLogin 
						username={username}
						handleUsername={handleUsername}
						password={password}
						handlePassword={handlePassword}
						isChecked={isChecked}
						onChange={() => setIsChecked(!isChecked)}
					/>
					<Link to="/register">
						<Text mt={1} fontSize={12}>Nao possui conta? cadastre-se</Text>
					</Link>
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
						
						onClick={onLogin}
					>
						{strings.generals.enter}
					</Button>
				</Flex>     
			</FormControl>
		</Center>
	);
};

