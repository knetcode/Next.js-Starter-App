import React, { useRef } from "react"
import type { Dispatch, SetStateAction } from "react"
import DOMPurify from "dompurify"
import { FiEdit } from "react-icons/fi"
import Colors from "../../styles/colors"
import { useAppDispatch } from "../../redux/config/hooks"
import Themes from "../../styles/themes"

type Props = {
	type?: "date" | "text" | "number" | "password"
	labelText?: string
	inputValue: string
	setInputValue: Dispatch<SetStateAction<string>>
	validator?: boolean
	placeholder?: string
	maxLength?: number
	dispatcher?: boolean
	trim?: boolean
	maxWidth?: string
	invalidMessage?: string
} & typeof defaultProps

const defaultProps = {
	type: "text",
	placeholder: "",
	maxLength: 60,
	labelText: "",
	validator: true,
	dispatcher: true,
	trim: false,
	maxWidth: "400px",
	invalidMessage: "Invalid input",
}

const Input = ({
	type,
	labelText,
	inputValue,
	setInputValue,
	placeholder,
	validator,
	maxLength,
	dispatcher,
	trim,
	maxWidth,
	invalidMessage,
}: Props) => {
	const dispatch = useAppDispatch()
	const inputRef = useRef<HTMLInputElement>()

	const dateStringify = (input: string, dispatcher: boolean = true) => {
		let val = input
		if (val.length === 4) {
			val += "-"
		} else if (val.length === 7) {
			val += "-"
		}
		if (dispatcher) {
			dispatch(setInputValue(val))
		} else {
			setInputValue(val)
		}
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
				{dispatcher ? (
					trim ? (
						<>
							{type === "date" && (
								<input
									className="form-input"
									type="text"
									id={labelText}
									ref={inputRef}
									value={inputValue}
									onChange={() => dateStringify(DOMPurify.sanitize(inputRef.current.value.trim()))}
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
									onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value.trim())))}
									placeholder={placeholder}
									maxLength={maxLength}
								/>
							)}
							{type === "password" && (
								<input
									className="form-input"
									type="password"
									id={labelText}
									ref={inputRef}
									value={inputValue}
									onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value.trim())))}
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
									onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value.trim())))}
									placeholder={placeholder}
								/>
							)}
						</>
					) : (
						<>
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
									onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value)))}
									placeholder={placeholder}
									maxLength={maxLength}
								/>
							)}
							{type === "password" && (
								<input
									className="form-input"
									type="password"
									id={labelText}
									ref={inputRef}
									value={inputValue}
									onChange={() => dispatch(setInputValue(DOMPurify.sanitize(inputRef.current.value)))}
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
						</>
					)
				) : trim ? (
					<>
						{type === "date" && (
							<input
								className="form-input"
								type="text"
								id={labelText}
								ref={inputRef}
								value={inputValue}
								onChange={() => dateStringify(DOMPurify.sanitize(inputRef.current.value.trim()), false)}
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
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value.trim()))}
								placeholder={placeholder}
								maxLength={maxLength}
							/>
						)}
						{type === "password" && (
							<input
								className="form-input"
								type="password"
								id={labelText}
								ref={inputRef}
								value={inputValue}
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value.trim()))}
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
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value.trim()))}
								placeholder={placeholder}
							/>
						)}
					</>
				) : (
					<>
						{type === "date" && (
							<input
								className="form-input"
								type="text"
								id={labelText}
								ref={inputRef}
								value={inputValue}
								onChange={() => dateStringify(DOMPurify.sanitize(inputRef.current.value), false)}
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
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value))}
								placeholder={placeholder}
								maxLength={maxLength}
							/>
						)}
						{type === "password" && (
							<input
								className="form-input"
								type="password"
								id={labelText}
								ref={inputRef}
								value={inputValue}
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value))}
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
								onChange={() => setInputValue(DOMPurify.sanitize(inputRef.current.value))}
								placeholder={placeholder}
							/>
						)}
					</>
				)}
				<label className="form-label" htmlFor={labelText}>
					{labelText}
				</label>
				<p className="form-message">{invalidMessage}</p>
				<div className="form-icon">
					<FiEdit />
				</div>
			</div>
			<style jsx>{`
				.form-group {
					background-color: transparent;
					display: flex;
					flex-direction: column-reverse;
					justify-content: center;
					align-items: flex-start;
					margin: 20px auto;
					width: 100%;
					position: relative;
					z-index: 2;
					max-width: ${maxWidth};
					gap: 8px;
				}
				.form-label {
					color: ${Colors.muted[600]};
					white-space: nowrap;
					width: 100%;
					font-size: 14px;
					z-index: 2;
					background-color: transparent;
				}
				.form-input {
					width: 100%;
					height: 40px;
					padding: 10px;
					padding-right: 36px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					font-size: 20px;
					border: 1px solid ${Colors.muted[400]};
					position: relative;
					border-radius: ${Themes.borderRadius};
					z-index: 2;
					background-color: transparent;
				}
				.form-message {
					font-size: 12px;
					position: absolute;
					top: 70px;
					left: 0;
					display: none;
					text-align: left;
				}
				.form-icon {
					display: grid;
					place-content: center;
					position: absolute;
					bottom: 21px;
					width: 34px;
					transform: translate(0%, 50%);
					color: ${Colors.muted[900]};
					font-size: 20px;
					border-left: 1px solid ${Colors.muted[300]};
					right: 0;
					z-index: 1;
				}
				.form-input:focus,
				.form-input:active {
					outline: 1px solid ${Colors.info};
					border: none;
				}
				.form-input:focus ~ .form-label,
				.form-input:active ~ .form-label,
				.form-input:focus ~ .form-icon,
				.form-input:active ~ .form-icon {
					color: ${Colors.info};
					border-color: ${Colors.info};
				}
				.form-group.invalid .form-input:not(:focus) {
					border: 1px solid ${Colors.error};
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-label {
					color: ${Colors.error};
					display: block;
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-icon {
					color: ${Colors.error};
					border-color: ${Colors.error};
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-message {
					color: ${Colors.error};
				}
				.form-group.valid .form-input:not(:focus) {
					border: 1px solid ${Colors.success};
				}
				.form-group.valid .form-input:not(:focus) ~ .form-label {
					color: ${Colors.success};
				}
				.form-group.valid .form-input:not(:focus) ~ .form-icon {
					color: ${Colors.success};
					border-color: ${Colors.success};
				}
				.form-group.invalid .form-input:not(:focus) ~ .form-message {
					display: block;
					color: ${Colors.error};
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
