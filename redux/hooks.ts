import { SetStateAction } from "react"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./reduxConfig"

export const useAppDispatch = () => useDispatch<AppDispatch | SetStateAction<any>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
