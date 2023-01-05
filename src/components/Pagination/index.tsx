import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import strings from "../../services/strings";

interface IProps {
    onBack: () => void;
    onNext: () => void;
    page: number;
}

export const Pagination:React.FC<IProps> = (props) => {
	const { onBack, onNext, page } = props;
	const componentStrings = strings.components.pagination;

	return (
		<Flex my={10} justifyContent="center" alignItems="center">
			<Button onClick={onBack}>{strings.generals.back}</Button>
			<Text mx={5}>{componentStrings.textPage(page)}</Text>
			<Button onClick={onNext}>{strings.generals.next}</Button>
		</Flex>
	);
};