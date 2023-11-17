import React from 'react';
import logoImg from '../assets/logo.svg';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-slate-200 h-24 flex justify-center p-3 sticky top-0 z-10">
      <div className="w-11/12">
        <div className="flex j">
          <img className="w-16 mt-2" src={logoImg} alt="" />
          <h1 className="header__logo-text font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-regal-blue to-regal-pink mt-5 ml-3">
            evim.az
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
