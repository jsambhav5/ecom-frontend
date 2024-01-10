import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return isLoggedIn ? <Navigate to="/" /> : children;
};

export default GuestRoute;