import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ThreeDots height={40} width={40} color="blue" ariaLabel="three-dots-loading" />
    </div>
  );
};

export default Loading;
