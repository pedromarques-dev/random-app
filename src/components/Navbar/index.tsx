import React from "react";
import { 
	Button, 
	Drawer, 
	DrawerBody, 
	DrawerCloseButton, 
	DrawerContent, 
	DrawerOverlay,
	useDisclosure, 
	Box,
	DrawerHeader,
	Text,
	DrawerFooter,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { NavLink } from "./NavLink";
import { routes } from "../../services/routes";
import { INavLink } from "../../interfaces";
import strings from "../../services/strings";
import { useHistory } from "../../hooks/useHistory";
import AuthUser from "../../services/localstorage";

export const Navbar:React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const componentStrings = strings.components.navbar;
	const history = useHistory();
	const auth = new AuthUser();
  
	return (
		<Box mb={3}>
			<Button onClick={onOpen}>
				<DragHandleIcon mr={2} />
				<Text>{componentStrings.menu}</Text>
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader mt={10}>{componentStrings.titleDrawer}</DrawerHeader>
					<DrawerBody>
						<Box mt={5}>
							{
								routes.map((route: INavLink, index: number) => (
									<NavLink key={index} route={route} />
								))
							}
						</Box>
					</DrawerBody>
					<DrawerFooter>
						<Button onClick={() => {
							auth.removeFromLocalStorage();
							history.push("/");
						}}>
							Sair
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};