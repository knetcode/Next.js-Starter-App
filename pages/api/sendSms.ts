const sendSms = async (number: string | number, reference: string) => {
	try {
		const res = await fetch("https://api-sms.computicket.com/sms", {
			headers: {
				"Content-type": "application/json",
				"Cache-control": "no-cache",
			},
			method: "POST",
			body: JSON.stringify({
				number,
				message: `${reference} - Please use this reference to pay for your licence renewal at any Shoprite / Checkers Money Market`,
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
		sendSms(req.body.number, req.body.reference)
		res.status(200).end()
	} catch (error) {
		console.error(error)
		res.status(500).end()
	}
}
