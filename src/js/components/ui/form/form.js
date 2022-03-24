import { data } from "autoprefixer";
import React, { useReducer } from "react";
import Swal from "sweetalert2";
import Input from "../input/input";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const FormInput = ({ inputs, hitung, setInput, setShowSolution }) => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    if (setShowSolution !== undefined) {
      setShowSolution(false);
    }
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
    setInput({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //panggil fungsi rumus buat hitung hasil akhir
    //conditional sweetalert, bikin dinamis
    hitung(inputs, formData, Swal);
    // console.log(formData);
    let formLength = 0;
    formLength = formLength + inputs.length;
    inputs.map((input) => {
      if (input.opt) {
        formLength = formLength + 1;
      }
    });
    let isEmpty = false;
    let isZero = false;

    for (const key in formData) {
      if (formData[key] === "") {
        isEmpty = true;
      }
      if (formData[key] == "0") {
        isZero = true;
      }
    }

    console.log(isZero);
    // console.log(formLength);
    // INI IF dibawah -- && Object.keys(formData).length >= 6
    if (
      setShowSolution !== undefined &&
      Object.keys(formData).length === formLength &&
      !isEmpty &&
      !isZero
    ) {
      setShowSolution(true);
    }
  };
  return (
    <div className="mt-2">
      <form className="space-y-2" onSubmit={handleSubmit}>
        {inputs.map((input) => {
          return (
            <Input
              key={input.name}
              props={input}
              setValue={handleChange}
              setInput={setInput}
              setForm={setFormData}
            />
          );
        })}
        <div>
          <button
            className="mt-4 px-5 py-1 rounded-full border border-blue-400 text-sm font-semibold text-blue-600 shadow-md"
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
