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
    min-width: 380px;
    background-color: ${({ theme }) => theme.background};

    * {
      font-family: 'Roboto', sans-serif;
    }
  }
`;
