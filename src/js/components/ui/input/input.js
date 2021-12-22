import React from "react";

const Input = ({ label, value, name, setValue }) => {
  return (
    <div className="text-left">
      <label htmlFor="input" className="text-sm">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={setValue}
        type="text"
        inputMode="numeric"
        required
        pattern="[0-9]*"
        className="px-2 py-1 w-72 border text-sm shadow-md border-blue-400 rounded-md focus:outline-none"
      />
    </div>
  );
};

export default Input;
