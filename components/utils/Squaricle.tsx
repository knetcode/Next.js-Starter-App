import React from "react"
import type { ReactNode } from "react"

type Props = {
	bgColor: string
	textColor: string
	content: string | ReactNode
	width?: string
	height?: string
	fontSize?: string
} & typeof defaultProps

const defaultProps = {
	width: "60px",
	height: "60px",
	fontSize: "30px",
}

const Squaricle = ({ bgColor, textColor, content, width, height, fontSize }: Props) => (
	<>
		<div className="squaricle-box">
			<svg width={62} height={62} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
				<path
					d="M30.5 0.946472C53.6278 0.946472 61 8.31864 61 31.4465C61 54.5743 53.6278 61.9465 30.5 61.9465C7.37216 61.9465 0 54.5743 0 31.4465C0 8.31864 7.37216 0.946472 30.5 0.946472Z"
					fill={bgColor}
				/>
			</svg>
			<div className="squaricle-content">{content}</div>
		</div>
		<style jsx>{`
			.squaricle-box {
				border-radius: 30px;
				width: ${width};
				height: ${height};
				position: relative;
			}
			.svg {
				object-fit: cover;
				height: 100%;
				width: 100%;
			}
			.squaricle-content {
				color: ${textColor};
				font-family: "FredokaOne", cursive;
				font-weight: bold;
				font-size: ${fontSize};
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: grid;
				place-content: center;
			}
		`}</style>
	</>
)

Squaricle.defaultProps = defaultProps

export default Squaricle
