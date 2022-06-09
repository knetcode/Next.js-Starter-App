import { csrf } from "../../lib/csrf"

const handler = async (req: any, res: any) => {
	console.log(req.body)
	try {
		res.status(200).json({ success: true, message: "CSRF worked" })
	} catch (error) {
		console.error(error)
		res.status(400).json({ success: false, message: "CSRF failed" })
	}
}

export default csrf(handler)
