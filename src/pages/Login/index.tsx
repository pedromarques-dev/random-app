import * as React from "react";
import { 
	Button,
	Center,
	Flex,
	FormControl,
} from "@chakra-ui/react";
import { useHistory } from "../../hooks/useHistory";
import { FormLogin } from "../../components";
import strings from "../../services/strings";

export const Login: React.FC = () => {

	const history = useHistory();
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
					<FormLogin />
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
						onClick={() => history.push("/home")}
					>
						{strings.generals.enter}
					</Button>
				</Flex>     
			</FormControl>
		</Center>
	);
};

