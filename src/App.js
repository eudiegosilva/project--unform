import React from 'react';

import { Home } from 'pages';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
