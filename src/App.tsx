import React from 'react';
import Home from './pages/Home';
import { useAppSelector } from './hooks/redux-toolkit';
import LoadingPage from './pages/LoadingPage';
import AppRouter from './components/AppRouter';

function App() {
  // const isLoading = useAppSelector((store) => store.houseSlice.isLoading);

  return (
    // <div className="w-11/12 m-auto p-3">
    <div>
      {/* {isLoading && <LoadingPage />} */}
      <AppRouter />
    </div>
  );
}

export default App;
