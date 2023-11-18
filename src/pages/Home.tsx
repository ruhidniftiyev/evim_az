import React from 'react';
import HouseList from '../components/HouseList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingPage from './LoadingPage';
import { useAppSelector } from '../hooks/redux-toolkit';

type Props = {};

const Home = (props: Props) => {
  const isLoading = useAppSelector((store) => store.houseSlice.isLoading);

  return (
    <div className="">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header />
          <div className="w-11/12 p-2 m-auto">
            <HouseList />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
