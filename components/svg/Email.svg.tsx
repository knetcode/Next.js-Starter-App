import React from "react"

type Props = {
	width?: number
	height?: number
	fill: string
} & typeof defaultProps

const defaultProps = {
	width: 24,
	height: 24,
}

const EmailSvg = ({ width, height, fill }: Props) => (
	<svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_235_9142)">
			<path
				d="M19.4099 4.25586H3.88208C2.81454 4.25586 1.95081 5.1293 1.95081 6.19683L1.9411 17.8427C1.9411 18.9102 2.81454 19.7837 3.88208 19.7837H19.4099C20.4774 19.7837 21.3509 18.9102 21.3509 17.8427V6.19683C21.3509 5.1293 20.4774 4.25586 19.4099 4.25586ZM19.4099 8.13781L11.646 12.9902L3.88208 8.13781V6.19683L11.646 11.0493L19.4099 6.19683V8.13781Z"
				fill={fill}
			/>
		</g>
		<defs>
			<clipPath id="clip0_235_9142">
				<rect width="23.2917" height="23.2917" fill="white" transform="translate(0 0.374512)" />
			</clipPath>
		</defs>
	</svg>
)

EmailSvg.defaultProps = defaultProps

export default EmailSvg
