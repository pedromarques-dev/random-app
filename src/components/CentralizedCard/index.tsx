import React from "react";
import { BoxProps, Flex } from "@chakra-ui/react";

interface IProps {
    boxProps?: BoxProps;
    children: React.ReactNode;
}

export const CentralizedCard: React.FC<IProps> = (props) => {
	const { boxProps, children } = props;

	return (
		<Flex 
			w="100%"
			justifyContent="center"
			alignItems="center"
			my={150}
		>
			<Flex
				alignItems="center"
				bgColor="rgba(255,255,255,0.3)"
				borderRadius={20}
				{...boxProps}

			>
				{children}
			</Flex>
		</Flex>
	);
};