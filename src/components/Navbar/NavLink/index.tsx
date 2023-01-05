import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { INavLink } from "../../../interfaces";

interface IProps {
    route: INavLink;
}

export const NavLink: React.FC<IProps> = ({route}) => (
	<Link to={route.link} >
		<Text mt={3} color="#e91e63" fontSize={22}>{route.title}</Text>
	</Link>
);
