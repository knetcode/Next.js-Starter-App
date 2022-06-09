import React, { ReactNode } from "react"
import Colors from "../../styles/colors"

type Props = {
	children?: ReactNode | null
	topSkew?: boolean
	botSkew?: boolean
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
	padding?: string
	width?: string
} & typeof defaultProps

const defaultProps = {
	children: null,
	topSkew: true,
	botSkew: true,
	bgColor: Colors.white,
	textColor: Colors.text.dark,
	justifyContent: "center",
	alignItems: "center",
	gap: "50px",
	flexWrap: "nowrap",
	padding: "50px 0",
	width: "80%",
}

const Block = ({
	children,
	topSkew,
	botSkew,
	bgColor,
	textColor,
	justifyContent,
	alignItems,
	gap,
	flexWrap,
	padding,
	width,
}: Props) => (
	<>
		<section className="block">
			{topSkew && <div className="top skew" />}
			<div className="inner">
				<div className="content">{children}</div>
			</div>
			{botSkew && <div className="bot skew" />}
		</section>
		<style jsx>{`
			.block {
				width: 100%;
				height: 100%;
				margin: 0px auto;
				color: ${textColor};
				position: relative;
				margin-top: ${topSkew ? "-81px" : "0"};
				margin-bottom: ${botSkew ? "-80px" : "0"};
			}
			.skew {
				width: 100%;
				height: 80px;
				background-color: ${bgColor};
				position: relative;
			}
			.top.skew {
				clip-path: polygon(0 80px, 0 80px, 100% 80px, 100% 0);
				top: 0px;
			}
			.bot.skew {
				clip-path: polygon(100% 0, 100% 0, 0 80px, 0 0);
				bottom: 0px;
			}
			.inner {
				background-color: ${bgColor};
				margin: 0 auto;
				width: 100%;
				height: 100%;
				position: relative;
				padding: ${padding};
			}
			.content {
				width: ${width};
				max-width: 1200px;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				align-items: ${alignItems};
				justify-content: ${justifyContent};
				gap: ${gap};
				flex-wrap: ${flexWrap};
			}
			@media (min-width: 1024px) {
				.inner {
					padding: ${padding};
				}
			}
		`}</style>
	</>
)

Block.defaultProps = defaultProps

export default Block
