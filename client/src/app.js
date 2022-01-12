import React from 'react';
import Home from './pages/Home/index';

const App = () => {
  const Render = () => {
    const location = window.location.pathname;
    if (location == '/sobre') {
      return (
        <>
          <h1>teste</h1>
        </>
      );
    } else {
      return <Home />;
    }
  };
  return <>{Render()}</>;
};

export default App;
