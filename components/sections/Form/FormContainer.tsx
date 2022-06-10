import React from "react"

type Props = {} & typeof defaultProps

const defaultProps = {}

const FormContainer = ({}: Props) => {
	// Ticket holder name
	// Booking reference
	// Bank name
	// Account holder name
	// Account number

	return (
		<>
			<div>
				<h1>FormContainer</h1>
			</div>
			<style jsx>{``}</style>
		</>
	)
}

FormContainer.defaultProps = defaultProps

export default FormContainer
