import React from 'react';
import { FC } from 'react';
import HouseItem from './HouseItem';
import { useTranslation } from 'react-i18next';

type HouseListProps = {
  houses: any;
};

const HouseList: FC<HouseListProps> = ({ houses }) => {
  const { t } = useTranslation();

  return (
    houses && (
      <div>
        {houses?.length > 0 && (
          <h2 className="text-xl font-semibold my-7">
            {houses?.length} {t('text.resultText')}
          </h2>
        )}
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
