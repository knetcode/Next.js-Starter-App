import { setAuthToken } from "./authSlice"
import type { AppDispatch } from "./reduxConfig"

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
