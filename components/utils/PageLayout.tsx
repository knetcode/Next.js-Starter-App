import React, { CSSProperties, ReactNode } from "react"

type Props = {
	children: ReactNode
	styles?: CSSProperties
} & typeof defaultProps

const defaultProps = {
	styles: {},
}

const PageLayout = ({ children, styles }: Props) => {
	return (
		<>
			<div className="page-layout" style={styles}>
				{children}
			</div>
			<style jsx>{`
				.page-layout {
					width: 100%;
				}
			`}</style>
		</>
	)
}

PageLayout.defaultProps = defaultProps

export default PageLayout
