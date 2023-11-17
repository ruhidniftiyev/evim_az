import React, { useEffect } from 'react';
import HouseList from './components/HouseList';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/houses')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="w-11/12 m-auto p-3">
      <HouseList />
    </div>
  );
}

export default App;
