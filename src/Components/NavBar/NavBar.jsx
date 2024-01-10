import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'

const NavBar = () => {
	return (
		<div>
			<Link to={"/"}><button>Home</button></Link>
			<Link to={"/admin"}><button>Admin</button></Link>
			<Link to={"/login"}><button>Login</button></Link>
			{/* <Link to={"/signup"}><button>SignUp</button></Link>
			<Link to={"/profile"}><button>Profile</button></Link>
	<Link to={"/cart"}><button>Cart</button></Link> */}
			<button onClick={() => {
				store.dispatch({ type: "logout" });
				store.dispatch({ type: "setRole", payload: { role: "" } })
			}}>Logout</button>
		</div>
	)
}

export default NavBar