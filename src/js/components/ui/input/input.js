import React from "react";
import DropdownInput from "./dropdowninput";
import NumberFormat from "react-number-format";
// var NumberFormat = require("react-number-format");

const Input = ({ props, setValue, setInput, setForm }) => {
  return (
    <div className="text-left">
      <label htmlFor={props.name} className="text-sm">
        {props.label}
      </label>
      <div className="flex">
        <NumberFormat
          name={props.name}
          onChange={setValue}
          type="text"
          // displayType={"text"}
          // inputMode="decimal"
          thousandSeparator={true}
          // pattern="[0-9]*"
          className={`${
            props.opt
              ? "w-48 rounded-l-md"
              : props.persen
              ? "w-64 rounded-l-md"
              : "w-72 rounded-md"
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
        {props.persen && (
          <div className="w-8 text-center text-sm p-1 bg-gray-300 shadow-md rounded-r-md border-t border-b border-r border-blue-400">
            <p>%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
