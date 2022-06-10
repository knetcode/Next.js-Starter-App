import React from "react"
import type { ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	cardWidth?: string
	cardHeight?: string
	bgColor?: string
	borderRadius?: string
	boxShadow?: string
	margin?: string
	padding?: string
} & typeof defaultProps

const defaultProps = {
	bgColor: Colors.white,
	cardWidth: "100%",
	cardHeight: "100%",
	borderRadius: "10px",
	boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
	margin: "0px",
	padding: "50px",
}

const Card = ({ children, cardWidth, cardHeight, bgColor, borderRadius, boxShadow, margin, padding }: Props) => {
	return (
		<>
			<div className="card">{children}</div>
			<style jsx>{`
				.card {
					width: ${cardWidth};
					height: ${cardHeight};
					background-color: ${bgColor};
					border-radius: ${borderRadius};
					box-shadow: ${boxShadow};
					margin: ${margin};
					padding: ${padding};
				}
			`}</style>
		</>
	)
}

Card.defaultProps = defaultProps

export default Card
