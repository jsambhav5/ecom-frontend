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
export const getAllUsers = async () => userAPI.get("/api/users");
export const registerUser = async (data) => userAPI.post("/api/users", data);
export const deleteUser = async (email) => userAPI.delete(`/api/users?email=${email}`);
export const updateUser = async (data) => userAPI.put("/api/users", data);

export default userAPI;