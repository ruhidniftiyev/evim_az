import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';
import favoritesImg from '../assets/favorites.svg';
import langImg from '../assets/lang.svg';
import CustomSelect from './CustomSelect';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';

type Props = {};

const Header = (props: Props) => {
  const [language, setLanguage] = useState('AZ');

  return (
    <header className="bg-bg-home w-full h-24 flex justify-center p-3 sticky top-0 z-10">
      <div className="w-11/12 flex justify-between">
        <div className="flex">
          <img className="w-16 mt-2" src={logoImg} alt="" />
          <h1 className="header__logo-text font-semibold text-transparent text-3xl bg-clip-text text-white mt-5 ml-3">
            evim
          </h1>
          <h1 className="header__logo-text font-semibold text-transparent text-3xl bg-clip-text text-regal-orange mt-5 ml-0">
            .az
          </h1>
        </div>
        <div className="flex items-center w-1/3 justify-around text-lg text-white">
          <div className="">
            <div className="flex">
              <img className="w-7 h-7" src={langImg} alt="" />
              <p className="font-medium ml-2">{language}</p>
              <img className="ml-2 w-4" src={arrowDown} alt="" />
            </div>
            {/* <CustomSelect firstItem="Rus" secondItem="Azərbaycan" /> */}
          </div>
          <div className="flex cursor-pointer">
            <img className="w-6" src={favoritesImg} alt="" />
            <p className="font-medium ml-2">Seçilmişlər</p>
          </div>
          <div className="flex cursor-pointer">
            <p className="border-2 border-white rounded-full text-xl w-7 h-7 flex items-center  justify-center font-medium hover:bg-[#FFA500] hover:text-white ">
              +
            </p>
            <p className="ml-2 font-medium">Elan yerləşdir</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
