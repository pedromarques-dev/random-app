import React from "react";
import { Button, Heading, Image } from "@chakra-ui/react";
import api from "../../services";
import { CentralizedCard, Navbar } from "../../components";
import strings from "../../services/strings";

export const Dog: React.FC = () => {

	const [ srcImage, setSrcImage ] = React.useState<string>("");
	const pageStrings = strings.pages.dog;

	React.useEffect(() => {
		const fetch = async () => {
			const data = await api.generateRandomImage();
			setSrcImage(data);
		};

		fetch();
	}, []);

	return (
		<>
			<Navbar />
			<CentralizedCard boxProps={{  flexDir: "column" }}>
				<Heading py={4}>{pageStrings.title}</Heading>
				<Image src={srcImage} w={200} h={200} />
				<Button mt={10} ml={5} onClick={() => window.location.reload()}>{pageStrings.attPhoto}</Button>
			</CentralizedCard>
		</>
	);
};
