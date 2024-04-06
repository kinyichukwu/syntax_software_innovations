import React from "react";

const Input = ({
  type = "text",
  placeholder = "Enter your text",
  required = true,
  className = "",
  name = "",
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className={`block w-full rounded-md border-0 py-1.5 text-slate-400 bg-sky-50 h-[50px]  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-p sm:text-sm sm:leading-6 ${className}`}
    />
  );
};

export default Input;
