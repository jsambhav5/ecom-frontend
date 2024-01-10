import axios from "axios";

const userAPI = axios.create({
	baseURL: `http://localhost:5500`,
	withCredentials: true,
	headers: {
		"content-type": "application/json",
		Accept: "application/json",
	},
});

export const signUp = async (data) => userAPI.post("/api/user", data);
export const getAllUsers = async (data) => userAPI.get("/api/users");

export default userAPI;