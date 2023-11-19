import React, { FC, MouseEventHandler } from 'react';

type CustomBinarySelectProps = {
  firstOption: string | boolean;
  secondOption: string | boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isSelected: boolean;
  label: string;
};

const CustomBinarySelect: FC<CustomBinarySelectProps> = ({
  firstOption,
  secondOption,
  onClick,
  isSelected,
  label,
}) => {
  return (
    <div>
      <p className="text-md mb-1">{label}</p>
      <div className="flex border-2 border-[#e3e7eb] text-[#9ca3af] h-12 w-96 rounded-3xl text-lg">
        {isSelected ? (
          <>
            <p
              onClick={onClick}
              className="flex w-1/2 items-center justify-center border-one border-black border-r-2 rounded-l-3xl text-black">
              {firstOption}
            </p>
            <p onClick={onClick} className="flex items-center justify-center w-1/2">
              {secondOption}
            </p>
          </>
        ) : (
          <>
            <p onClick={onClick} className="flex w-1/2 items-center justify-center ">
              {firstOption}
            </p>
            <p
              onClick={onClick}
              className="flex items-center justify-center w-1/2 border-one border-black border-l-2 rounded-r-3xl text-black">
              {secondOption}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomBinarySelect;
