import React from "react";
import { CircularProgress, CircularProgressProps } from "@chakra-ui/react";

export const Loading: React.FC<CircularProgressProps> = ((props) => (
	<CircularProgress
		color="secondary.400"
		isIndeterminate
		{...props}
	/>
));
