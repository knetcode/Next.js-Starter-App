import React, { CSSProperties } from "react"
import Colors from "../../styles/colors"

type Props = {
	text: string
	onClick: () => void
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

const ButtonFunction = ({
	text,
	onClick,
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
			<button className="btn function" onClick={onClick} type="button" style={styles}>
				{text}
			</button>
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

ButtonFunction.defaultProps = defaultProps

export default ButtonFunction
