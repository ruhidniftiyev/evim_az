import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <div className="">123</div>
    </div>
  );
}

export default App;
