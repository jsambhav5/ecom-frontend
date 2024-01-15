import { login as loginAPI } from "../../APIs/authAPI"

export default function login(payload) {
	return async (dispatch, getState) => {
		try {
			const { data } = await loginAPI(payload);
			if (data.success) {
				dispatch({ type: "login" })
				dispatch({ type: "setUser", payload: { role: data.user.role, id: data.user.id } })

				localStorage.setItem("isLoggedIn", "true")
				localStorage.setItem("role", data.user.role)
				localStorage.setItem("id", data.user.id)
			}
		} catch (error) {
			console.log(error);
		}
	}
} 