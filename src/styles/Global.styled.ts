import {createGlobalStyle} from "styled-components";
import {theme} from './/Theme'

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(24, 24, 36);
  }

  body {
    //background-color: rgb(24, 24, 36);
    margin: 0;
    font-family: "Poppins", "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font}
    line-height: 1.2;
  }

  section {
    padding: 80px 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
  h3{
    font-size: 24px;
    font-weight: 600;
  }
  p{
    font-size: 18px;
    font-weight: 500;
  }
`

