import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    background: teal;
    }
    html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    }
    *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    }
    body {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    line-height: 1.65;
    color: #333;
    }

    p {margin-bottom: 1.15rem;}

    h1, h2, h3, h4, h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Karla', sans-serif;
    font-weight: 500;
    line-height: 1.15;
    }

    h1 {
    margin-top: 0;
    font-size: 2.488em;
    }

    h2 {font-size: 2.074em;}

    h3 {font-size: 1.728em;}

    h4 {font-size: 1.44em;}

    h5 {font-size: 1.2em;}

    small, .text_small {font-size: 0.833em;}
`;
 
export default GlobalStyle;