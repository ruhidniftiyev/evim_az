import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/houses')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    // <div className="w-11/12 m-auto p-3">
    <div>
      <Home />
    </div>
  );
}

export default App;
