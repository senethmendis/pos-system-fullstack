import React from "react";

const Button = ({
  text,
  icon,
  isIcon,
  customSytles,
  width,
  isText = true,
  color,
}) => {
  return (
    <button
      className={`${customSytles} ${width} ${color}   max-w-[200px] text-black p-2 justify-center  rounded-md font-normal flex items-center flex-row gap-2 `}
    >
      {isIcon && <img src={icon} alt="icon" className="w-[15px] invert" />}
      {isText && <p className="w-full text-[12px] font-medium">{text}</p>}
    </button>
  );
};

export default Button;
