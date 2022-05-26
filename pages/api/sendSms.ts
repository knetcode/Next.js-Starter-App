const axios = require("axios")

const sendSms = async (number: string | number, reference: string) => {
	try {
		const { data } = await axios.post(
			`https://api-sms.computicket.com/sms`,
			{
				number,
				message: `${reference} - Please use this reference to pay for your licence renewal at any Shoprite / Checkers Money Market`,
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
		sendSms(req.body.number, req.body.reference)
		res.status(200).end()
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}
