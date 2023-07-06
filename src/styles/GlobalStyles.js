import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,*::after,*::before{
    box-sizing: border-box;
}

img{
    
	max-width: 100%;
	display: block;
}

ul {

	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;

}

a {
	text-decoration: none;
	color: inherit;
}

body {
	
	max-width: 100%; 
	margin: 0 auto;
    padding: 0;
    background: #FF7979;
    background-image: url("/images/bg-intro-desktop.png");
 
	}
`;

export { GlobalStyles };