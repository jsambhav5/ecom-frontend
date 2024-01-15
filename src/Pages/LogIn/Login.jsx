import React, { useState } from 'react'
import login from '../../store/actions/loginAction';
import { useDispatch } from "react-redux";
import "./Login.scss"

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		dispatch(login({ email, password }));
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className='LoginForm'>

				<input
					type="email"
					value={email}
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					value={password}
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button block size="lg" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login