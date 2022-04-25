import generateEmailTemplate from "../../models/emailTemplate"

const sendEmail = async (email: string, firstName: string, lastName: string, reference: string) => {
	try {
		const res = await fetch("https://api-sms.computicket.com/email/V2?html=true", {
			headers: {
				"Content-type": "application/json",
				"Cache-control": "no-cache",
			},
			method: "POST",
			body: JSON.stringify({
				fromEmail: "licencerenewal@computicket.com",
				subject: "Licence Renewal",
				body: generateEmailTemplate(firstName, lastName, reference),
				toEmail: [email],
				cc: [],
			}),
		})
		const data = await res.json()
		return data
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
