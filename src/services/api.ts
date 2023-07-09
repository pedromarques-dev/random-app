import axios from "axios";
import { IEditUser, IUser } from "../interfaces";

const baseUrl = "http://localhost:3333";

export const createUser =  async (user: IUser) => {
	return axios.post(`${baseUrl}/auth/register`, {
		username: user.username,
		email: user.email,
		password: user.password,
		confirmPassword: user.confirmPassword,
	});
};

export const authLogin = async (username: string, password: string) => {
	return axios.post(`${baseUrl}/auth`, {
		username: username,
		password: password,
	});
};

export const getAllUsers = async () => {
	const listUsers = await fetch(`${baseUrl}/users`);
	return listUsers.json();
};

export const getOneUserById = async (id: string) => {
	const user = await fetch(`${baseUrl}/users/details/${id}`);
	return user.json();
};

export const editUser = async (user: IEditUser, id: string) => {
	return axios.patch(`${baseUrl}/users/edit/${id}`, {
		username: user.username,
		email: user.email,
	});
};