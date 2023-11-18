import React, { useEffect } from 'react';
import { houseAPI } from '../services/HouseService';
import HouseItem from './HouseItem';
import { housesFetching, housesFetchingSuccess } from '../store/slices/HouseSlice';
import { useAppDispatch } from '../hooks/redux-toolkit';

type Props = {};

const HouseList = (props: Props) => {
  const dispatch = useAppDispatch();

  const { data: houses, isLoading } = houseAPI.useFetchAllHousesQuery('');

  useEffect(() => {
    if (isLoading) {
      dispatch(housesFetching());
    } else if (houses) {
      dispatch(housesFetchingSuccess());
    }
  }, [dispatch, isLoading, houses]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {houses &&
        houses.map((house: any) => (
          <HouseItem className="flex justify-center" key={house.id} {...house} />
        ))}
    </div>
  );
};

export default HouseList;
