import React from 'react';
import HouseList from '../components/HouseList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppSelector } from '../hooks/redux-toolkit';
import LoadingPage from './LoadingPage';

type Props = {};

const Home = (props: Props) => {
  const isLoading = useAppSelector((store) => store.houseSlice.isLoading);

  return (
    <div className="">
      {isLoading && <LoadingPage />}
      {!isLoading && <Header />}
      <div className=" w-11/12 p-2 m-auto">
        <HouseList />
      </div>
      {!isLoading && <Footer />}
    </div>
  );
};

export default Home;
