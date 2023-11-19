import React from 'react';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTelegram,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-bg-home w-full m-auto max-h-xl h-2/3 md:h-96 mt-36 p-14 md:p-20 border-t-stone-300 border-t-2 text-[#d197ff]">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="">
          <div className="flex">
            <img className="w-16" src={logo} alt="" />
            <h1 className="header__logo-text font-semibold text-3xl bg-clip-text text-white mt-3 ml-3">
              evim
            </h1>
            <h1 className="header__logo-text font-semibold  text-3xl bg-clip-text text-regal-pink mt-3 ml-0">
              .az
            </h1>
          </div>
          <div className="md:w-5/12 md:mb-0 mb-4 w-full mt-4 text-sm text-[#d197ff]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, animi amet, quis,
            iure nobis autem natus quos porro eum aut deserunt.
          </div>
        </div>
        <div className="flex lg:w-cusw w-full justify-between items-center">
          <div className="flex flex-col items-center">
            <p className="text-base mr-10">Digər linklər</p>
            <ul>
              <li className="text-sm">Xidmət şəbəkəsi</li>
              <li className="text-sm">Əsas sıhifə</li>
              <li className="text-sm">Necə işləyir?</li>
              <li className="text-sm">Şərtlər və qaydalar</li>
              <li className="text-sm">Gizlilik siyasəti</li>
            </ul>
          </div>
          <div className="w-2/5 flex flex-col items-stretch ">
            <p className="mb-2">Bizi izləyin</p>
            <ul className="flex justify-between">
              <li>
                <FontAwesomeIcon icon={faFacebookF} style={{ color: '#d197ff' }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#d197ff' }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} style={{ color: '#d197ff' }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTelegram} style={{ color: '#d197ff' }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex text-xs mt-5 md:mt-16 justify-end">
        <p>© Copyright 2023, Bütün hüquqlar qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;
