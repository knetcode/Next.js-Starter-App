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

const SubCopy = ({ children, fontWeight, fontSize, textColor }: Props) => {
	return (
		<>
			<p className="sub-copy">{children}</p>
			<style jsx>{`
				.sub-copy {
					font-weight: ${fontWeight};
					font-size: ${fontSize};
					color: ${textColor};
				}
			`}</style>
		</>
	)
}

SubCopy.defaultProps = defaultProps

export default SubCopy
