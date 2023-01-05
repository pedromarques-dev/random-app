import React from "react";
import { Select } from "@chakra-ui/react";

interface IProps {
    isChecked: boolean;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    value: string | number;
    listCodes: number[];
    placeholder: string;
}

export const EnumSelect: React.FC<IProps> = (props) => {

	const {
		isChecked,
		onChange,
		value,
		listCodes,
		placeholder,
	} = props;

	return (
		<Select
			w={310}
			placeholder={placeholder}
			isDisabled={isChecked}
			bg="#FFA7B9"
			color="#e91e63"
			borderWidth={0.4}
			borderColor="primary.500"
			onChange={onChange}
			value={value}
			mr={10}
			variant="filled"
		>
			{
				listCodes.map((code: number, index: number) => (
					<option style={{ backgroundColor: "#FFA7B9"}} key={`${code}-${index}`} value={Number(code)}>
						{code}
					</option>
				))
			}
		</Select>
	);
};