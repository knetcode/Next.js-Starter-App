import React from "react"
import type { StaticImageData } from "next/image"
import Image from "next/image"

type Props = {
	src: StaticImageData
	alt: string
	height?: string
	width?: string
	loading?: "eager" | "lazy"
} & typeof defaultProps

const defaultProps = {
	height: "100%",
	width: "100%",
	loading: "lazy",
}

const ImageContainer = ({ src, alt, height, width, loading }: Props) => {
	return (
		<>
			<div className="img-container">
				<Image className="img" layout="raw" src={src} alt={alt} loading={loading} />
			</div>
			<style jsx>{`
				.img-container {
					height: ${height};
					width: ${width};
					position: relative;
				}
				:global(.img) {
					height: auto;
					width: auto;
					max-height: 100%;
					object-fit: contain;
				}
			`}</style>
		</>
	)
}

ImageContainer.defaultProps = defaultProps

export default ImageContainer
