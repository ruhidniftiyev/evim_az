import React from 'react';
import subway from '../assets/subway.png';
import walkImg from '../assets/walk.svg';
import floorImg from '../assets/floors.png';
import roomsImg from '../assets/rooms.svg';
import areaImg from '../assets/area.png';

type Props = {
  imageURL: string;
  price: number;
  floor: string;
  rooms: number;
  address: string;
  wayToSubway: number;
  area: number;
};

const HouseItem: React.FC<Props> = ({
  imageURL,
  price,
  floor,
  rooms,
  address,
  wayToSubway,
  area,
}) => {
  return (
    <div className="mt-6 mr-6 border-2 border-gray-350 rounded-xl">
      <div>
        <img className="rounded-t-xl max-h-60 w-full" src={imageURL} alt="" />
      </div>
      <div className="p-4">
        <div className="pb-4 font-medium">
          <p className="text-lg">{price} AZN</p>
        </div>
        <div className="flex h-7 relative">
          <img className="w-5 h-3 align-middle relative top-1.5 mr-2" src={subway} alt="" />
          <p className="align-middle">{address}</p>
          <div className="flex ml-3">
            <img className="w-4" src={walkImg} alt="" />
            <p className="text-gray-400 text-xs mt-1 relative top-px ml-1 font-medium">
              {wayToSubway} dəq
            </p>
          </div>
        </div>
        <div className="flex justify-between text-sm pt-4">
          <div className="flex">
            <img className="w-5 mr-2" src={floorImg} alt="" />
            <p>{floor}</p>
          </div>
          <div className="flex">
            <img className="w-5 mr-1" src={roomsImg} alt="" />
            <p>{rooms} otaq</p>
          </div>
          <div className="flex">
            <img className="w-5 mr-1" src={areaImg} alt="" />
            <p>{area}m&#178;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
