import React, { useRef, Dispatch, SetStateAction } from "react"
import { useDispatch } from "react-redux"
import DOMPurify from "dompurify"
import { FiEdit } from "react-icons/fi"
import Colors from "../../styles/colors"

type Props = {
	type?: "date" | "text" | "number"
	labelText: string
	inputValue: string
	setInputValue: Dispatch<SetStateAction<string>>
	validator: boolean
	placeholder?: string
	maxLength?: number
} & typeof defaultProps

const defaultProps = {
	type: "text",
	placeholder: "",
	maxLength: 60,
}

const Input = ({ type, labelText, inputValue, setInputValue, placeholder, validator, maxLength }: Props) => {
	const dispatch = useDispatch<any>()
	const inputRef = useRef<HTMLInputElement>()

	const dateStringify = (input: string) => {
		let val = input
		if (val.length === 4) {
			val += "-"
		} else if (val.length === 7) {
			val += "-"
		}
		dispatch(setInputValue(val))
	}

	const backspaceHandler = (e: any) => {
		if (e.which === 8) {
			let val = inputValue
			if (val.length === 5 || val.length === 8) {
				val = val.slice(0, val.length - 1)
				dispatch(setInputValue(val))
			}
		}
	}

	const validate = () => {
		let className: string = ""
		if (validator) {
			className = "valid"
		} else {
			className = "invalid"
		}
		return className
	}

	return (
		<>
			<div className={`form-group ${inputValue !== "" ? validate() : ""}`}>
				{type === "date" && (
					<input
						className="form-input"
						type="text"
						id={labelText}
						ref={inputRef}
						value={inputValue}
						onChange={() => dateStringify(DOMPurify.sanitize(inputRef.current.value))}
						onKeyDown={(e) => backspaceHandler(e)}
						placeholder={placeholder}
						maxLength={10}
					/>
				)}
				{type === "text" && (
					<input
						className="form-input"
						type="text"
						id={labelText}
						ref={inputRef}
						value={inputValue}
						onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value.toUpperCase())))}
						placeholder={placeholder}
						maxLength={maxLength}
					/>
				)}
				{type === "number" && (
					<input
						className="form-input"
						type="number"
						id={labelText}
						ref={inputRef}
						value={inputValue}
						onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value)))}
						placeholder={placeholder}
					/>
				)}
				<label className="form-label" htmlFor={labelText}>
					{labelText}
				</label>
				<div className="form-icon">
					<FiEdit />
				</div>
			</div>
			<style jsx>{`
				.form-group {
					display: flex;
					flex-direction: row-reverse;
					justify-content: center;
					align-items: center;
					gap: 4px;
					width: 100%;
					position: relative;
					padding: 12px 0 8px 5px;
					border: 1px solid ${Colors.muted[300]};
					border-top: none;
				}
				.form-input {
					width: 100%;
					height: 34px;
					padding: 10px;
					padding-right: 40px;
					font-size: 16px;
					border: none;
					position: relative;
					text-transform: uppercase;
					color: ${Colors.text.dark};
				}
				.form-label {
					color: ${Colors.muted[600]};
					white-space: nowrap;
					width: 110px;
					font-size: 12px;
				}
				.form-message {
					font-size: 12px;
					position: absolute;
					bottom: -20px;
					left: 50%;
					transform: translateX(-50%);
					display: none;
				}
				.form-icon {
					display: grid;
					place-content: center;
					position: absolute;
					top: 50%;
					width: 34px;
					transform: translate(0%, -50%);
					color: ${Colors.muted[900]};
					font-size: 20px;
					border-left: 1px solid ${Colors.muted[300]};
					right: 0;
				}
				.form-input::placeholder {
					color: ${Colors.muted[300]};
					font-size: 16px;
				}
				.form-input:focus,
				.form-input:active {
					outline: none;
					border-bottom: 1px solid ${Colors.info};
				}
				.form-input:focus ~ .form-label,
				.form-input:active ~ .form-label {
					color: ${Colors.info};
				}
				.form-group.invalid .form-input:not(:focus) {
					border: none;
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-message {
					display: block;
					color: ${Colors.error};
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-label {
					color: ${Colors.error};
					display: block;
				}
				.form-group.valid .form-input:not(:focus) {
					border: none;
				}
				.form-group.valid .form-input:not(:focus) ~ .form-label {
					color: ${Colors.success};
				}
				.form-input::-webkit-outer-spin-button,
				.form-input::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}
				.form-input[type="number"] {
					-moz-appearance: textfield;
				}
			`}</style>
		</>
	)
}

Input.defaultProps = defaultProps

export default Input
