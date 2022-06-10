import { setAuthToken } from "../slices/authSlice"
import type { AppDispatch } from "../config/reduxConfig"

export const hydrateAuthToken = (dispatcher: AppDispatch) => {
	return new Promise((resolve, reject) => {
		const lsAuth = localStorage.getItem("authToken")
		try {
			if (lsAuth) {
				dispatcher(setAuthToken(lsAuth))
			}
			resolve(lsAuth)
		} catch (error) {
			console.error(error)
			reject(error)
		}
	})
}
