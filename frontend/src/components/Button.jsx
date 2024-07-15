import React from "react";

const Button = ({
  text,
  icon,
  isIcon,
  customSytles,
  width,
  isText = true,
  color,
  invertIcon,
}) => {
  return (
    <button
      className={`${customSytles} ${width} ${color} flex flex-row justify-center items-center max-w-[200px] text-black p-2  rounded-md font-normal  gap-2 `}
    >
      {isIcon && (
        <img
          src={icon}
          alt="icon"
          className={`w-[15px] ${invertIcon && "invert"}`}
        />
      )}
      {isText && <p className="w-full text-[12px] font-medium">{text}</p>}
    </button>
  );
};

export default Button;
