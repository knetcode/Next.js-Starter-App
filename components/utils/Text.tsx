import React from "react"

import type { ReactNode } from "react"

import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	fontSize?: string
	fontWeight?: string
	margin?: string
	padding?: string
	bgColor?: string
	textColor?: string
	underline?: boolean
	textAlign?: "left" | "center" | "right"
	opacity?: number
} & typeof defaultProps

const defaultProps = {
	fontSize: "20px",
	fontWeight: "300",
	margin: "0px",
	padding: "0px",
	bgColor: "transparent",
	textColor: Colors.text.dark,
	underline: false,
	textAlign: "center",
	opacity: 1,
}

const Text = ({
	children,
	fontSize,
	fontWeight,
	margin,
	padding,
	bgColor,
	textColor,
	underline,
	textAlign,
	opacity,
}: Props) => (
	<>
		<p className="text">{children}</p>
		<style jsx>{`
			.text {
				font-size: ${fontSize};
				font-weight: ${fontWeight};
				margin: ${margin};
				padding: ${padding};
				background-color: ${bgColor};
				color: ${textColor};
				text-decoration: ${underline ? "underline" : "none"};
				text-align: ${textAlign};
				opacity: ${opacity};
			}
		`}</style>
	</>
)

Text.defaultProps = defaultProps

export default Text
