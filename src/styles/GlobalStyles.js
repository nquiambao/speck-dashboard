import { createGlobalStyle } from 'styled-components';
import './fonts.css'
import './reset.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background-color: #edf4f4;
    color: #16324f;
  }

  a {
    text-decoration: none;
    color: #2a628f;
    font-style: italic;
    transition: 0.4s ease;
  }

  a:after {
    background-color: #16324f;
    content: "";
    height: 1px;
    transform: scale(0);
    transform-origin: left;
    transition: 0.4s ease;
    transition-delay: 0.2s;
    width: 100%;
    display: block;
  }

  a:hover {
    color: #16324f;
    transition-delay: 0s;
  }

  a:hover:after {
    transform: scale(1);
    transition-delay: 0s;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border: 3px solid #9fc2e3;
    background-color: #9fc2e3;
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid #9fc2e3;
    background-color: #2a628f50;
  }
`

export {GlobalStyles}