import React from "react";

const Button = ({
  text,
  icon,
  isIcon,
  color,
  customSytles,
  width,
  isText = true,
  isBackground = true,
}) => {
  return (
    <button
      className={`${customSytles} ${width} hover:bg-gray-300  max-w-[200px] ${
        isBackground && `bg-primary-light-green`
      } text-white p-2 justify-center  rounded-md font-normal flex items-center flex-row gap-2 ${color}`}
    >
      {isIcon && <img src={icon} alt="icon" className="w-[15px] invert" />}
      {isText && <p className="w-full text-[12px]">{text}</p>}
    </button>
  );
};

export default Button;
