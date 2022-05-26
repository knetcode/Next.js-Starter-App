import css from "styled-jsx/css"
import Colors from "./colors"
import Theme from "./themes"

const GlobalStyles = css.global`
	/* RESETS */
	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	a,
	li,
	ul,
	ol,
	span,
	p,
	div,
	section,
	main,
	img,
	figure,
	caption,
	button {
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	body {
		font-family: "Poppins", sans-serif;
		color: ${Colors.text.dark};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "FredokaOne", cursive;
		font-weight: normal;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		text-align: center;
	}

	h2 {
		font-size: 24px;
	}
	h3 {
		font-size: 20px;
	}
	h4 {
		font-size: 15px;
	}

	h5 {
	}

	p {
		font-size: 15px;
	}

	.sub-copy {
	}

	p,
	a,
	span,
	button,
	ul,
	ol,
	li {
		font-family: "Poppins", sans-serif;
		color: inherit;
		font-weight: normal;
	}

	li {
		margin: 10px 0;
		list-style-type: disc;
		text-align: left;
	}

	p,
	ul {
		margin: 20px 0;
	}

	a,
	button {
		text-decoration: none;
		display: block;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	.react-tabs {
		width: 100%;
	}

	.react-tabs__tab-list {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		border-radius: ${Theme.borderRadius};
		width: 80%;
		margin: 20px auto;
		background-color: ${Colors.muted[300]};
		max-width: 360px;
		list-style-type: none;
	}

	.react-tabs__tab {
		padding: 10px 30px;
		background-color: ${Colors.muted[300]};
		color: ${Colors.muted[600]};
		width: 100%;
		text-align: center;
		cursor: pointer;
		white-space: nowrap;
		list-style-type: none;
		margin: 0;
	}

	.react-tabs__tab-panel {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.react-tabs__tab:first-of-type {
		border-top-left-radius: ${Theme.borderRadius};
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: ${Theme.borderRadius};
	}

	.react-tabs__tab:last-of-type {
		border-top-left-radius: 0px;
		border-top-right-radius: ${Theme.borderRadius};
		border-bottom-right-radius: ${Theme.borderRadius};
		border-bottom-left-radius: 0px;
	}

	.react-tabs__tab--selected {
		background-color: ${Colors.moneyMarket.purple};
		color: ${Colors.white};
		font-weight: bold;
	}

	.swiper-button-next::after {
		content: "";
		font-size: 100px;
		color: ${Colors.text.light};
	}
	.swiper-button-prev::after {
		content: "";
		font-size: 100px;
		color: ${Colors.text.light};
	}

	@media (min-width: ${process.env.mobileBreakpoint}) {
		h2 {
			font-size: 35px;
		}
		h4 {
			font-size: 20px;
		}
		.sub-copy {
			font-size: 18px;
		}
	}

	@media (min-width: ${process.env.tabletBreakpoint}) {
		h2 {
			font-size: 40px;
		}
		h4 {
			font-size: 25px;
		}
		.sub-copy {
			font-size: 20px;
		}
	}
`

export default GlobalStyles
