import React from "react"
import PageLayout from "../../components/utils/PageLayout"

type Props = {} & typeof defaultProps

const defaultProps = {}

const Profile = ({}: Props) => {
	return (
		<>
			<PageLayout>
				<h1>Profile</h1>
			</PageLayout>
			<style jsx>{``}</style>
		</>
	)
}

Profile.defaultProps = defaultProps

export default Profile
