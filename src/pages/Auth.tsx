import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { REGISTRATION_ROUTE } from '../utils/constants';
import { Link } from 'react-router-dom';

type Props = {};

const Auth = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPasswort] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-100 w-full flex-col">
      <h2 className="font-semibold text-2xl">Giriş</h2>
      <form className="w-11/12 flex flex-col justify-center items-center">
        <CustomInput
          placeholder="Your email"
          type="text"
          value={email}
          label="E-mail"
          onChange={handleEmailChange}
        />
        <CustomInput
          placeholder="Your password"
          type="password"
          value={password}
          label="Password"
          onChange={handlePasswordChange}
        />
        <div className="w-full flex justify-center mt-5">
          <button className="bg-bg-home  text-white flex justify-center items-center border-2 border-[#e3e7eb] h-12 w-52 rounded-3xl p-4 text-md">
            Daxil ol
          </button>
        </div>
      </form>
      <div className="flex justify-between w-64 mt-2">
        <p>Səhifəniz yoxdur?</p>
        <Link to={REGISTRATION_ROUTE}>
          <p className='hover:underline'>Qeydiyyat</p>
        </Link>
      </div>
    </div>
  );
};

export default Auth;
