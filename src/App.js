import React from 'react';
import Navbar from './components/general/Navbar';
import Wrapper from './components/general/Wrapper';

const App = () => (
  <div style={{ minHeight: '100vh', position: 'relative' }}>
    <Navbar />
    <Wrapper />
  </div>
);

export default App;
