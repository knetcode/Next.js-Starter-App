import React, { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react"
import { IoCloseCircleSharp } from "react-icons/io5"
import Colors from "../../styles/colors"

type Props = {
	children: ReactNode
	showModal: boolean
	setShowModal: Dispatch<SetStateAction<boolean>>
	padding?: string
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	padding: "20px 10px",
	styles: {},
}

const Modal = ({ children, showModal, setShowModal, padding, styles }: Props) => {
	return (
		showModal && (
			<>
				<div className="modal-outer">
					<div className="modal-inner" style={styles}>
						<div className="close-modal">
							<button type="button" onClick={() => setShowModal(false)}>
								<IoCloseCircleSharp size={30} color={Colors.text.dark} />
							</button>
						</div>
						{children}
					</div>
				</div>
				<style jsx>{`
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
					}
					.modal-inner {
						position: relative;
						width: 60%;
						min-width: 280px;
						max-width: 1000px;
						height: 60%;
						background-color: ${Colors.white};
						border-radius: 10px;
						box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
						padding: ${padding};
					}
					.close-modal {
						position: absolute;
						top: 5px;
						right: 5px;
					}
				`}</style>
			</>
		)
	)
}

Modal.defaultProps = defaultProps

export default Modal
