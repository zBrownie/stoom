import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { HandlerTheme } from './styles/theme';

import 'antd/dist/antd.css';

function App() {
  return (
    <ThemeProvider theme={HandlerTheme("")}>
      <Routes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
