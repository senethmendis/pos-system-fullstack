import React from "react";

const Button = ({ text, icon, isIcon, color }) => {
  return (
    <button
      className={`bg-green-600 text-white px-3 py-2 rounded-md font-normal flex items-center flex-row gap-2 ${color}`}
    >
      {isIcon && <img src={icon} alt="icon" className="w-5 invert" />} {text}
    </button>
  );
};

export default Button;
