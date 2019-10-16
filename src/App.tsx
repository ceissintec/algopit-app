import React from 'react';
import Navbar from './components/general/Navbar';
import Wrapper from './components/general/Wrapper';
const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <Wrapper />
    </div>
  );
};

export default App;
