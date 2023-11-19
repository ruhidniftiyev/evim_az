import React, { ChangeEvent, FC } from 'react';

type CustomInputProps = {
  type: 'text' | 'number'
  label: string;
  placeholder: string;
  value: string | number;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  disabled,
  type,
  onChange,
}) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={label} className="text-md mb-1">
        {label}
      </label>
      <input
        className="outline-none border-2 border-[#e3e7eb] h-12 w-96 rounded-3xl p-4 text-lg"
        onChange={onChange}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
