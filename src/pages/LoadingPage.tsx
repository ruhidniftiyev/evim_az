import React from 'react';
import Loader from '../animation/Loader';

type Props = {
  isLoading: boolean;
};

const LoadingPage: React.FC<Props> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return null;
};

export default LoadingPage;