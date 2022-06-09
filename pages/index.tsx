import React from "react"
import { setup } from "../lib/csrf"

const Home = () => (
	<div className="home">
		<h1>Home</h1>
	</div>
)

export const getServerSideProps = setup(async () => ({ props: {} }))

export default Home
