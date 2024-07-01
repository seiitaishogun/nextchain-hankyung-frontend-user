import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';
import theme from '@/app/styles/theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	${normalize}
	html,
	body {
		font-size: 14px;
		font-family: ${theme.fontFamilies.default};
		color: ${props => props.theme.colors.black100};
		line-height: normal;
		-webkit-text-size-adjust: none;
	}

	#layout {
		width: 100%;
		min-width: ${props => props.theme.maxDeviceWidth};
	}

	img {
		display: block;
		max-width: 100%;
		vertical-align: top;
	}

	a {
		display: block;
		color: ${props => props.theme.colors.black100};
		text-decoration: none;
		cursor: pointer;
	}

	span {
		word-break: keep-all;
	}

	em {
		font-style: italic;
	}

	table tr td,
	table tr th {
		vertical-align: middle;
	}

	button {
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	fieldset {
		padding: 0;
	}

	.react-datepicker-popper {
		z-index: 99 !important;
	}
	
	.blind {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		border: none;
		overflow: hidden;
		clip: rect(0 0 0 0);
		color: transparent;
	}
`;

export default GlobalStyle;
