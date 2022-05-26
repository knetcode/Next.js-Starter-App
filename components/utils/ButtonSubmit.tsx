import React, { useRef } from "react"
import type { Dispatch, SetStateAction } from "react"
import Colors from "../../styles/colors"

type Props = {
	labelText: string
	id: string
	inputValue: boolean
	setInputValue: Dispatch<SetStateAction<boolean>>
}

const Checkbox = ({ labelText, id, inputValue, setInputValue }: Props) => {
	const inputRef = useRef<HTMLInputElement>()

	return (
		<>
			<div className="checkbox-group">
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

export default Checkbox
