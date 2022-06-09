import React from "react"
import ImageContainer from "./ImageContainer"

import mma from "../../public/slider-mma.webp"
import superswift from "../../public/slider-superswift.webp"
import computicket from "../../public/slider-computicket.webp"
import knect from "../../public/slider-knect.webp"
import cellc from "../../public/slider-cellc.webp"
import mtn from "../../public/slider-mtn.webp"
import telkom from "../../public/slider-telkom.webp"
import vodacom from "../../public/slider-vodacom.webp"
import payat from "../../public/slider-pay-at.webp"
import easypay from "../../public/slider-easy-pay.webp"
import dstv from "../../public/slider-dstv.webp"
import outsurance from "../../public/slider-outsurance.webp"
import aramex from "../../public/slider-aramex.webp"
import eskom from "../../public/slider-eskom.webp"
import jhb from "../../public/slider-jhb.webp"
import cpt from "../../public/slider-cpt.webp"
import nmb from "../../public/slider-nmb.webp"
import mbombela from "../../public/slider-mbombela.webp"
import hollywood from "../../public/slider-hollywood.webp"
import lotto from "../../public/slider-lotto.webp"
import powerball from "../../public/slider-powerball.webp"
import samsung from "../../public/slider-samsung.webp"
import nokia from "../../public/slider-nokia.webp"
import hisense from "../../public/slider-hisense.webp"
import vouchers from "../../public/slider-vouchers.webp"
import shoprite from "../../public/slider-shoprite.webp"
import checkers from "../../public/slider-checkers.webp"
import checkersHyper from "../../public/slider-checkers-hyper.webp"
import usave from "../../public/slider-usave.webp"
import foodworld from "../../public/slider-foodworld.webp"

type Props = {
	scrollDuration?: string
} & typeof defaultProps

const defaultProps = {
	scrollDuration: "60s",
}

const SliderContainer = ({ scrollDuration }: Props) => {
	const imageList = [
		{ key: 0, imgSrc: mma, imgAlt: "Money Market Account" },
		{ key: 1, imgSrc: superswift, imgAlt: "SuperSwift" },
		{ key: 2, imgSrc: computicket, imgAlt: "Computicket" },
		{ key: 3, imgSrc: knect, imgAlt: "K'nect Mobile" },
		{ key: 4, imgSrc: cellc, imgAlt: "Cell C" },
		{ key: 5, imgSrc: mtn, imgAlt: "MTN" },
		{ key: 6, imgSrc: telkom, imgAlt: "Telkom" },
		{ key: 7, imgSrc: vodacom, imgAlt: "Vodacom" },
		{ key: 8, imgSrc: payat, imgAlt: "Pay At" },
		{ key: 9, imgSrc: easypay, imgAlt: "Easy Pay" },
		{ key: 10, imgSrc: dstv, imgAlt: "DSTV" },
		{ key: 11, imgSrc: outsurance, imgAlt: "Outsurance" },
		{ key: 12, imgSrc: aramex, imgAlt: "Aramex" },
		{ key: 13, imgSrc: eskom, imgAlt: "Eskom" },
		{ key: 14, imgSrc: jhb, imgAlt: "City of Johannesburg" },
		{ key: 15, imgSrc: cpt, imgAlt: "City of Cape Town" },
		{ key: 16, imgSrc: nmb, imgAlt: "Nelson Mandela Bay" },
		{ key: 17, imgSrc: mbombela, imgAlt: "City of Mbombela" },
		{ key: 18, imgSrc: hollywood, imgAlt: "Hollywood Bets" },
		{ key: 19, imgSrc: lotto, imgAlt: "National Lottery - Lotto" },
		{ key: 20, imgSrc: powerball, imgAlt: "National Lottery - Powerball" },
		{ key: 21, imgSrc: samsung, imgAlt: "Samsung" },
		{ key: 22, imgSrc: nokia, imgAlt: "Nokia" },
		{ key: 23, imgSrc: hisense, imgAlt: "Hisense" },
		{ key: 24, imgSrc: vouchers, imgAlt: "Vouchers" },
		{ key: 25, imgSrc: shoprite, imgAlt: "Shoprite" },
		{ key: 26, imgSrc: checkers, imgAlt: "Checkers" },
		{ key: 27, imgSrc: checkersHyper, imgAlt: "Checkers Hyper" },
		{ key: 28, imgSrc: usave, imgAlt: "Usave" },
		{ key: 29, imgSrc: foodworld, imgAlt: "Food World" },
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
					z-index: 2;
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
