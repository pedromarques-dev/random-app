import React from "react";
import {
	Flex,
	Text,
} from "@chakra-ui/react";

interface IProps {
	children: React.ReactNode;
}

export const Label: React.FC<IProps> = ({children}) => (
	<Flex>
		<Text
			display="flex"
			fontWeight="bold"
			color="primary.500"
			fontSize="sm"
		>
			{children}
		</Text>
	</Flex>
);

