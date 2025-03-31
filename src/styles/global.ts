import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: #020818;
    color: #f3f4f6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    transition: all 0.2s ease-in-out;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #1e293b;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #64748b;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }

  /* Smooth transitions */
  section {
    transition: all 0.3s ease-in-out;
  }
`;
