import React from "react"
import Colors from "../../styles/colors"
import buttonDefaults from "./buttonDefaultTypes"

type Props = {
	text: string
	textColor?: string
	bgColor?: string
	borderColor?: string
	margin?: string
	padding?: string
	borderRadius?: string
	fontSize?: string
	fontWeight?: "normal" | "bold"
	isDisabled?: boolean
} & typeof defaultProps

const defaultProps = buttonDefaults

const ButtonSubmit = ({
	text,
	bgColor,
	textColor,
	borderColor,
	margin,
	padding,
	isDisabled,
	borderRadius,
	fontSize,
	fontWeight,
}: Props) => (
	<>
		<button type="submit" className="btn submit">
			{text}
		</button>
		<style jsx>{`
			.btn {
				display: block;
				width: min-content;
				margin: ${margin};
				padding: ${padding};
				border: 2px solid;
				border-color: ${isDisabled ? Colors.muted[300] : borderColor};
				border-radius: ${borderRadius};
				background-color: ${isDisabled ? Colors.muted[300] : bgColor};
				color: ${textColor};
				font-size: ${fontSize};
				font-weight: ${fontWeight};
				cursor: ${isDisabled ? "not-allowed" : "pointer"};
				pointer-events: ${isDisabled ? "none" : "all"};
				white-space: nowrap;
			}
		`}</style>
	</>
)

ButtonSubmit.defaultProps = defaultProps

export default ButtonSubmit
