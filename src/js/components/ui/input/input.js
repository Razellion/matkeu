import React from "react";
import DropdownInput from "./dropdowninput";

const Input = ({ props, setValue, setInput, setForm }) => {
  return (
    <div className="text-left">
      <label htmlFor={props.name} className="text-sm">
        {props.label}
      </label>
      <div className="flex">
        <input
          name={props.name}
          onChange={setValue}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className={`${
            props.opt ? "w-48 rounded-l-md" : "w-72 rounded-md"
          } px-2 py-1 border text-sm shadow-md border-blue-400 focus:outline-none`}
        />
        {props.opt && (
          <DropdownInput
            name={props.name}
            menu={props.opt}
            setValue={setValue}
            setInput={setInput}
            setForm={setForm}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
