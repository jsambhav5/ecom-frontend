import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return isLoggedIn ? children : <Navigate to="/login" />;
};

export default UserRoute;