import React from "react";
import { Box, Input } from "@chakra-ui/react";

interface IProps {
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
}

export const SearchInput: React.FC<IProps> = (props) => {
	const { 
		placeholder,
		value,
		onChange,
	} = props;
	return (
		<Box textAlign="center">
			<Input 
				type='search' 
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				bgColor="#fff"
				w="40%"
				my={2}
				mx="auto"
			/>
		</Box>
	);
};