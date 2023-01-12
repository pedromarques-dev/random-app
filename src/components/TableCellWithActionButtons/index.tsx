import React from "react";
import {
	Td,
	IconButton,
	Tooltip,
} from "@chakra-ui/react";

import {
	SearchIcon,
	EditIcon,
	DeleteIcon,
	AddIcon,
} from "@chakra-ui/icons";
import strings from "../../services/strings";

interface IProps {
	onDelete?: () => void;
	onView?: () => void;
	onEdit?: () => void;
	onCreate?: () => void;
}

export const TableCellWithActionButtons: React.FC<IProps> = (props) => {
	const {
		onDelete,
		onView,
		onEdit,
		onCreate,
	} = props;

	return (
		<Td
			h="100%"
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
			flexDirection="row"
		>
			{onView && (
				<Tooltip label={strings.generals.details}>
					<IconButton
						variant="icon"
						colorScheme="secondary"
						size="md"
						aria-label="Search"
						icon={<SearchIcon color="primary.500" />}
						onClick={onView}
					/>
				</Tooltip>
			)}
			{onEdit && (
				<Tooltip label={strings.generals.edit}>
					<IconButton
						variant="icon"
						colorScheme="primary"
						aria-label="Edit"
						size="md"
						icon={<EditIcon color="primary.500" />}
						onClick={onEdit}
					/>
				</Tooltip>
			)}
			{
				onDelete
					&&
						<Tooltip label={strings.generals.delete}>
							<IconButton
								variant="icon"
								colorScheme="secondary"
								size="md"
								aria-label="Delete"
								onClick={onDelete}
								icon={<DeleteIcon color="gray.500" />}
							/>
						</Tooltip>
			}
			{
				onCreate
					&&
						<Tooltip label={strings.generals.create}>
							<IconButton
								variant="icon"
								colorScheme="secondary"
								size="md"
								aria-label="Delete"
								onClick={onCreate}
								icon={<AddIcon />}
							/>
						</Tooltip>
			}
		</Td>
	);
};
