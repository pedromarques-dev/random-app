export const generateRandomImage = async () => {
	const url = "https://random.dog/";
	const response = await fetch("https://random.dog/doggos");
	const listImages = await response.json();
	const image = listImages[Math.floor(Math.random() * 1030)];
	return url + image;
};
