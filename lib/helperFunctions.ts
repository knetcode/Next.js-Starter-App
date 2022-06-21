export const scroll = (ref: any) => ref.current.scrollIntoView({ block: "end", inline: "nearest" })

export const scrollToTop = () => window.scrollTo(0, 0)

export const isDone = (...inputs: any) => {
	const comparator = (val: any) => {
		if (typeof val === "string" && val !== "" && val !== "NotFound") {
			return true
		} else if (typeof val === "boolean" && val === true) {
			return true
		} else {
			return false
		}
	}

	if (inputs.every((val: any) => comparator(val))) {
		return false
	} else {
		return true
	}
}
