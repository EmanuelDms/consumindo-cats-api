import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export default createGlobalStyle`
:root{
    --purple: #8A2BE2;
    --white: #FFF;
    --black: #000;
    --gray: #DFDFDF;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    min-height: 100%;
}

body{ 
    background: var(--white);
    font-size: 14px;
    -webkit-font-smothing: antialiased !important;
}

body, input, button{
    color: var(--black);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
}

h1{
    color: var(--purple);
}

.clear{
  clear: both;
}
`;