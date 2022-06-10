const authMiddleware = (store: any) => (next: any) => (action: any) => {
	const result = next(action)

	if (action.type?.match("auth/setAuthToken")) {
		const authState = store.getState().auth.authToken
		localStorage.setItem("authToken", authState)
	}

	return result
}

export default authMiddleware
