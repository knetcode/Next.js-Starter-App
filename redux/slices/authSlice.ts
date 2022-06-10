import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type InitState = {
	authToken: string
}

const initialState: InitState = {
	authToken: "",
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuthToken(state: InitState, action: PayloadAction<string>) {
			state.authToken = action.payload
		},
	},
})

export const { setAuthToken } = authSlice.actions

export default authSlice.reducer
