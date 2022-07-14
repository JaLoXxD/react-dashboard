const apiUrl = "https://hairdressing-jh.herokuapp.com";

const fetchApi = async () => {
	try {
		const request = await fetch(`${apiUrl}/appointments`);
		const response = await request.json();
		const { appointments } = response;
		return appointments;
	} catch (err) {
		console.log(err);
	}
};

export { fetchApi };
