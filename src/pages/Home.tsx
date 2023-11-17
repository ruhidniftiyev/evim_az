import React from 'react';
import HouseList from '../components/HouseList';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="">
      <Header />
      <div className=" w-11/12 p-2 m-auto">
        <HouseList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
