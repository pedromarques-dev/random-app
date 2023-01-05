import { httpCats } from "./httpCats";
import { getAllUsers } from "./randomUser";
import { generateRandomImage } from "./randomDog";

const api = {
	getAllUsers,
	httpCats,
	generateRandomImage
};

export default api;