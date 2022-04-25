const axios = require("axios")

export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_WINDOW_WIDTH = "SET_WINDOW_WIDTH"

export const setIsLoading = (loading: boolean, text: string) => ({
	type: SET_IS_LOADING,
	loading,
	text,
})

export const setWindowWidth = (windowWidth: number) => ({
	type: SET_WINDOW_WIDTH,
	windowWidth,
})

export const isDisabled = (...inputs: any) => {
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

export const sendToElastic = async (body: any) => {
	try {
		const { data } = await axios.post(
			`${process.env.elasticUrl}/_doc`,
			{
				...body,
				createdDate: new Date(),
			},
			{
				headers: {
					"Content-type": "application/json",
					"Cache-control": "no-cache",
				},
				timeout: process.env.fetchTimeout,
			}
		)
		console.log(data)
		return data
	} catch (error) {
		console.error(error)
		return error
	}
}

export const scroll = (ref: any) => ref.current.scrollIntoView({ block: "end", inline: "nearest" })

export const generateToday = () => {
	const date = new Date()
	const y = date.getFullYear()
	const m = date.getMonth() + 1
	const d = date.getDate()
	return `${y}/${m > 10 ? m : `0${m}`}/${d > 10 ? d : `0${d}`}`
}

export const dateFormatter = (date) => {
	const fullDate = new Date(date)
	const D = fullDate.getDate()
	const M = fullDate.getMonth() + 1
	const Y = fullDate.getFullYear()
	const h = fullDate.getUTCHours()
	const m = fullDate.getUTCMinutes()

	return `${Y < 10 ? `0${Y}` : Y}/${M < 10 ? `0${M}` : M}/${D < 10 ? `0${D}` : D} ${h < 10 ? `0${h}` : h}:${
		m < 10 ? `0${m}` : m
	}`
}
