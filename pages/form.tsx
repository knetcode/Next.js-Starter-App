import React from "react"
import Input from "../components/utils/Input"
import { setFirstName, setLastName } from "../redux/formSlice"
import { useAppSelector } from "../redux/hooks"

const Form = () => {
	const firstName = useAppSelector((state) => state.form.firstName)
	const lastName = useAppSelector((state) => state.form.lastName)

	return (
		<div>
			<h1>Form</h1>
			<Input inputValue={firstName} setInputValue={setFirstName} labelText="First name" />
			<Input inputValue={lastName} setInputValue={setLastName} labelText="Last name" />
		</div>
	)
}

export default Form
