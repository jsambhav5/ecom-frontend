import React, { useLayoutEffect, useState, useMemo } from 'react'
import { getAllProducts } from '../../APIs/productAPI'
import Products from '../../Components/Products/Products'

const Home = () => {
	const [products, setProducts] = useState([])

	const calculateTotal = useMemo(() => {
		const singleProductTotal = products.map((product) => {
			return product.price * product.in_stock;
		})
		let grandTotal = 0;
		singleProductTotal.forEach(num => {
			grandTotal += num;
		})
		return grandTotal;
	}, [products]);

	useLayoutEffect(() => {
		const fetchData = async () => {
			const { data } = await getAllProducts();
			setProducts(() => data);
		};

		fetchData();
	}, [])

	return (
		<div>
			<Products products={products} />
			Total = {calculateTotal}
		</div>
	)
}

export default Home