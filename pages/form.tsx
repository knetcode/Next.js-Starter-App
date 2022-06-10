import React from "react"
import axios from "axios"
import Input from "../components/utils/Input"
import { setFirstName, setLastName } from "../redux/slices/formSlice"
import { useAppSelector } from "../redux/config/hooks"
import { setup } from "../lib/csrf"
import ButtonFunction from "../components/utils/ButtonFunction"

const Form = () => {
	const firstName = useAppSelector((state) => state.form.firstName)
	const lastName = useAppSelector((state) => state.form.lastName)

	const csrfHandler = async () => {
		try {
			const { data } = await axios.post(
				`/api/testCsrf`,
				{
					testData: "This is some test data",
				},
				{
					headers: {
						"Content-type": "application/json",
						"Cache-control": "no-cache",
					},
					timeout: 10000,
				}
			)
			console.log(data)
			return data
		} catch (error) {
			console.error(error)
			return error
		}
	}

	return (
		<div>
			<h1>Form</h1>
			<Input inputValue={firstName} setInputValue={setFirstName} labelText="First name" />
			<Input inputValue={lastName} setInputValue={setLastName} labelText="Last name" />
			<ButtonFunction text="CSRF Check" onClick={csrfHandler} />
		</div>
	)
}

export const getServerSideProps = setup(async () => ({ props: {} }))

export default Form
