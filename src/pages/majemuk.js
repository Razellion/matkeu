// import React, { useState } from "react";
import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import BM from "../js/components/ui/solutioncard/BM";
import {
  BungaOpt,
  ModalAkhir,
  ModalAwal,
  LamaTanggungan,
  SukuBunga,
} from "../js/components/ui/form/bungaformtype";
import {
  hitungModalAkhir,
  hitungModalAwal,
  hitungLamaTanggungan,
  hitungSukuBunga,
} from "../service/majemukService";

const Majemuk = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  const [majemukState, setMajemukState] = useState(BungaOpt[0]);
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
                <h3 className="text-lg font-semibold">Bunga Majemuk</h3>
                <DropdownForm
                  menu={BungaOpt}
                  state={majemukState}
                  setState={setMajemukState}
                  setShowSolution={setShowSolution}
                />
                {majemukState.name === "modalakhir" && (
                  <FormInput
                    inputs={ModalAkhir}
                    hitung={hitungModalAkhir}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {majemukState.name === "modalawal" && (
                  <FormInput
                    inputs={ModalAwal}
                    hitung={hitungModalAwal}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {majemukState.name === "lamapinjam" && (
                  <FormInput
                    inputs={LamaTanggungan}
                    hitung={hitungLamaTanggungan}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {majemukState.name === "sukubunga" && (
                  <FormInput
                    inputs={SukuBunga}
                    hitung={hitungSukuBunga}
                    // input={input}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
              </div>
            </div>
          </div>
          {
            // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
          }
          {showSolution && majemukState.name === "modalakhir" && (
            <BM inputs={ModalAkhir} input={input} menu={BungaOpt[0]} />
          )}
          {showSolution && majemukState.name === "modalawal" && (
            <BM inputs={ModalAwal} input={input} menu={BungaOpt[1]} />
          )}
          {showSolution && majemukState.name === "lamapinjam" && (
            <BM inputs={LamaTanggungan} input={input} menu={BungaOpt[2]} />
          )}
          {showSolution && majemukState.name === "sukubunga" && (
            <BM inputs={SukuBunga} input={input} menu={BungaOpt[3]} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Majemuk;
