import React from "react";
import { Box, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import { CentralizedCard, EnumSelect, Navbar } from "../../components";
import api from "../../services";
import strings from "../../services/strings";

export const Http: React.FC = () => {

	const [ srcImage, setSrcImage ] = React.useState("");
	const [ code, setCode ] = React.useState<number>(0);
	const [ inputValue, setInputValue ] = React.useState<string>("");
	const [ isChecked, setIsChecked ] = React.useState<boolean>(false);
	const pageStrings = strings.pages.http;

	const imageNotFound = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png";

	React.useEffect(() => {
		const fetch = async () => {

			const codeExists = api.httpCats.httpCodes.includes(code);
			if(codeExists) {
				const response = await api.httpCats.getOneImageByHttpCode(code);
				setSrcImage(response);
				return;
			}
			setSrcImage(imageNotFound);
		};
		fetch();

	}, [code]);

	const handleChange = (e: any) => {
		setCode(Number(e.currentTarget.value));
	};

	const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);
		setCode(Number(e.currentTarget.value));
	};

	return (
		<>
			<Navbar />
			<CentralizedCard>
				<Box>
					<EnumSelect 
						isChecked={isChecked}
						listCodes={api.httpCats.httpCodes}
						onChange={handleChange}
						placeholder={pageStrings.placeholderSelect}
						value={code}
					/>
					<Box>
						<Checkbox 
							isChecked={isChecked} 
							onChange={() => setIsChecked(!isChecked)} 
							mt={5} 
							colorScheme="pink"
						>
							<Text 
								color="#f4f4f4" 
								fontSize={14} 
								fontWeight="bold"
							>
								{pageStrings.textCheckbox}
							</Text>
						</Checkbox>
						{
							isChecked && (
								<Box>
									<Input 
										type="text"
										w={310}
										my={10}
										bgColor="#fff"
										py={3}
										placeholder={pageStrings.placeholderInput}
										value={inputValue}
										onChange={handleInputChange}
									/>
								</Box>
							)
						}
					</Box>
				</Box>
				<Image src={srcImage} w={200} h={200} />
			</CentralizedCard>
		</>
	);
};
