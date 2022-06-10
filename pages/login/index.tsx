import React, { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Block from "../../components/utils/Block"
import PageLayout from "../../components/utils/PageLayout"
import Colors from "../../styles/colors"
import Card from "../../components/utils/Card"
import Input from "../../components/utils/Input"
import FormContents from "../../components/utils/FormContents"
import ButtonSubmit from "../../components/utils/ButtonSubmit"
import { emailRegex } from "../../models/regexModels"
import { isDone } from "../../lib/helperFunctions"
import { setIsLoading } from "../../redux/slices/appSlice"
import { useAppDispatch, useAppSelector } from "../../redux/config/hooks"
import { setAuthToken } from "../../redux/slices/authSlice"
import { setup } from "../../lib/csrf"
import Modal from "../../components/modal/Modal"

type Props = {} & typeof defaultProps

const defaultProps = {}

const Login = ({}: Props) => {
	const router = useRouter()
	const dispatch = useAppDispatch()

	const authToken = useAppSelector((state) => state.auth.authToken)

	const [loginEmail, setLoginEmail] = useState<string>("")
	const [loginPassword, setLoginPassword] = useState<string>("")
	const [loginEmailValidated, setLoginEmailValidated] = useState<boolean>(false)
	const [loginPasswordValidated, setLoginPasswordValidated] = useState<boolean>(false)
	const [showModal, setShowModal] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>("")

	const loginHandler = async () => {
		dispatch(setIsLoading(true))
		try {
			const { data } = await axios.post(
				`/api/v1/login`,
				{
					email: loginEmail,
					password: loginPassword,
				},
				{
					headers: {
						"Content-type": "application/json",
						"Cache-control": "no-cache",
					},
					timeout: 20000,
				}
			)
			dispatch(setIsLoading(false))
			console.log(data)
			if (data.success && data.authToken) {
				dispatch(setAuthToken(data.authToken))
				router.push("/profile")
			} else {
				setShowModal(true)
				setErrorMessage(data.message)
			}
		} catch (error) {
			dispatch(setIsLoading(false))
			console.error(error)
		}
	}

	useEffect(() => {
		if (loginEmail.match(emailRegex)) {
			setLoginEmailValidated(true)
		} else {
			setLoginEmailValidated(false)
		}
	}, [loginEmail])

	useEffect(() => {
		if (loginPassword.length >= 6) {
			setLoginPasswordValidated(true)
		} else {
			setLoginPasswordValidated(false)
		}
	}, [loginPassword])

	useEffect(() => {
		if (typeof window !== "undefined") {
			if (authToken) {
				router.push("/profile")
			}
		}
	}, [authToken])

	return (
		<>
			<PageLayout>
				<Block width="100%" blockHeight="100vh" bgColor={Colors.computicket.red}>
					<Card padding="50px" cardWidth="clamp(280px, 100%, 800px)" margin="auto">
						<h2>Login</h2>
						<FormContents onSubmit={loginHandler}>
							<Input
								labelText="Email"
								dispatcher={false}
								inputValue={loginEmail}
								setInputValue={setLoginEmail}
								trim
								validator={loginEmailValidated}
								invalidMessage="Please enter a valid email address"
							/>
							<Input
								labelText="Password"
								dispatcher={false}
								inputValue={loginPassword}
								setInputValue={setLoginPassword}
								type="password"
								trim
								validator={loginPasswordValidated}
								invalidMessage="Passwords need to be 6 characters or longer"
							/>
							<ButtonSubmit
								margin="20px 0 0 0"
								text="Submit"
								isDisabled={isDone(loginEmailValidated, loginPasswordValidated)}
							/>
						</FormContents>
					</Card>
				</Block>
				<Modal setShowModal={setShowModal} showModal={showModal}>
					<h2>Error</h2>
					<p>{errorMessage}</p>
				</Modal>
			</PageLayout>
			<style jsx>{``}</style>
		</>
	)
}

Login.defaultProps = defaultProps

export const getServerSideProps = setup(async () => ({ props: {} }))

export default Login
