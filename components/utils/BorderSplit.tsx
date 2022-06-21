import React from "react"

import type { ReactNode } from "react"

import Colors from "../../styles/colors"

type Props = {
	leftComponent: ReactNode
	rightComponent: ReactNode
}

const BorderSplit = ({ leftComponent, rightComponent }: Props) => (
	<>
		<div className="border-split">
			<div className="box">{leftComponent}</div>
			<div className="box">{rightComponent}</div>
		</div>
		<style jsx>{`
			.border-split {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-start;
				gap: 0px;
			}
			.box {
				padding: 50px 0;
				flex: 1;
				width: 50%;
			}
			.box:first-of-type {
				border-right: 1px solid ${Colors.moneyMarket.grey};
				padding-right: 50px;
			}
			.box:last-of-type {
				padding-left: 50px;
			}
		`}</style>
	</>
)

export default BorderSplit
