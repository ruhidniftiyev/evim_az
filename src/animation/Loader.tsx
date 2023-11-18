import React from 'react';
import './Loader.css';

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
};

export default Loader;
