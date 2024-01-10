import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const role = useSelector((state) => state.user.role);
	return (isLoggedIn && role === "admin") ? children : <Navigate to="/" />;
};

export default AdminRoute;