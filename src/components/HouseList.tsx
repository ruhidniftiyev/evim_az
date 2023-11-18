import React, { useEffect } from 'react';
import { houseAPI } from '../services/HouseService';
import HouseItem from './HouseItem';
import { housesFetching, housesFetchingSuccess } from '../store/slices/HouseSlice';
import { useAppDispatch } from '../hooks/redux-toolkit';

type Props = {};

const HouseList = (props: Props) => {
  const dispatch = useAppDispatch();

  const { data: houses, isLoading } = houseAPI.useFetchAllHousesQuery('');

  console.log(isLoading);

  useEffect(() => {
    if (isLoading) {
      dispatch(housesFetching());
    } else if (houses) {
      dispatch(housesFetchingSuccess());
    }
  }, [dispatch, isLoading, houses]);

  // useEffect(() => {
  //   if (houses) {
  //     dispatch(housesFetchingSuccess());
  //     console.log(12345);
  //   } else {
  //     console.log('Fetch');
  //     dispatch(housesFetching());
  //   }
  // }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {houses && houses.map((house: any) => <HouseItem key={house.id} {...house} />)}
    </div>
  );
};

export default HouseList;
