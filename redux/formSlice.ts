import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type InitState = {
	firstName: string
	lastName: string
}

const initialState: InitState = {
	firstName: "",
	lastName: "",
}

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		setFirstName(state: InitState, action: PayloadAction<string>) {
			state.firstName = action.payload
		},
		setLastName(state: InitState, action: PayloadAction<string>) {
			state.lastName = action.payload
		},
	},
})

export const { setFirstName, setLastName } = formSlice.actions

export default formSlice.reducer
