const axios = require("axios")
import generateEmailTemplate from "../../models/emailTemplate"

const sendEmail = async (email: string, firstName: string, lastName: string, reference: string) => {
	try {
		const { data } = await axios.post(
			`https://api-sms.computicket.com/email/V2?html=true`,
			{
				fromEmail: "licencerenewal@computicket.com",
				subject: "Licence Renewal",
				body: generateEmailTemplate(firstName, lastName, reference),
				toEmail: [email],
				cc: [],
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
	} catch (error) {
		console.error(error)
	}
}

export default async (req: any, res: any) => {
	try {
		sendEmail(req.body.email, req.body.firstName, req.body.lastName, req.body.reference)
		res.status(200).end()
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}
