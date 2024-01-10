import axios from "axios";

const productAPI = axios.create({
	baseURL: `http://localhost:5500`,
	withCredentials: true,
	headers: {
		"content-type": "application/json",
		Accept: "application/json",
	},
});

export const getAllProducts = async (data) => productAPI.get("/api/products");

export default productAPI;