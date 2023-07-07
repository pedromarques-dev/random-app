import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IUserInfo } from "../../interfaces";
import { UserCard } from "../UserCard";
import { Pagination } from "../Pagination";

interface IProps {
    users: IUserInfo[];
    pagination: number;
    onGoPreviousPage: () => void;
    onGoNextPage: () => void;
    showButton: boolean;
	search: string;
}

export const UsersList: React.FC<IProps> = (props) => {
	const {
		users,
		onGoPreviousPage,
		onGoNextPage,
		pagination,
		showButton,
		search,
	} = props;
	return (
		<Box>
			<Flex wrap="wrap" justifyContent="center" alignItems="center" mt={5}>
				{
					users.map((user: IUserInfo, index: number) => (
						<UserCard key={index} user={user} />
					))
				}
			</Flex>
			{
				showButton || search === "" && (
					<Pagination 
						onBack={onGoPreviousPage}
						onNext={onGoNextPage}
						page={pagination}
					/>
				)
			}
		</Box>
	);
};