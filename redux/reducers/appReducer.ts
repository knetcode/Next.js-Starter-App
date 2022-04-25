import { SET_IS_LOADING } from "../actions/appActions"

const initialState = {
	isLoading: false,
	loadingText: "Loading . . .",
}

const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload,
				loadingText: action.text,
			}

		default:
			return state
	}
}

export default appReducer
