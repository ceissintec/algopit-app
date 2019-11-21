import React from 'react';
import { Main } from '@aragon/ui';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/general/Navbar';
import Home from './pages/Home';

import history from './lib/history';

const App = () => (
  <>
    <Navbar />
    <Main>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Main>
  </>
);

export default App;
