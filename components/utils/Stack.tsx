import React, { ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	flexDirection?: "row" | "column"
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
	alignItems?: "center" | "flex-start" | "flex-end"
	flexWrap?: "wrap" | "nowrap" | "wrap-reverse"
	gap?: string
	padding?: string
	margin?: string
	bgColor?: string
	textColor?: string
	borderRadius?: string
	boxShadow?: string
} & typeof defaultProps

const defaultProps = {
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	flexWrap: "nowrap",
	gap: "0px",
	padding: "0px",
	margin: "0px",
	bgColor: Colors.white,
	textColor: Colors.text.dark,
	borderRadius: "0px",
	boxShadow: "none",
}

const Stack = ({
	children,
	flexDirection,
	justifyContent,
	alignItems,
	flexWrap,
	gap,
	padding,
	margin,
	bgColor,
	textColor,
	borderRadius,
	boxShadow,
}: Props) => (
	<>
		<div className="stack">{children}</div>
		<style jsx>{`
			.stack {
				display: flex;
				flex-direction: ${flexDirection};
				justify-content: ${justifyContent};
				align-items: ${alignItems};
				flex-wrap: ${flexWrap};
				gap: ${gap};
				padding: ${padding};
				margin: ${margin};
				background-color: ${bgColor};
				color: ${textColor};
				border-radius: ${borderRadius};
				box-shadow: ${boxShadow};
			}
		`}</style>
	</>
)

Stack.defaultProps = defaultProps

export default Stack
