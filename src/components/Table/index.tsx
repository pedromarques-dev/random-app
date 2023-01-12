import React from "react";
import {
	Table as CTable,
	Thead,
	Tbody,
	Th,
	Tr,
	Flex,
	Heading,
	Button,
	BoxProps,
	Box,
} from "@chakra-ui/react";

import { Label } from "../Label";
import { Loading } from "../Loading";
import { Card } from "../Card";
import strings from "../../services/strings";

interface IProps<DataType> extends BoxProps {
	data: DataType[];
	headers: string[];
	renderRow: (item: DataType, index: number) => React.ReactElement | null;
	loading?: boolean;
	emptyMessage: string;
	onAdd?: () => void;
	addButtonLoading?: boolean;
	tableTitle?: string;
}

export const Table = <DataType,>(props: IProps<DataType>) => {
	const {
		data,
		headers,
		renderRow,
		loading,
		emptyMessage,
		tableTitle,
		onAdd,
		addButtonLoading,
		...rest
	} = props;

	return (
		<Flex
			w="100%"
			flexDir="column"
			alignItems="center"
			mb={5}
		>
			{tableTitle && (
				<Heading
					w="100%"
					maxW={{ base:"100%", md: "75%" }}
					variant="secondary"
					size="md"
					color="primary.500"
					mb={3}
				>
					{tableTitle}
				</Heading>
			)}
			<Card
				display="initial"
				w="100%"
				maxW={{ base:"100%", md: "75%" }}
				px={0}
				borderRadius={12}
				boxShadow="lg"
				bg="white"
				{...rest}
			>
				<Box
					maxHeight={{ base: 450, md: 600 }}
					overflowX="auto"
				>
					{loading || !data ? (
						<Flex my={5} w="100%" justifyContent="center">
							<Loading />
						</Flex>
					) : data.length < 1 ? (
						<Flex
							my={5}
							w="100%"
							justifyContent="center"
							minH={300}
							alignItems="center"
						>
							<Heading size="md" fontWeight="bold">
								{emptyMessage}
							</Heading>
						</Flex>
					) : (
						<CTable
							variant="simple"
							ml="auto"
							height="100%"
						>
							<Thead
								borderBottomColor="secondary.500"
								borderBottomWidth={2}
								position="relative"
								h={14}
							>

								<Tr>
									{headers.map((header, index) => (
										<Th key={index}>
											<Label>
												{header}
											</Label>
										</Th>
									))}
								</Tr>
							</Thead>
							<Tbody>
								{data.map((dataItem, index) => renderRow(dataItem, index))}
							</Tbody>
						</CTable>
					)}

				</Box>
			</Card>
			{onAdd && (
				<Button
					w="100%"
					maxW={{
						sm: "100%",
						md: 330,
					}}
					fontSize='1.3rem'
					size="lg"
					mt={10}
					onClick={onAdd}
					isLoading={addButtonLoading}
				>
					{strings.generals.add}
				</Button>
			)}
		</Flex>
	);
};
