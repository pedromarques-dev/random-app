export const getAllUsers = async (page: number) => {
	const response = await fetch(`https://randomuser.me/api/?page=${page}&results=9`);
	return await response.json();
};