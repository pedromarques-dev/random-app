export const getAllUsers = async (page: number) => {
	const response = await fetch(`https://randomuser.me/api/?page=${page}&results=10`);
	return await response.json();
};