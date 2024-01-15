import React, { useState } from 'react'
import { signUp } from "../../APIs/userAPI";
import login from '../../store/actions/loginAction';
import { useDispatch } from "react-redux";
import "./SignUp.scss"

const SignUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch()

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const res = await signUp({ name, email, password, role: "user" })
			dispatch(login({ email, password }));
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className='SignupForm'>
				<input
					type="text"
					value={name}
					placeholder='Name'
					onChange={(e) => setName(e.target.value)}
				/>

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
					SignUp
				</button>
			</form>
		</div>

	)
}

export default SignUp