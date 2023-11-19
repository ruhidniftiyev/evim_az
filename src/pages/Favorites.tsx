import React from 'react';
import { useAppSelector } from '../hooks/redux-toolkit';
import HouseList from '../components/HouseList';

type Props = {};

const Favorites = (props: Props) => {
  const favoriteHouses = useAppSelector((store) => store.houseSlice.favorites);

  console.log(favoriteHouses);

  return (
    <div className="w-11/12 h-95/100 p-2 m-auto">
      <div className="w-full flex justify-center my-5">
        <h1 className="text-3xl font-semibold ">Seçilmişlər</h1>
      </div>
      {favoriteHouses?.length > 0 ? (
        <HouseList houses={favoriteHouses} />
      ) : (
        <div className="w-11/12 m-auto h-5/6 flex items-center justify-center">
          <p>Bəyəndiyiniz evləri seçilmişlər siyahısına əlavə edin!</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
