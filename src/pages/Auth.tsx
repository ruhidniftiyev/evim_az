import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

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
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default Auth;
