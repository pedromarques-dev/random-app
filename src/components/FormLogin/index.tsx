import React from "react";
import {
	Input,
	Checkbox,
	Heading,
	Box,
} from "@chakra-ui/react";
import strings from "../../services/strings";
import { IUser } from "../../interfaces";

interface IProps {
	username: string;
	password: string;
	handleUsername: React.ChangeEventHandler<HTMLInputElement>;
	handlePassword: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormLogin: React.FC<IProps> = (props) => {
	const componentStrings = strings.components.formLogin;
	const {
		username,
		password,
		handlePassword,
		handleUsername,
	} = props;
	return (
		<Box>
			<Heading 
				color="#ffffff" 
				fontWeight="bold" 
				fontSize={30}
				pt={5}
			>
				{componentStrings.title}
			</Heading>
			<Input
				bgColor="#fff"
				type="text"
				value={username}
				onChange={handleUsername}
				placeholder={componentStrings.usernamePlaceholder}
				my={10}
				py={6}
			/>
			<Input
				bgColor="#fff"
				type="password"
				value={password}
				onChange={handlePassword}
				placeholder={componentStrings.passwordPlaceholder}
				py={6}
				mb={5}
			/>
		</Box>
	);
};