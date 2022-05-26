import React from "react"
import ImageContainer from "./ImageContainer"

type Props = {
	scrollDuration?: string
} & typeof defaultProps

const defaultProps = {
	scrollDuration: "60s",
}

const SliderContainer = ({ scrollDuration }: Props) => {
	const imageList = [
		// { key: 0, imgSrc:  imgAlt: "Money Market Account" },
	]

	return (
		<>
			{imageList && (
				<div className="slider-container" id="slider-container">
					<div className="slider-sliding">
						{imageList.map((image) => {
							return (
								<div className="slider-item" key={image.key}>
									<ImageContainer src={image.imgSrc} alt={image.imgAlt} loading="eager" />
								</div>
							)
						})}
					</div>
					<div className="slider-sliding">
						{imageList.map((image) => {
							return (
								<div className="slider-item" key={image.key}>
									<ImageContainer src={image.imgSrc} alt={image.imgAlt} loading="eager" />
								</div>
							)
						})}
					</div>
				</div>
			)}

			<style jsx>{`
				.slider-container {
					box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
					position: relative;
					background: white;
					display: flex;
					overflow: hidden;
					height: 80px;
				}

				.slider-sliding {
					display: flex;
					animation: slideshow ${scrollDuration} linear infinite;
					align-items: center;
				}

				.slider-item {
					display: inline-flex;
					justify-content: center;
					align-items: center;
					margin: auto 20px;
				}

				@keyframes slideshow {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-100%);
					}
				}
			`}</style>
		</>
	)
}

SliderContainer.defaultProps = defaultProps

export default SliderContainer
