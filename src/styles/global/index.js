import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root{
    height: 100%; 
  }

  #root{
    max-width: 330px;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colors.white1};
    display: flex;
    justify-content: center;
  }

  body, input, button {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;
