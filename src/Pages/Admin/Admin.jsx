import React, { useCallback, useLayoutEffect, useState } from 'react'
import { getAllUsers } from '../../APIs/userAPI'
import Users from '../../Components/Users/Users'

const Home = () => {
	const [users, setUsers] = useState([])

	const calculateAdmin = useCallback(() => {
		let adminCount = 0;
		users.forEach(user => {
			if (user.role === "admin")
				adminCount++;
		})
		return adminCount;
	})

	useLayoutEffect(() => {
		const fetchData = async () => {
			const { data } = await getAllUsers();
			setUsers(() => data);
		};

		fetchData();
	}, [])

	return (
		<div>
			<Users users={users} calculateAdmin={calculateAdmin} />
		</div>
	)
}

export default Home