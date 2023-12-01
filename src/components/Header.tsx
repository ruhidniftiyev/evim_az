import React, { useState } from 'react';
import logoImg from '../assets/logo.svg';
import favoritesImg from '../assets/favorites.svg';
import langImg from '../assets/lang.svg';
import CustomSelect from './CustomSelect';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';
import { ADD_HOUSE_ROUTE, AUTH_ROUTE, FAVORITES_ROUTE, HOME_ROUTE } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

type Props = {};

const Header = (props: Props) => {
  const [language, setLanguage] = useState<string>('AZ');

  const { t } = useTranslation();

  const changerLanguage = (current: string) => {
    return current === 'AZ' ? 'RU' : 'AZ';
  };

  return (
    <header className="bg-bg-home w-full h-24 flex justify-center p-3 sticky top-0 z-10">
      <div className="w-11/12 flex flex-col sm:flex-row xl:text-xs justify-between items-center">
        <Link to={HOME_ROUTE}>
          <div className="flex items-center cursor-pointer">
            <img className="w-10 mt-2 sm:w-16" src={logoImg} alt="" />
            <h1 className="header__logo-text font-semibold text-2xl sm:mt-1 sm:text-3xl bg-clip-text text-white mt-2 ml-3">
              evim
            </h1>
            <h1 className="header__logo-text font-semibold text-2xl sm:mt-1 sm:text-3xl bg-clip-text text-regal-pink mt-2 ml-0">
              .az
            </h1>
          </div>
        </Link>
        <div className="flex items-center w-11/12 sm:h-1/3 xl:w-2/3 justify-around text-xs text-white sm:text-sm lg:text-base xl:text-base">
          <div className="flex cursor-pointer hover:bg-[#e5e7eb3b] h-10 items-center w-28 rounded-3xl justify-center">
            <div
              onClick={() => i18n.changeLanguage(changerLanguage(t('buttons.lang')))}
              className="flex">
              <img className="w-7 h-7" src={langImg} alt="" />
              <p className="font-bold ml-2 flex items-center">AZ</p>
              <img className="ml-2 w-4" src={arrowDown} alt="" />
            </div>
            {/* <CustomSelect firstItem="Rus" secondItem="Azərbaycan" /> */}
          </div>
          <Link to={FAVORITES_ROUTE}>
            <div className="flex cursor-pointer hover:bg-[#e5e7eb3b] h-10 items-center w-40 rounded-3xl justify-center">
              <img className="w-6" src={favoritesImg} alt="" />
              <p className="font-bold ml-2 flex items-center">{t('text.favorites')}</p>
            </div>
          </Link>
          <Link to={ADD_HOUSE_ROUTE}>
            <div className="flex cursor-pointer hover:bg-[#e5e7eb3b] h-10 items-center w-40 rounded-3xl justify-center">
              <p className="border-2 border-white rounded-full text-xl w-7 h-7 flex items-center  justify-center font-medium ">
                +
              </p>
              <p className="ml-2 font-bold flex items-center">{t('text.add')}</p>
            </div>
          </Link>
          <Link to={AUTH_ROUTE}>
            <div className="flex cursor-pointer hover:bg-[#e5e7eb3b] h-10 items-center w-40 rounded-3xl justify-center">
              <p className="ml-2 font-bold flex items-center">{t('text.auth')}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
