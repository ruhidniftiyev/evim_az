import React from 'react';
import Loader from '../animation/Loader';

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default LoadingPage;
