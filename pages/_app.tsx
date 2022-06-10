import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import GlobalStyles from "../styles/globalStyles"
import { wrapper } from "../redux/config/reduxConfig"
import "../styles/fonts.css"

const App = ({ Component, pageProps }: AppProps) => {
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
