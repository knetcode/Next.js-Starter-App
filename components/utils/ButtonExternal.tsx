import React, { CSSProperties } from "react"
import Colors from "../../styles/colors"

type Props = {
	text: string
	link: string
	newTab?: boolean
	textColor?: string
	bgColor?: string
	borderColor?: string
	margin?: string
	padding?: string
	borderRadius?: string
	fontWeight?: "normal" | "bold"
	isDisabled?: boolean
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	newTab: true,
	textColor: Colors.white,
	bgColor: Colors.moneyMarket.red,
	borderColor: Colors.moneyMarket.red,
	margin: "0px",
	padding: "10px 20px",
	borderRadius: "50px",
	fontWeight: "bold",
	isDisabled: false,
	styles: {},
}

const ButtonExternal = ({
	text,
	link,
	newTab,
	bgColor,
	textColor,
	borderColor,
	margin,
	padding,
	isDisabled,
	borderRadius,
	fontWeight,
	styles,
}: Props) => {
	return (
		<>
			<a href={link} target={newTab ? "_blank" : "_self"} className="btn external" rel="noreferrer" style={styles}>
				{text}
			</a>
			<style jsx>{`
				.btn {
					margin: ${margin};
					padding: ${padding};
					border-color: ${isDisabled ? Colors.muted[300] : borderColor};
					border-radius: ${borderRadius};
					background-color: ${isDisabled ? Colors.muted[300] : bgColor};
					color: ${textColor};
					font-weight: ${fontWeight};
					cursor: ${isDisabled ? "not-allowed" : "pointer"};
					pointer-events: ${isDisabled ? "none" : "all"};
				}
			`}</style>
		</>
	)
}

ButtonExternal.defaultProps = defaultProps

export default ButtonExternal
