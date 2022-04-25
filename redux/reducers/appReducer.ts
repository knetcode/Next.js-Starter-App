import { SET_IS_LOADING, SET_WINDOW_WIDTH } from "../actions/appActions"

const initialState = {
	isLoading: false,
	loadingText: "Loading . . .",
	windowWidth: 0,
}

const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
				loadingText: action.text,
			}

		case SET_WINDOW_WIDTH:
			return {
				...state,
				windowWidth: action.windowWidth,
			}

		default:
			return state
	}
}

export default appReducer
