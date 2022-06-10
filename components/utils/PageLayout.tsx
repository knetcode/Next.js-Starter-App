import Head from "next/head"
import React, { ReactNode, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setWindowWidth } from "../../redux/slices/appSlice"

type Props = {
	children: ReactNode
	title?: string
} & typeof defaultProps

const defaultProps = {
	title: "My Money Market Account",
}

const PageLayout = ({ children, title }: Props) => {
	const dispatch = useDispatch()

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
			<div className="page-layout">{children}</div>
			<style jsx>{`
				.page-layout {
					width: 100%;
					padding-top: 120px;
				}
			`}</style>
		</>
	)
}

PageLayout.defaultProps = defaultProps

export default PageLayout
