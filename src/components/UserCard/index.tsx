import React from "react";
import { 
	Box, 
	Center, 
	Flex, 
	Image, 
	Text
} from "@chakra-ui/react";
import { IUserInfo } from "../../interfaces";
import strings from "../../services/strings";

interface IProps {
  user: IUserInfo;
}

export const UserCard: React.FC<IProps> = ({user}) => {
	const componentStrings = strings.components.userCard;
	return (
		<Box 
			padding={7} 
			mx={20}
			my={2}
			w={350}
			borderRadius={10}
			bgColor="rgba(255,255,255,0.3)"
		>
			<Center>
				<Image borderRadius="50%" src={user.picture.large} />
			</Center>
			<Flex w="100%" flexDir="column" mt={2}>
				<Text color="white" w="100%" textAlign="center">{componentStrings.labels.name} {user.name.first} {user.name.last}</Text>
				<Text color="white" w="100%" textAlign="center">{componentStrings.labels.user} {user.login.username}</Text>
				<Text color="white" w="100%" textAlign="center">{componentStrings.labels.email} {user.email}</Text>
				<Text color="white" w="100%" textAlign="center">{componentStrings.labels.phone} {user.phone}</Text>
			</Flex>
		</Box>
	);
};
