import React from 'react';
import logo from '../assets/logo.svg';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-bg-home w-full max-h-xl h-96 mt-36 p-20 border-t-stone-300 border-t-2">
      <div className="w-11/12 flex">
        <div className="">
          <div className="flex">
            <img className="w-16" src={logo} alt="" />
            <h1 className="header__logo-text font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-regal-blue to-regal-pink mt-5 ml-3">
              evim.az
            </h1>
          </div>
          <div className="w-5/12 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, animi amet, quis,
            iure nobis autem natus quos porro eum aut deserunt.
          </div>
        </div>
        <div className="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
