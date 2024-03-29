let defaultAuth = {
	isLoggedIn: localStorage.getItem("isLoggedIn")
};

export default function authReducer(state = defaultAuth, action) {
	switch (action.type) {
		case "login":
			return {
				...state,
				isLoggedIn: true
			};
		case "logout":
			return {
				...state,
				isLoggedIn: false
			};
		default:
			return state;
	}
};
