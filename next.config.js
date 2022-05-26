const apiUrl = ""
const elasticUrl = ""

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["content.computicket.com", "cms.computicket.com"],
	},
	env: {
		apiUrl,
		elasticUrl,
	},
	experimental: { images: { layoutRaw: true } },

	async headers() {
		return [
			{
				source: "/fonts",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		]
	},
}
