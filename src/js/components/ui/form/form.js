import React, { useReducer } from "react";
import Input from "../input/input";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const FormInput = ({ inputs }) => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mt-2">
      <form className="space-y-2" onSubmit={handleSubmit}>
        {inputs.map((input) => {
          return (
            <Input
              key={input.name}
              label={input.label}
              name={input.name}
              setValue={handleChange}
            />
          );
        })}
        <div>
          <button
            className="mt-4 px-3 py-1 rounded-full border border-blue-400 text-sm font-semibold text-blue-600 shadow-md"
            type="submit"
          >
            Hitung!
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
