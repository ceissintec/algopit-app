import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import App from './App';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const WiredApp = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

// eslint-disable-next-line no-undef
ReactDOM.render(<WiredApp />, document.getElementById('root'));
