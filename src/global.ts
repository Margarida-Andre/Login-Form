import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;    
    }

  body {
    font-family: 'Poppins', sans-serif;
    
    &::-webkit-scrollbar{
        width: 0.4rem;
        background: linear-gradient(63.01deg, #000000 29.81%, #2d2c2c 100%);
    }

    &::-webkit-scrollbar-thumb{
        background: linear-gradient(63.01deg, #000000 29.81%, #2d2c2c 100%);
        border-radius: 1rem;
    }
  }

  button, a{
    cursor: pointer;
  }

`;
