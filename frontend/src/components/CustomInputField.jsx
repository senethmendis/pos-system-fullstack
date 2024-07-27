const CustomInputField = ({
  lableText,
  inputType,
  inputId,
  placeholder,
  isRequired,
  onChange,
  name,
  value,
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {lableText}
      </label>
      <input
        type={inputType}
        id={inputId}
        className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default CustomInputField;
