import React, { useEffect, useState } from "react"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"
import Colors from "../../styles/colors"

type Option = {
	key: string | number
	value: string
	label: string
}

type Props = {
	options: Array<Option>
	placeholder?: string
	onChange: (args0: any) => void
} & typeof defaultProps

const defaultProps = {
	placeholder: "Select an option",
}

const Select = ({ options, placeholder, onChange }: Props) => {
	const [selectedOption, setSelectedOption] = useState<any>(null)
	const [showList, setShowList] = useState<boolean>(false)

	const onSelectListHandler = () => {
		setShowList(true)
	}

	const onSelectItemHandler = (option: Option) => {
		setShowList(false)
		setSelectedOption(option)
	}

	const onFocusHandler = () => {
		setShowList(true)
	}

	const onBlurHandler = () => {
		setTimeout(() => {
			setShowList(false)
		}, 200)
	}

	useEffect(() => {
		if (selectedOption) {
			onChange(selectedOption)
		}
	}, [selectedOption])

	return (
		<>
			<div className="select-container">
				<input
					type="text"
					placeholder={placeholder}
					className={`select-input ${selectedOption ? "option-selected" : ""}`}
					onFocus={() => onFocusHandler()}
					onBlur={() => onBlurHandler()}
					value={selectedOption?.label || ""}
					readOnly
				/>
				<div className="chevron-container">{showList ? <IoChevronUpSharp /> : <IoChevronDownSharp />}</div>
				{/* eslint-disable-next-line */}
				<ul className="select-list" onClick={() => onSelectListHandler()}>
					{/* eslint-disable-next-line */}
					{options.map((option) => (
						//  eslint-disable-next-line
						<li key={option.key} className="select-list-item" onClick={() => onSelectItemHandler(option)}>
							{option.label}
						</li>
					))}
				</ul>
			</div>
			<style jsx>{`
				.select-container {
					width: 100%;
					position: relative;
				}
				.select-input {
					width: 100%;
					padding: 10px;
					border-radius: 4px;
					border: 1px solid ${Colors.muted[200]};
					background-color: transparent;
					cursor: pointer;
					font-size: 16px;
					color: ${Colors.text.dark};
				}
				.select-input::placeholder {
					color: ${Colors.muted[500]};
					font-size: 16px;
				}
				.select-list,
				.select-list-item {
					list-style-type: none;
				}
				.select-list {
					border: 2px solid ${Colors.info};
					border-radius: 4px;
					position: absolute;
					top: 30px;
					z-index: 9999;
					width: 100%;
					background-color: ${Colors.white};
					display: ${showList ? "block" : "none"};
					max-height: 50vh;
					overflow-y: scroll;
				}
				.select-list-item {
					cursor: pointer;
					padding: 10px;
					border-bottom: 1px solid ${Colors.muted[100]};
					margin: 0;
					width: 100%;
					height: 100%;
				}
				.select-list-item:hover {
					background-color: ${Colors.lightBlue[100]};
				}
				.select-input:focus {
					outline: 2px solid ${Colors.info};
				}
				.chevron-container {
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					width: 40px;
					border-left: 1px solid ${Colors.muted[200]};
					display: grid;
					place-content: center;
					z-index: -1;
				}
			`}</style>
		</>
	)
}

Select.defaultProps = defaultProps

export default Select
