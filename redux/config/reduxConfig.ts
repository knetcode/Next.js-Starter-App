import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import type { ThunkAction, AnyAction, Action } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import authMiddleware from "../middleware/authMiddleWare"

import appSlice from "../slices/appSlice"
import formSlice from "../slices/formSlice"
import authSlice from "../slices/authSlice"

const rootReducer = combineReducers({
	app: appSlice,
	form: formSlice,
	auth: authSlice,
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
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
	})

type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store["dispatch"]
export type RootState = ReturnType<Store["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== "production" })
