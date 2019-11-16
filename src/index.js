import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import Reset from './components/general/Reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html,
  *::before,
  *::after,
  body {
    box-sizing:border-box;
    font-family: 'Poppins', Helvetica, -apple-system, sans-serif;
    height: 100%;
    
  }
  body {
    min-height: 100vh;
  }
`;

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const WiredApp = () => (
  <ApolloProvider client={client}>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<WiredApp />, document.getElementById('root'));
