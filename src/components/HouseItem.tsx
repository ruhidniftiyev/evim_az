import React from 'react';
import subway from '../assets/subway.png';

type Props = { imageURL: string; price: number; address: string };

const HouseItem: React.FC<Props> = ({ imageURL, price, address }) => {
  return (
    <div className="w-1/5 h-auto border-2 border-gray-350 rounded-xl ">
      <div>
        <img className="rounded-t-xl" src={imageURL} alt="" />
      </div>
      <div className="p-4">
        <div>
          <p>{price} AZN</p>
        </div>
        <div className="flex h-7 relative">
          <img className="w-6 h-3 align-middle relative top-1.5 mr-2" src={subway} alt="" />
          <p className="align-middle">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
