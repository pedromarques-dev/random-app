import React from "react";
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

export interface ICardProps extends BoxProps {
	variant?: string;
	size?: string;
}

export const Card: React.FC<ICardProps> = (props) => {
	const { children, variant, size, ...rest } = props;
	const styles = useStyleConfig("Card", { variant, size });
	return (
		<Box __css={styles} {...rest}>{children}</Box>
	);
};
