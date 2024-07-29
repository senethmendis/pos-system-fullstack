import React, { useState } from "react";

const CustomSelectField = ({
  onChange,
  value,
  name,
  inputId,
  lableText,
  isRequired,
  itemArry,
  isCapitalize,
}) => {
  return (
    <>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {lableText}
      </label>
      <select
        required={isRequired}
        name={name}
        id={inputId}
        value={value}
        onChange={onChange}
        className={`${
          isCapitalize && "capitalize"
        }  mb-2 bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      >
        {itemArry.map((filter, i) => (
          <option key={i} value={filter} className="">
            {filter}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelectField;
