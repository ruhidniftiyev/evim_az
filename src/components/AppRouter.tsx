import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes/routes';
import Home from '../pages/Home';
import Header from './Header';
import { useAppSelector } from '../hooks/redux-toolkit';

type Props = {};

const AppRouter = (props: Props) => {
  const isLoading = useAppSelector((store) => store.houseSlice.isLoading);

  return (
    <>
      {!isLoading && <Header />}
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
        <Route path="*" Component={Home} />
      </Routes>
    </>
  );
};

export default AppRouter;
