import React, { FC } from 'react';

interface ICustomSelectProps {
  firstItem: string;
  secondItem: string;
}

const CustomSelect: FC<ICustomSelectProps> = ({ firstItem, secondItem }) => {
  return (
    <div className="bg-yellow-500 rounded-xl h-32 flex flex-col items-center justify-around py-3 px-1 absolute">
      <p className=" w-full flex justify-center font-medium cursor-pointer hover:bg-slate-300">
        {firstItem}
      </p>
      <p className="w-full flex justify-center font-medium cursor-pointer hover:bg-slate-300">
        {secondItem}
      </p>
    </div>
  );
};

export default CustomSelect;
