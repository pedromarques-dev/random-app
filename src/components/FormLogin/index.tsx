import React from "react";
import {
	Input,
	Checkbox,
	Heading,
	Box,
} from "@chakra-ui/react";
import strings from "../../services/strings";

export const FormLogin: React.FC = () => {
	const componentStrings = strings.components.formLogin;
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
				type="email"
				placeholder={componentStrings.emailPlaceholder}
				my={10}
				py={6}
			/>
			<Input
				bgColor="#fff"
				type="password"
				placeholder={componentStrings.passwordPlaceholder}
				py={6}
			/>
			<Checkbox mt={5} colorScheme="pink">
				{componentStrings.rememberMe}
			</Checkbox>
		</Box>
	);
};