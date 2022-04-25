const apiUrl = ""
const elasticUrl = "https://prod-elk.computicket.com/renewal-ocr"
const fetchTimeout = 20000
const mobileBreakpoint = "610px"
const tabletBreakpoint = "1024px"

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["content.computicket.com", "cms.computicket.com"],
	},
	env: {
		apiUrl,
		elasticUrl,
		fetchTimeout,
		mobileBreakpoint,
		tabletBreakpoint,
	},
}
