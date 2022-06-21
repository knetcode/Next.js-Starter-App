import React from "react"

import type { Dispatch, ReactNode, SetStateAction } from "react"

import { IoCloseCircleSharp } from "react-icons/io5"

import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	padding?: string
} & typeof defaultProps

const defaultProps = {
	padding: "50px 20px",
}

const Modal = ({ children, showModal, setShowModal, padding }: Props) =>
	showModal && (
		<>
			<div className="modal-wrapper">
				<div className="modal-outer">
					<div className="modal-inner">
						<div className="close-modal">
							<button type="button" onClick={() => setShowModal(false)}>
								<IoCloseCircleSharp size={30} color={Colors.text.dark} />
							</button>
						</div>
						{children}
					</div>
				</div>
			</div>
			<style jsx>{`
				.modal-wrapper {
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					z-index: 20;
				}
				.modal-outer {
					position: fixed;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					background-color: rgba(0, 0, 0, 0.6);
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 100;
				}
				.modal-inner {
					position: relative;
					width: 60%;
					min-width: 280px;
					max-width: 1000px;
					background-color: ${Colors.white};
					color: ${Colors.text.dark};
					border-radius: 10px;
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
					padding: ${padding};
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 20px;
				}
				.close-modal {
					position: absolute;
					top: 5px;
					right: 5px;
				}
			`}</style>
		</>
	)

Modal.defaultProps = defaultProps

export default Modal
