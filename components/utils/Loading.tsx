import React from "react"
import { useAppSelector } from "../../redux/hooks"
import Colors from "../../styles/colors"

type Props = {
	loadingOverride?: boolean
} & typeof defaultProps

const defaultProps = {
	loadingOverride: false,
}

const Loading = ({ loadingOverride }: Props) => {
	const isLoading = useAppSelector((state) => state.app.isLoading)
	const loadingText = useAppSelector((state) => state.app.loadingText)

	return (
		(isLoading || loadingOverride) && (
			<>
				<div className="container">
					<div className="row">
						<div className="box box1" />
						<div className="box box2" />
						<div className="box box3" />
					</div>
					<div className="row">
						<div className="box box4" />
						<div className="box box5" />
						<div className="box box6" />
					</div>
					<div className="row">
						<div className="box box7" />
						<div className="box box8" />
						<div className="box box9" />
					</div>
					<h2>{loadingText}</h2>
				</div>
				<style jsx>{`
					h2 {
						margin-top: 20px;
					}
					.container {
						position: fixed;
						top: 0;
						left: 0;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						background-color: white;
						width: 100vw;
						height: 100vh;
						z-index: 100000;
					}

					.row {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
					}

					.box {
						width: 50px;
						height: 50px;
						margin: 5px;
						border-radius: 50px;
						transition: all 0.3s ease;
						background-color: pink;
						background-color: ${Colors.moneyMarket.red};
					}
					.box1 {
						animation: colorChange 0.7s 0s infinite ease-in;
					}
					.box2 {
						animation: colorChange 0.7s 0.2s infinite ease-in;
					}
					.box3 {
						animation: colorChange 0.7s 0.2s infinite ease-in;
					}
					.box4 {
						animation: colorChange 0.7s 0.3s infinite ease-in;
					}
					.box5 {
						animation: colorChange 0.7s 0.4s infinite ease-in;
					}
					.box6 {
						animation: colorChange 0.7s 0.5s infinite ease-in;
					}
					.box7 {
						animation: colorChange 0.7s 0.6s infinite ease-in;
					}
					.box8 {
						animation: colorChange 0.7s 0.7s infinite ease-in;
					}
					.box9 {
						animation: colorChange 0.7s 0.8s infinite ease-in;
					}

					@keyframes colorChange {
						from {
							opacity: 1;
						}
						to {
							opacity: 0.5;
						}
					}
				`}</style>
			</>
		)
	)
}

Loading.defaultProps = defaultProps

export default Loading
