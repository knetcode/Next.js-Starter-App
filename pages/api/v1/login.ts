import { csrf } from "../../../lib/csrf"

const handler = (req: any, res: any) => {
	try {
		if (req.body.password === "success") {
			res.json({ success: true, authToken: "qwerasdfzxcv" })
		} else {
			res.json({ success: false, message: "Invalid credentials" })
		}
	} catch (error) {
		console.error(error)
		res.json({ success: false, message: "Could not reach login server" })
	}
}

export default csrf(handler)
