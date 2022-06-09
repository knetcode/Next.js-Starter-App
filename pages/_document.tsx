import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { nanoid } from "nanoid"

class CustomDocument extends Document {
	static async getInitialProps(ctx: any) {
		const nonce = nanoid()
		const docProps = await ctx.defaultGetInitialProps(ctx, { nonce })

		let contentSecurityPolicy = ""
		if (process.env.NODE_ENV === "production") {
			contentSecurityPolicy += `base-uri 'self';`
			contentSecurityPolicy += `connect-src 'self' https://maps.googleapis.com;`
			contentSecurityPolicy += `child-src 'self';`
			contentSecurityPolicy += `default-src 'self';`
			contentSecurityPolicy += `form-action 'self';`
			contentSecurityPolicy += `font-src 'self' data: ;`
			contentSecurityPolicy += `frame-ancestors 'self';`
			contentSecurityPolicy += `frame-src 'self';`
			contentSecurityPolicy += `img-src 'self' data: blob: https://maps.googleapis.com https://icon-library.com https://maps.gstatic.com;`
			contentSecurityPolicy += `manifest-src 'self';`
			contentSecurityPolicy += `media-src 'self';`
			contentSecurityPolicy += `object-src 'self';`
			contentSecurityPolicy += `script-src 'self' https://maps.googleapis.com;`
			contentSecurityPolicy += `style-src 'self' 'nonce-${nonce}';`
			contentSecurityPolicy += `worker-src 'self';`
			contentSecurityPolicy += `block-all-mixed-content ;`
		} else {
			contentSecurityPolicy += `connect-src 'self' 'unsafe-inline' https://maps.googleapis.com;`
			contentSecurityPolicy += `default-src 'self' 'unsafe-inline';`
			contentSecurityPolicy += `form-action 'self';`
			contentSecurityPolicy += `font-src 'self' 'unsafe-inline' https://fonts.gstatic.com data:;`
			contentSecurityPolicy += `frame-src 'unsafe-inline';`
			contentSecurityPolicy += `img-src 'self' 'unsafe-inline' data: blob: https://maps.googleapis.com https://icon-library.com https://maps.gstatic.com;`
			contentSecurityPolicy += `manifest-src 'unsafe-inline';`
			contentSecurityPolicy += `media-src 'self' 'unsafe-inline';`
			contentSecurityPolicy += `object-src 'unsafe-inline';`
			contentSecurityPolicy += `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;`
			contentSecurityPolicy += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;`
			contentSecurityPolicy += `worker-src 'unsafe-inline';`
		}

		ctx.res.setHeader("Content-Security-Policy", contentSecurityPolicy)
		ctx.res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
		return { ...docProps, nonce }
	}

	render() {
		return (
			<Html>
				<Head>
					{/* @ts-ignore */}
					<meta property="csp-nonce" content={this.props.nonce} />
					<meta charSet="UTF-8" />
					<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
					<html lang="en" />
					<meta name="description" content="desc" />
					<meta name="keywords" content="search, terms" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument
