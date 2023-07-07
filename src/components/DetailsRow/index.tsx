import React from "react";
import {
	Box,
	Stack,
	Text,
	Button,
	BoxProps,
} from "@chakra-ui/react";

export interface IDetailsProps {
	label?: string;
	value: string | string[] | number | null;
	boxProps?: BoxProps;
}

export const DetailsRow: React.FC<IDetailsProps> = (props) => {
	const {
		value,
		label,
		boxProps,
	} = props;

	return (
		<Box w="100%" {...boxProps} >
			{!Array.isArray(value) ?
				(
					<Stack spacing={0}>
						<Text
							{...boxProps}
							fontSize="md"
							color="primary.500"
							fontWeight="bold"
						>
							{label}
						</Text>
						<Text
							maxW="100%"
							fontSize="md"
							color="gray.700"
							p={3}
							borderRadius="lg"
							backgroundColor="#f5f5f5"
							borderColor="primary.500"
							variant="solid"
							h={!value ? 10 : "100%"}
							wordBreak="break-all"
						>
							{value}
						</Text>
					</Stack>
				) : (
					<Stack spacing={1}>
						<Text fontSize="md" fontWeight="bold">{label}</Text>
						<Box>
							{Array.isArray(value) && value.map((name) => (
								<Button
									m={1}
									fontWeight="initial"
									key={name}
									cursor="initial"
								>
									{name}
								</Button>
							))}
						</Box>
					</Stack>
				)}
		</Box>
	);
};
