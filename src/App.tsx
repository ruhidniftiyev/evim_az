import React, { useEffect } from 'react';
import HouseList from './components/HouseList';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/houses')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <HouseList />
    </div>
  );
}

export default App;
