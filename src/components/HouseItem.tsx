import React from 'react';
import subway from '../assets/subway.png';
import walkImg from '../assets/walk.svg';
import floorImg from '../assets/floors.png';
import roomsImg from '../assets/rooms.svg';
import areaImg from '../assets/area.png';
import { useAppDispatch } from '../hooks/redux-toolkit';
import { addToFavoritesAction } from '../store/slices/HouseSlice';
import { IHouse } from '../models/IHouse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HouseItem: React.FC<IHouse> = ({
  id,
  imageURL,
  price,
  floor,
  rooms,
  address,
  nearTheSubway,
  wayToSubway,
  area,
  selected,
}) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const priceFormaterFunction = (price: number): any => {
    let formatedPrice = '';
    for (let i = 1; i <= String(price).length; i++) {
      const j = String(price).length - i;
      formatedPrice = (!j || i % 3 ? String(price)[j] : ' ' + String(price)[j]) + formatedPrice;
    }
    return formatedPrice;
  };

  const addToFavoritesFunc = (id: string | number): void => {
    dispatch(addToFavoritesAction(id));
  };

  return (
    <div className="border-2 border-gray-350 rounded-xl cursor-pointer sm:max-w-xs md:max-w-sm lg:max-w-md">
      <div className="relative">
        <img
          className="rounded-t-xl w-full sm:h-48 md:h-64 lg:h-72 object-cover"
          src={imageURL}
          alt=""
        />
        <div
          className="bg-slate-100 w-9 h-9 rounded-full flex justify-center items-center absolute top-3 right-3"
          onClick={() => addToFavoritesFunc(id)}>
          {selected ? (
            <FontAwesomeIcon icon={solidHeart} size="lg" style={{ color: '#520590' }} />
          ) : (
            <FontAwesomeIcon icon={regularHeart} size="lg" style={{ color: '#000000' }} />
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="pb-4 font-semibold">
          <p className="text-lg">{priceFormaterFunction(price)} AZN</p>
        </div>
        <div className="flex h-7 relative">
          {nearTheSubway ? (
            <>
              <img className="w-6 h-3 align-middle absolute top-1.5 mr-2" src={subway} alt="" />
              <p className="align-middle ml-8  sm:text-sm lg:text-base">{address}</p>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="mt-1 w-6"
                icon={faMapMarkerAlt}
                style={{
                  color: '#000000',
                }}
              />
              <p className="align-middle ml-2 sm:text-sm lg:text-base">{address}</p>
            </>
          )}
          {nearTheSubway && (
            <div className="flex ml-3">
              <img className="w-4" src={walkImg} alt="" />
              <p className="text-gray-400 text-xs mt-1 relative top-px ml-1 font-medium">
                {wayToSubway} dəq
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between text-sm pt-4">
          <div className="flex">
            <img className="w-5 mr-2" src={floorImg} alt="" />
            <p>{floor}</p>
          </div>
          <div className="flex">
            <img className="w-5 mr-1" src={roomsImg} alt="" />
            <p>
              {rooms}{' '}
              {rooms === 1
                ? t('items.rooms1')
                : rooms === 2 || rooms === 3 || rooms === 4
                ? t('items.rooms234')
                : t('items.rooms5')}
            </p>
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
