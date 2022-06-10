import React, { ReactNode, useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks"
import { setWindowWidth } from "../../redux/slices/appSlice"
import Loading from "./Loading"

type Props = {
	children: ReactNode
	title?: string
} & typeof defaultProps

const defaultProps = {
	title: "Computicket | Refund Portal",
}

const PageLayout = ({ children, title }: Props) => {
	const dispatch = useAppDispatch()
	const router = useRouter()

	const authToken = useAppSelector((state) => state.auth.authToken)

	useEffect(() => {
		if (typeof window !== "undefined") {
			dispatch(setWindowWidth(window.innerWidth))
			window.addEventListener("resize", () => dispatch(setWindowWidth(window.innerWidth)))
		}
		return () => window.removeEventListener("resize", () => dispatch(setWindowWidth(window.innerWidth)))
	}, [])

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="page-layout">
				{router.pathname === "/login" && children}
				{router.pathname !== "/login" && !authToken && <Loading loadingOverride />}
				{router.pathname !== "/login" && authToken && children}
			</div>
			<style jsx>{`
				.page-layout {
					width: 100%;
				}
			`}</style>
		</>
	)
}

PageLayout.defaultProps = defaultProps

export default PageLayout
