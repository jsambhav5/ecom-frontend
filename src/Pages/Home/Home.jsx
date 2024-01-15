import React, { useLayoutEffect, useState } from 'react'
import { getAllProducts } from '../../APIs/productAPI'
import Products from '../../Components/Products/Products'
import { createProduct, deleteProduct, updateProduct } from '../../APIs/productAPI'
import { useSelector } from "react-redux";
import "./Home.scss"

const Home = () => {
	const [products, setProducts] = useState([])
	const [productId, setProductId] = useState("");
	const [name, setName] = useState("");
	const [price, setPrice] = useState();
	const [inStock, setInStock] = useState();
	const userId = useSelector((state) => state.user.id)

	async function handleSubmit(event) {
		event.preventDefault();
		createProduct({ "user_id": userId, name, price, "in_stock": inStock })
	}

	useLayoutEffect(() => {
		const fetchData = async () => {
			const { data } = await getAllProducts();
			setProducts(() => data);
		};

		fetchData();
	}, [])

	return (
		<div>
			<Products products={products} userId={userId} deleteButton={(id) => { deleteProduct(id) }} />

			<form onSubmit={handleSubmit} className='UpdateForm'>

				<input
					type="number"
					value={productId}
					placeholder='Product ID'
					onChange={(e) => setProductId(e.target.value)}
				/>

				<input
					type="text"
					value={name}
					placeholder='Product Name'
					onChange={(e) => setName(e.target.value)}
				/>

				<input
					type="number"
					value={price}
					placeholder='Price'
					onChange={(e) => setPrice(e.target.value)}
				/>

				<input
					type="number"
					value={inStock}
					placeholder='In Stock'
					onChange={(e) => setInStock(e.target.value)}
				/>

				<button block size="lg" type="submit">
					Create
				</button>
				<button block size="lg" type='button' onClick={() => updateProduct({ id: productId, "user_id": userId, name, price, "in_stock": inStock })}>
					Update
				</button>
			</form>
		</div>
	)
}

export default Home