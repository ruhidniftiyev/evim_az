import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

type Props = {};

const Registration = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPasswort] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswort(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-100 flex-col">
      <h2 className="font-semibold text-2xl">Qeydiyyat</h2>
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
            Qeydiyyatdan keç
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
