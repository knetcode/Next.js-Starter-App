import React, { CSSProperties, Dispatch, SetStateAction, useRef } from "react"
import Colors from "../../styles/colors"

type Props = {
	labelText: string
	id: string
	inputValue: boolean
	setInputValue: Dispatch<SetStateAction<boolean>>
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	styles: {},
}

const Checkbox = ({ labelText, id, inputValue, setInputValue, styles }: Props) => {
	const inputRef = useRef<HTMLInputElement>()

	return (
		<>
			<div className="checkbox-group" style={styles}>
				<input
					className="checkbox-input"
					type="checkbox"
					id={id}
					ref={inputRef}
					checked={inputValue}
					onChange={() => setInputValue(inputRef.current.checked)}
				/>
				<label className="checkbox-label" htmlFor={id}>
					{labelText}
				</label>
			</div>
			<style jsx>{`
				.checkbox-group {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					color: ${Colors.text.dark};
					width: 300px;
					margin: 10px 0;
					text-align: left;
				}

				.checkbox-input {
					margin-right: 8px;
				}

				.checkbox-label {
					color: ${Colors.text.dark};
				}
			`}</style>
		</>
	)
}

Checkbox.defaultProps = defaultProps

export default Checkbox
