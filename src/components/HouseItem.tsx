import React from 'react';
import subway from '../assets/subway.png';

type Props = { imageURL: string; price: number; floor: string; address: string; wayToSubway: number; };

const HouseItem: React.FC<Props> = ({ imageURL, price, address, wayToSubway }) => {
  return (
    <div className="mt-6 mr-6 border-2 border-gray-350 rounded-xl">
      <div>
        <img className="rounded-t-xl max-h-64 w-full" src={imageURL} alt="" />
      </div>
      <div className="p-4">
        <div>
          <p>{price} AZN</p>
        </div>
        <div className="flex h-7 relative">
          <img className="w-6 h-3 align-middle relative top-1.5 mr-2" src={subway} alt="" />
          <p className="align-middle">{address}</p>
          <p className="text-gray-400">{wayToSubway} dəq</p>
        </div>
        <div>
          <div>
            <p>{floor}</p>
          </div>
          <div>
            <p>{rooms}</p>
          </div>
          <div>
            <p>{area}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
