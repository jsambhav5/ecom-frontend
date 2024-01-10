import React from 'react'

const User = (props) => {
	const products = props.products
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Price</th>
					<th>In Stocks</th>
				</tr>
			</thead>
			<tbody>
				{products.map(product => {
					return <tr key={product.id}>
						<td>{product.id}</td>
						<td>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.in_stock}</td>
					</tr>;
				})}
			</tbody>
		</table>
	)
}

export default User