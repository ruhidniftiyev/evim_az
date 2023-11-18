import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes/routes';
import Home from '../pages/Home';

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" Component={Home} />
    </Routes>
  );
};

export default AppRouter;
