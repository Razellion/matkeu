// import React, { useState } from "react";
import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import Anitas from "../js/components/ui/solutioncard/Anuitas";
import {
  AnuitasOpt,
  NilaiAnuitas,
  KEN,
} from "../js/components/ui/form/anuitasformtype";
import {
  hitungKen,
  // hitungBungaAwal,
  hitungNilaiAnuitas,
  // hitungNilaiAngsuran,
} from "../service/anuitasService";
// import { hitungNilaiAnuitas } from "../service/anuitasService";

const Anuitas = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [anuitasState, setAnuitasState] = useState(AnuitasOpt[0]);
  const [input, setInput] = useReducer(formReducer, {});
  const [showSolution, setShowSolution] = useState(false);
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <DropdownMenu />
          <div className="w-80 mt-8 border rounded-lg border-blue-400">
            <div className="flex justify-center text-center">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Anuitas</h3>
                <DropdownForm
                  menu={AnuitasOpt}
                  state={anuitasState}
                  setState={setAnuitasState}
                  setShowSolution={setShowSolution}
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {anuitasState.name === "nilaianuitas" && (
                  <FormInput
                    inputs={NilaiAnuitas}
                    hitung={hitungNilaiAnuitas}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {anuitasState.name === "KeN" && (
                  <FormInput
                    inputs={KEN}
                    hitung={hitungKen}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
              </div>
            </div>
          </div>
          {showSolution && anuitasState.name === "nilaianuitas" && (
            <Anitas inputs={NilaiAnuitas} input={input} menu={AnuitasOpt[0]} />
          )}
          {showSolution && anuitasState.name === "KeN" && (
            <Anitas inputs={KEN} input={input} menu={AnuitasOpt[1]} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Anuitas;
