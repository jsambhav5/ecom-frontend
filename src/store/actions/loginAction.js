import { login as loginAPI } from "../../APIs/authAPI"

export default function login(payload) {
	return async (dispatch, getState) => {
		try {
			const { data } = await loginAPI(payload);
			if (data.success) {
				dispatch({ type: "login" })
				dispatch({ type: "setRole", payload: { role: data.user.role } })
			}
		} catch (error) {
			console.log(error);
		}
	}
} 