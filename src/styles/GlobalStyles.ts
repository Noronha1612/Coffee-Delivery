import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    line-height: 130%;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }

  
  body {
    background-color: ${({ theme }) => theme.background};
    padding: 0 2rem;

    * {
      font-family: 'Roboto', sans-serif;
    }
  }
`;
