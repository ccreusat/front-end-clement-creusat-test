const Ubisoft = {};

Ubisoft.getPlatforms = async () => {
	const url = "./platforms.json";
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	const responseJson = await response.json();
	const data = await responseJson;

	return data;
};

Ubisoft.getGames = async () => {
	const url = "./games.json";
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	const responseJson = await response.json();
	const data = await responseJson;

	return data;
};

export default Ubisoft;
