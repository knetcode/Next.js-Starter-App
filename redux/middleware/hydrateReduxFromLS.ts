import { setAuthToken } from "../slices/authSlice"
import type { AppDispatch } from "../config/reduxConfig"

const hydrateAuthToken = (dispatcher: AppDispatch) => {
	const lsAuth = localStorage.getItem("authToken")
	try {
		if (lsAuth) {
			dispatcher(setAuthToken(lsAuth))
		}
	} catch (error) {
		console.error(error)
	}
}

const hydrateReduxFromLS = (dispatcher: AppDispatch) => {
	hydrateAuthToken(dispatcher)
}

export default hydrateReduxFromLS
