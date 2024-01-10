import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Cart from './Pages/Cart/Cart';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/LogIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import Admin from './Pages/Admin/Admin'
import GuestRoute from './routes/GuestRoute';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>

					<Route
						path="/"
						element={
							<UserRoute>
								<Home />
							</UserRoute>
						} />
					<Route path="/home" element={<Navigate to="/" />} />

					<Route
						path="/admin"
						element={
							<AdminRoute>
								<Admin />
							</AdminRoute>
						} />

					<Route
						exact
						path="/login"
						element={
							<GuestRoute>
								<Login />
							</GuestRoute>
						} />

					<Route
						exact
						path="/signup"
						element={
							<GuestRoute>
								<SignUp />
							</GuestRoute>
						} />

					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
