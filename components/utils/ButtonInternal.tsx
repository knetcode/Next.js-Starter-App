import React from "react"
import Link from "next/link"
import Colors from "../../styles/colors"
import buttonDefaults from "./buttonDefaultTypes"

type Props = {
	text: string
	link: string
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

const ButtonInternal = ({
	text,
	link,
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
		<div className="btn-wrapper">
			<Link href={link}>
				<a className="btn internal">{text}</a>
			</Link>
		</div>
		<style jsx>{`
			.btn-wrapper {
				cursor: ${isDisabled ? "not-allowed" : "pointer"};
			}
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
				pointer-events: ${isDisabled ? "none" : "all"};
				white-space: nowrap;
			}
		`}</style>
	</>
)

ButtonInternal.defaultProps = defaultProps

export default ButtonInternal
