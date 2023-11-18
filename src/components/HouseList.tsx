import React, { useEffect } from 'react';
import { houseAPI } from '../services/HouseService';
import HouseItem from './HouseItem';
import {
  housesFetching,
  housesFetchingError,
  housesFetchingSuccess,
} from '../store/slices/HouseSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-toolkit';
import { fetchAllHousesAction } from '../store/slices/FavoritesSlice';

type Props = {};

const HouseList = (props: Props) => {
  const dispatch = useAppDispatch();

  const { data: houses, isLoading, error } = houseAPI.useFetchAllHousesQuery('');

  useEffect(() => {
    if (isLoading) {
      dispatch(housesFetching());
    } else if (houses) {
      dispatch(housesFetchingSuccess());
      dispatch(fetchAllHousesAction(houses));
    }
    if (error) {
      dispatch(housesFetchingError(error));
    }
  }, [dispatch, isLoading, houses, error]);

  return (
    houses && (
      <div>
        <h2 className="text-lg font-medium my-7">{houses?.length} nəticə tapıldı!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {houses &&
            houses.map((house: any) => (
              <HouseItem className="flex justify-center" key={house.id} {...house} />
            ))}
        </div>
      </div>
    )
  );
};

export default HouseList;
