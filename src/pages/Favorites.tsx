import React from 'react';
import { useAppSelector } from '../hooks/redux-toolkit';
import HouseList from '../components/HouseList';

type Props = {};

const Favorites = (props: Props) => {
  const favoriteHouses = useAppSelector((store) => store.houseSlice.favorites);

  console.log(favoriteHouses);

  return (
    <div>
      <HouseList houses={favoriteHouses} />
    </div>
  );
};

export default Favorites;
