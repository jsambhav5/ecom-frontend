import React, { useEffect } from 'react'

const Users = (props) => {
	const users = props.users

	return (<div>
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
		No. of Admins : {props.calculateAdmin()}
	</div>
	)
}

export default Users