import React, { CSSProperties, ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children?: ReactNode | null
	bgColor?: string
	textColor?: string
	justifyContent?:
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
		| "flex-end"
		| "flex-start"
		| "stretch"
		| "baseline"
	alignItems?: "center" | "flex-end" | "flex-start" | "stretch" | "baseline"
	gap?: string
	flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	children: null,
	bgColor: Colors.white,
	textColor: Colors.text.dark,
	justifyContent: "center",
	alignItems: "center",
	gap: "5px",
	flexWrap: "nowrap",
	styles: {},
}

const Block = ({ children, bgColor, textColor, styles, justifyContent, alignItems, gap, flexWrap }: Props) => (
	<>
		<section className="block" style={styles}>
			<div className="inner">{children}</div>
		</section>
		<style jsx>{`
			.block {
				width: 100%;
				height: 100%;
				margin: 0px auto;
				padding: 50px 5%;
				background-color: ${bgColor};
				color: ${textColor};
			}
			.inner {
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				align-items: ${alignItems};
				justify-content: ${justifyContent};
				gap: ${gap};
				flex-wrap: ${flexWrap};
				width: 100%;
				max-width: 1600px;
				min-width: 280px;
				height: 100%;
				position: relative;
			}
			@media (min-width: 1024px) {
				.block {
					padding: 100px 10%;
				}
			}
		`}</style>
	</>
)

Block.defaultProps = defaultProps

export default Block
