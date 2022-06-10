import css from "styled-jsx/css"
import Colors from "./colors"

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
	h6,
	p {
		text-align: center;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "FredokaOne", cursive;
		font-weight: bold;
	}
	h1 {
		font-size: 55px;
	}
	h2 {
		font-size: 45px;
	}
	h3 {
		font-size: 24px;
	}
	h4 {
		font-size: 20px;
	}
	h5 {
		font-size: 16px;
	}
	h6 {
		font-size: 14px;
	}
	p {
		font-size: 16px;
	}
	.sub-copy {
		font-size: 25px;
	}
	.bold {
		font-weight: bold;
	}
	.underline {
		text-decoration: underline;
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
	a,
	button {
		text-decoration: none;
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}
	.react-tabs__tab-list,
	.react-tabs__tab {
		list-style-type: none;
	}
	.react-tabs__tab {
		cursor: pointer;
	}
	.react-tabs__tab:focus,
	.react-tabs__tab:active {
		outline: none;
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
`

export default GlobalStyles
