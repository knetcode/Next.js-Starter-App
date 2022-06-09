import React from "react"
import type { ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	fontWeight?: number
	fontSize?: string
	textColor?: string
} & typeof defaultProps

const defaultProps = {
	fontWeight: 300,
	fontSize: "20px",
	textColor: Colors.text.dark,
}

const SubText = ({ children, fontWeight, fontSize, textColor }: Props) => {
	return (
		<>
			<p className="sub-text">{children}</p>
			<style jsx>{`
				.sub-text {
					font-weight: ${fontWeight};
					font-size: ${fontSize};
					color: ${textColor};
				}
			`}</style>
		</>
	)
}

SubText.defaultProps = defaultProps

export default SubText
