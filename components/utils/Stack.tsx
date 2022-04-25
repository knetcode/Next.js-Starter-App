import React, { CSSProperties, ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	flexDirection: "row" | "column"
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
	alignItems?: "center" | "flex-start" | "flex-end"
	gap?: string
	padding?: string
	margin?: string
	bgColor?: string
	textColor?: string
	borderRadius?: string
	boxShadow?: string
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	justifyContent: "center",
	alignItems: "center",
	gap: "0px",
	padding: "0px",
	margin: "0px",
	bgColor: Colors.white,
	textColor: Colors.text.dark,
	borderRadius: "0px",
	boxShadow: "none",
	styles: {},
}

const Stack = ({
	children,
	flexDirection,
	justifyContent,
	alignItems,
	gap,
	padding,
	margin,
	bgColor,
	textColor,
	borderRadius,
	boxShadow,
	styles,
}: Props) => {
	return (
		<>
			<div className="stack" style={styles}>
				{children}
			</div>
			<style jsx>{`
				.stack {
					display: flex;
					flex-direction: ${flexDirection};
					justify-content: ${justifyContent};
					align-items: ${alignItems};
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
}

Stack.defaultProps = defaultProps

export default Stack