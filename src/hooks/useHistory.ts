import { useNavigate } from "react-router-dom";

export const useHistory = () => {
	const navigate = useNavigate();

	const push = (route: string) => navigate(route);

	const goBack = () => navigate(-1);

	return {
		push,
		goBack,
	};
};
