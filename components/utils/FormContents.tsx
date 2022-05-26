import React from "react"
import type { ReactNode } from "react"

type Props = {
	children: ReactNode
	onSubmit: () => void
	flexDirection?: "column" | "row"
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
	alignItems?: "center" | "flex-start" | "flex-end"
	gap?: string
	padding?: string
	margin?: string
} & typeof defaultProps

const defaultProps = {
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "0px",
	padding: "0px",
	margin: "0px",
}

const FormContents = ({
	children,
	onSubmit,
	flexDirection,
	justifyContent,
	alignItems,
	gap,
	padding,
	margin,
}: Props) => {
	const onSubmitHandler = (e: any) => {
		e.preventDefault()
		onSubmit()
	}

	return (
		<>
			<form className="form" onSubmit={onSubmitHandler}>
				{children}
			</form>
			<style jsx>{`
				.form {
					display: flex;
					flex-direction: ${flexDirection};
					justify-content: ${justifyContent};
					align-items: ${alignItems};
					gap: ${gap};
					padding: ${padding};
					margin: ${margin};
				}
			`}</style>
		</>
	)
}

FormContents.defaultProps = defaultProps

export default FormContents
