import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
    color: ${(props) => props.theme.fonts.color.primary};
    background: ${props => props.theme.background.primary};
  }

  h1, h2, h3, h4, h5, h6, p, a, li, span, button {
    transition: color 200ms ease-in-out;
  }

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
`
