import React, { useEffect } from "react"
import Head from "next/head"
import type { AppProps } from "next/app"
import GlobalStyles from "../styles/globalStyles"
import { wrapper } from "../redux/config/reduxConfig"
import "../styles/fonts.css"
import { useAppDispatch, useAppSelector } from "../redux/config/hooks"
import { hydrateAuthToken } from "../redux/middleware/hydrateReduxFromLS"
import { useRouter } from "next/router"
import { setIsLoading } from "../redux/slices/appSlice"

const App = ({ Component, pageProps }: AppProps) => {
	const dispatch = useAppDispatch()
	const router = useRouter()

	const authToken = useAppSelector((state) => state.auth.authToken)

	const hydrationHandler = async () => {
		const res = await hydrateAuthToken(dispatch)
		if (res || authToken) {
			console.log("isAuth")
			dispatch(setIsLoading(false))
		} else {
			router.push("/login")
			dispatch(setIsLoading(false))
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			hydrationHandler()
		}
	}, [])

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
			<style jsx>{GlobalStyles}</style>
		</>
	)
}

//  Disable static optimization to always server render, making nonce unique on every request
App.getInitialProps = () => ({})

export default wrapper.withRedux(App)
