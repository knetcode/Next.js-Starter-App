import React from "react"
import Head from "next/head"
import GlobalStyles from "../styles/globalStyles"
import { wrapper } from "../redux/reduxConfig"

type Props = {
	Component: any
	pageProps: any
}

const App = ({ Component, pageProps }: Props) => {
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
