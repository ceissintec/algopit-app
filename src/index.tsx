import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './theme';
import Reset from './components/general/Reset';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const WiredApp: React.FC = () => (
  <ApolloProvider client={client}>
    <Reset />
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<WiredApp />, document.getElementById('root'));
