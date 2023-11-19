import React, { useEffect } from 'react';
import HouseList from '../components/HouseList';
import Footer from '../components/Footer';
import LoadingPage from './LoadingPage';
import { useAppDispatch, useAppSelector } from '../hooks/redux-toolkit';
import { fetchHouses } from '../store/thunks/HousesFetch';
import { IHouse } from '../models/IHouse';
import Search from '../components/Search';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  const isLoading = useAppSelector((store) => store.houseSlice.isLoading);
  const allHouses = useAppSelector((store) => store.houseSlice.allHouses);
  const favoriteHouses = useAppSelector((store) => store.houseSlice.favorites);

  const allHousesSelected = allHouses.map((house: IHouse) => {
    return favoriteHouses.some((el: IHouse) => el.id === house.id)
      ? { ...house, selected: true }
      : house;
  });

  return (
    <div className="">
      {isLoading && <LoadingPage />}
      <Search />
      <div className=" w-11/12 p-2 m-auto">
        <HouseList houses={allHousesSelected} />
      </div>
      {!isLoading && <Footer />}
    </div>
  );
};

export default Home;
