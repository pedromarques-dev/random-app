import React from "react";
import {
	Flex,
	Heading,
	Td,
	Tr,
} from "@chakra-ui/react";
import { Navbar, Table, TableCellWithActionButtons } from "../../../components";
import { useHistory } from "../../../hooks/useHistory";
import { deleteUser, getAllUsers } from "../../../services/api";
import strings from "../../../services/strings";
import { showSuccessToast } from "../../../services/toast";

interface IProps {
	_id: string;
	username: string;
	email: string;
}

export const TableView: React.FC = () => {
	const pageStrings = strings.pages.users;
	const history = useHistory();
	const [ listUsers, setListUsers ] = React.useState<IProps[]>([]);

	const onGoToDetails = (id: string) => history.push(`details/${id}`);
	const onGoToEdit = (id: string) => history.push(`edit/${id}`);

	const onDelete = async (id: string) => {
		await deleteUser(id);
		window.location.reload();
		showSuccessToast(strings.feedbacks.deleteUserIsSuccess);
		
	};

	React.useEffect(() => {
		const fetch = async () => {
			const users = await getAllUsers();
			setListUsers(users.users);
		};

		fetch();
	}, []);

	return (
		<>
			<Navbar />
			<Flex 
				w="100%"
				flexDir="column"
				justifyContent="center"
				alignItems="center"
			>
				<Heading 
					textAlign="center"
					color="#fff"
					fontWeight="bold"
					mb={5}
				>
					{pageStrings.title}
				</Heading>
				<Table 
					data={listUsers}
					emptyMessage="Sem resultados!"
					headers={["Nome",  ""]}
					renderRow={(item, index) => (
						<Tr key={index}>
							<Td>{item.username}</Td>
							<TableCellWithActionButtons
								onView={() => onGoToDetails(item._id)}
								onEdit={() => onGoToEdit(item._id)}
								onDelete={() => onDelete(item._id)}
							/>
						</Tr>
					)}
				/>
			</Flex>
		</>
	);
};

