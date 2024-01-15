let defaultUser = { role: localStorage.getItem("role") || "", id: localStorage.getItem("id") || "" };

export default function userReducer(state = defaultUser, action) {
	switch (action.type) {
		case "setUser":
			return {
				...state,
				role: action.payload.role,
				id: action.payload.id
			};
		default:
			return state;
	}
};

