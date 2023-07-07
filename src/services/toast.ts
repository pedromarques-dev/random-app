import { createStandaloneToast } from "@chakra-ui/react";

export const showSuccessToast = (message: string, title?: string) => {
	const { toast } = createStandaloneToast();

	toast({
		title,
		description: message,
		status: "success",
		duration: 3000,
		isClosable: true,
	});
};

export const showErrorToast = (message: string, title?: string) => {
	const { toast } = createStandaloneToast();

	toast({
		title,
		description: message,
		status: "error",
		duration: 3000,
		isClosable: true,
	});
};