import axios from "axios";

const productAPI = axios.create({
	baseURL: `http://localhost:5500`,
	withCredentials: true,
	headers: {
		"content-type": "application/json",
		Accept: "application/json",
	},
});

export const getAllProducts = async () => productAPI.get("/api/products");
export const createProduct = async (data) => productAPI.post("/api/products", data);
export const deleteProduct = async (id) => productAPI.delete(`/api/products/${id}`);
export const updateProduct = async (data) => productAPI.put("/api/products", data);

export default productAPI;