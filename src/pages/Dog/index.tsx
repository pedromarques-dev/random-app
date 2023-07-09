import React from "react";
import { Button, Heading, Image } from "@chakra-ui/react";
import api from "../../services";
import { CentralizedCard, Navbar } from "../../components";
import strings from "../../services/strings";
import { Loading } from "../../components/Loading";

export const Dog: React.FC = () => {

	const [ srcImage, setSrcImage ] = React.useState<string>("");
	const [ loading, setLoading ] = React.useState<boolean>(false);
	const pageStrings = strings.pages.dog;

	const mockDog = "https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_horizontal.jpg";

	React.useEffect(() => {
		const fetch = async () => {
			const data = await api.generateRandomImage();
			setSrcImage(data);
			setLoading(false);
		};
		setLoading(true);
		fetch();
	}, []);

	return (
		<>
			<Navbar />
			<CentralizedCard boxProps={{  flexDir: "column", p: 10 }}>
				<Heading py={4}>{pageStrings.title}</Heading>
				{
					loading ? (
						<Loading p={20} />
					) : (
						<Image src={srcImage.charAt(srcImage.length - 1) !== "4" ? srcImage : mockDog} alt="cachorro" w={200} h={200} />
					)
				}
				<Button mt={10} onClick={() => window.location.reload()}>{pageStrings.attPhoto}</Button>
			</CentralizedCard>
		</>
	);
};
