import React, { useLayoutEffect, useState } from 'react'
import { getAllUsers } from '../../APIs/userAPI'
import User from '../../Components/Users/Users'

const Home = () => {
	const [users, setUsers] = useState([])

	useLayoutEffect(() => {
		const fetchData = async () => {
			const { data } = await getAllUsers();
			setUsers(() => data);
		};

		fetchData();
	}, [])

	return (
		<div>
			<User users={users} />
		</div>
	)
}

export default Home