import { combineReducers, configureStore } from "@reduxjs/toolkit"
import type { ThunkAction, AnyAction, Action } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import appSlice from "./appSlice"
import formSlice from "./formSlice"

const rootReducer = combineReducers({
	app: appSlice,
	form: formSlice,
})

const reducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state,
			...action.payload,
		}
		return nextState
	} else {
		return rootReducer(state, action)
	}
}

export const makeStore = () =>
	configureStore({
		reducer,
		devTools: process.env.NODE_ENV !== "production",
	})

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store["dispatch"]
export type RootState = ReturnType<Store["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== "production" })
