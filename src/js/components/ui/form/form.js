import React, { useReducer } from "react";
import Swal from "sweetalert2";
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
    //TODO: panggil fungsi rumus buat hitung hasil akhir
    //TODO: conditional sweetalert
    Swal.fire({
      title: "Hasil Akhir",
      text: "Jumlah modal akhir pada periode pembayaran ke-x bernilai: y",
      icon: "success",
      confirmButtonText: "Lanjut Pembahasan",
    });
    console.log(formData);
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
