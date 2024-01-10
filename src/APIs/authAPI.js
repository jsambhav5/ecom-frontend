import axios from "axios";

const authAPI = axios.create({
	baseURL: `http://localhost:5500`,
	withCredentials: true,
	headers: {
		"content-type": "application/json",
		Accept: "application/json",
	},
});

export const login = async (data) => authAPI.post("/api/auth/login", data);
export const logout = () => authAPI.post("/api/auth/logout");

export default authAPI;