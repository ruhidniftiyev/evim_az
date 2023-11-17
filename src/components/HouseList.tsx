import React from 'react';
import { houseAPI } from '../services/HouseService';
import HouseItem from './HouseItem';

type Props = {};

const HouseList = (props: Props) => {
  const { data: houses } = houseAPI.useFetchAllHousesQuery('');

  return (
    <div className="grid grid-cols-4 gap-4">
      {houses && houses.map((house: any) => <HouseItem key={house.id} {...house} />)}
    </div>
  );
};

export default HouseList;
