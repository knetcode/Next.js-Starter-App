import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useAppSelector } from "../redux/config/hooks"
import Loading from "../components/utils/Loading"

const Home = () => {
	const router = useRouter()

	const authToken = useAppSelector((state) => state.auth.authToken)

	useEffect(() => {
		if (authToken || localStorage.getItem("authToken")) {
			router.push("/profile")
		} else {
			router.push("/login")
		}
	}, [authToken])

	return <Loading loadingOverride />
}

export default Home
