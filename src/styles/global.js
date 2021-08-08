import {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body,html,#root{
      width: 100%;
      height: 100%;
      background: #eee;
  }

  body,input,button{
      font-size: 100%;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
  }
`;
export default GlobalStyle