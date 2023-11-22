import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #0d1117;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  a{
    text-decoration: none;

  }
  html{
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #101822;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #394654;
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #4a5460;
  }
`