import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

type Props = {};

const Search = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[url('/src/assets/background.jpg')] bg-top  h-100 bg-no-repeat w-full bg-cover rounded-b-8xl">
      <div className="bg-gradient-to-t from-[#4e008ecc] to-[#4e008ecc] w-full h-full rounded-b-8xl flex items-center justify-center">
        <div className="w-11/12 p-2 m-auto justify-around flex items-center">
          <div>
            <h2 className="font-extrabold text-5xl text-white mb-2">{t('text.welcomeTextUp')}</h2>
            <h2 className="font-extrabold text-5xl text-white my-2">{t('text.welcomeTextDown')}</h2>
            <p className="text-white w-96 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae
              laborum dolorum laboriosam magni quis.
            </p>
          </div>
          {/* <div>
            <form className="flex flex-col bg-white rounded-2xl p-10 items-center justify-center">
              <input className="outline-none border-one border-black" type="text" />
              <button className="bg-regal-pink w-40">
                <span>Axtar</span>
                <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
