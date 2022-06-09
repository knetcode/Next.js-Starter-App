import React from "react"
import type { ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	textColor?: string
	fontSize?: string
	isBold?: boolean
	isUnderline?: boolean
} & typeof defaultProps

const defaultProps = {
	textColor: Colors.moneyMarket.green,
	fontSize: "20px",
	isBold: true,
	isUnderline: false,
}

const Headline = ({ children, textColor, fontSize, isBold, isUnderline }: Props) => (
	<>
		<p className="headline">{children}</p>
		<style jsx>{`
			.headline {
				color: ${textColor};
				font-size: ${fontSize};
				font-weight: ${isBold ? "bold" : "normal"};
				text-decoration: ${isUnderline ? "underline" : "none"};
			}
		`}</style>
	</>
)

Headline.defaultProps = defaultProps

export default Headline
