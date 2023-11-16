import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/houses')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <div className="">123</div>
      <img src="http://housy.az/images/medium_quality/d9568d3f9c204b42bf1064c48e87223e" alt="" />
    </div>
  );
}

export default App;
