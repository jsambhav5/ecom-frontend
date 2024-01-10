let defaultUser = { role: "" };

export default function userReducer(state = defaultUser, action) {
	switch (action.type) {
		case "setRole":
			return {
				...state,
				role: action.payload.role
			};
		default:
			return state;
	}
};

