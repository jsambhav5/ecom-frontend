import React from 'react'

const User = (props) => {
	const users = props.users
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => {
					return <tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>;
				})}
			</tbody>
		</table>
	)
}

export default User