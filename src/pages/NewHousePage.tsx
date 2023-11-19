import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomBinarySelect from '../components/CustomBinarySelect';
import { v4 as uuid4 } from 'uuid';
import { houseAPI } from '../services/HouseService';
import { IHouse } from '../models/IHouse';

type Props = {};

const NewHousePage = (props: Props) => {
  const [ownerName, setOwnerName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [price, setPrice] = useState<number | ''>('');
  const [floor, setFloor] = useState<string>('');
  const [rooms, setRooms] = useState<number | ''>('');
  const [area, setArea] = useState<number | string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [isSell, setIsSell] = useState<boolean>(true);
  const [nearTheSubway, setNearTheSubway] = useState<boolean>(true);
  const [wayToSubway, setWayToSubway] = useState<number | ''>('');

  const changeOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnerName(e.target.value);
  };

  const changeArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value);
  };

  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.valueAsNumber || '');
  };

  const changeFloor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFloor(e.target.value);
  };

  const changeRoomsQuality = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRooms(e.target.valueAsNumber || '');
  };

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const changeCategoryClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.innerText === 'Kirayə') {
      setIsSell(false);
    } else setIsSell(true);
  };

  const changeSubwayStatus = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.innerText === 'Xeyr') {
      setNearTheSubway(false);
    } else setNearTheSubway(true);
  };

  const changeWayToSubway = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWayToSubway(e.target.valueAsNumber || '');
  };

  const addZero = (timeNum: number) => {
    return timeNum < 10 ? `0${timeNum}` : timeNum;
  };

  const getTime = () => {
    const date = new Date();
    const time = `${addZero(date.getDay())}-${addZero(
      date.getMonth(),
    )}-${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
    return time;
  };

  const [createHouse, {}] = houseAPI.useCreateHouseMutation();

  const createNewHouse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createHouse({
      id: uuid4(),
      ownerName,
      imageURL,
      floor,
      price,
      address,
      rooms,
      nearTheSubway,
      wayToSubway,
      area,
      date: getTime(),
      sell: isSell,
    } as IHouse);
  };

  return (
    <div className="w-11/12 p-2 m-auto flex justify-center items-center">
      <div>
        <div>
          <h1 className="font-extrabold text-3xl my-5">Yeni elan yarat</h1>
        </div>
        <div>
          <form className="w-full" onSubmit={(e) => createNewHouse(e)}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-3 gap-x-20">
              <CustomInput
                type="text"
                value={ownerName}
                label="Mülkiyyətçinin adı"
                placeholder="Mülkiyyətçinin adı"
                onChange={(e) => changeOwnerName(e)}
              />
              <CustomInput
                type="text"
                value={address}
                label="Metro/Qəsəbə"
                placeholder="Metro/Qəsəbə"
                onChange={(e) => changeAddress(e)}
              />
              <CustomInput
                type="number"
                value={price}
                label="Qiymət"
                placeholder="Qiymət"
                onChange={(e) => changePrice(e)}
              />
              <CustomInput
                type="text"
                value={imageURL}
                label="Şəkil"
                placeholder="Şəkil"
                onChange={(e) => changeImage(e)}
              />
              <CustomInput
                type="text"
                value={floor}
                label="Mərtəbə"
                placeholder="Mərtəbə"
                onChange={(e) => changeFloor(e)}
              />
              <CustomInput
                type="number"
                value={area}
                label="Sahə"
                placeholder="Sahə"
                onChange={(e) => changeArea(e)}
              />
              <CustomInput
                type="number"
                value={rooms}
                label="Otaq sayı"
                placeholder="Otaq sayı"
                onChange={(e) => changeRoomsQuality(e)}
              />
              <CustomBinarySelect
                label="Kateqoriya"
                isSelected={isSell}
                onClick={(e) => changeCategoryClick(e)}
                firstOption="Satılır"
                secondOption="Kirayə"
              />
              <CustomBinarySelect
                label="Ətrafda metro"
                isSelected={nearTheSubway}
                onClick={(e) => changeSubwayStatus(e)}
                firstOption="Bəli"
                secondOption="Xeyr"
              />
              <CustomInput
                type="number"
                disabled={!nearTheSubway}
                value={wayToSubway}
                label="Metrodan aralığı"
                placeholder="Metrodan aralığı"
                onChange={(e) => changeWayToSubway(e)}
              />
            </div>
            <div className="w-full flex justify-center md:justify-end mt-5">
              <button className="bg-bg-home  text-white flex justify-center items-center border-2 border-[#e3e7eb] h-12 w-52 rounded-3xl p-4 text-md">
                Əlavə etmək
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewHousePage;
