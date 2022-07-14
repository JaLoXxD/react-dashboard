import { useEffect, useState } from "react";
import { fetchApi } from "../helpers/fetchApi";

export const useFetchApi = () => {
	const [appointments, setAppointments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const makeRequest = async () => {
		const resp = await fetchApi();
		setAppointments(resp);
		setIsLoading(false);
	};

	useEffect(() => {
		makeRequest();
	}, []);

	return {
		appointments,
		isLoading,
	};
};
