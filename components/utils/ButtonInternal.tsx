import React, { CSSProperties } from "react"
import Link from "next/link"
import Colors from "../../styles/colors"

type Props = {
	text: string
	link: string
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
	fontWeight,
	styles,
}: Props) => {
	return (
		<>
			<Link href={link}>
				<a className="btn internal" style={styles}>
					{text}
				</a>
			</Link>
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

ButtonInternal.defaultProps = defaultProps

export default ButtonInternal
