import React from "react"

import buttonDefaults from "./buttonDefaultTypes"

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
	fontSize?: string
	fontWeight?: "normal" | "bold"
	isDisabled?: boolean
} & typeof defaultProps

const defaultProps = buttonDefaults

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
	fontSize,
	fontWeight,
}: Props) => (
	<>
		<a href={link} target={newTab ? "_blank" : "_self"} className="btn external" rel="noreferrer">
			{text}
		</a>
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

ButtonExternal.defaultProps = defaultProps

export default ButtonExternal
