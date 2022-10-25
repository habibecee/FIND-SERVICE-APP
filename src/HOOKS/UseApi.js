import axios from "axios";

const UseApi = (props) => {
	const BaseApiUrl = "https://api.adoptez1artisan.com/";

	axios.defaults.baseURL = BaseApiUrl;

	const token = localStorage.getItem("token");

	if (token) {
		console.log("HAS TOKEN ", token);

		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	}

	return axios;
};

export default UseApi;
