import React from 'react';
import { useAppSelector } from '../hooks/redux-toolkit';

type Props = {};

const Favorites = (props: Props) => {
  const favoriteHouses = useAppSelector((store) => store.favoritesSlice.favorites);

  console.log(favoriteHouses);

  return <div>Favorites</div>;
};

export default Favorites;
