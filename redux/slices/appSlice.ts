import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type InitState = {
	windowWidth: number
	isLoading: boolean
	loadingText: string
}

const initialState: InitState = {
	windowWidth: 0,
	isLoading: true,
	loadingText: "",
}

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setWindowWidth(state: InitState, action: PayloadAction<number>) {
			state.windowWidth = action.payload
		},
		setIsLoading(state: InitState, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
		setLoadingText(state: InitState, action: PayloadAction<string>) {
			state.loadingText = action.payload
		},
	},
})

export const { setWindowWidth, setIsLoading, setLoadingText } = appSlice.actions

export default appSlice.reducer
