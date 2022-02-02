import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import SolutionCard from "../js/components/ui/solutioncard/solutioncard";
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
} from "../service/tunggalService";

const Tunggal = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [tunggalState, setTunggalState] = useState(BungaOpt[0]);
  const [input, setInput] = useReducer(formReducer, {});
  const [showSolution, setShowSolution] = useState(false);
  console.log(input);
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <DropdownMenu />
          <div className="w-80 mt-8 border rounded-lg border-blue-400">
            <div className="flex justify-center text-center">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Bunga Tunggal</h3>
                <DropdownForm
                  menu={BungaOpt}
                  state={tunggalState}
                  setState={setTunggalState}
                  setShowSolution={setShowSolution}
                />
                {tunggalState.name === "modalakhir" && (
                  <FormInput
                    inputs={ModalAkhir}
                    hitung={hitungModalAkhir}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {tunggalState.name === "modalawal" && (
                  <FormInput
                    inputs={ModalAwal}
                    hitung={hitungModalAwal}
                    setInput={setInput}
                  />
                )}
                {tunggalState.name === "lamapinjam" && (
                  <FormInput
                    inputs={LamaTanggungan}
                    hitung={hitungLamaTanggungan}
                    setInput={setInput}
                  />
                )}
                {tunggalState.name === "sukubunga" && (
                  <FormInput
                    inputs={SukuBunga}
                    hitung={hitungSukuBunga}
                    setInput={setInput}
                  />
                )}
              </div>
            </div>
          </div>
          {showSolution && tunggalState.name === "modalakhir" && (
            <SolutionCard inputs={ModalAkhir} input={input} />
          )}
          {/* {showSolution && tunggalState.name === "modalawal" && (
            <SolutionCard inputs={ModalAwal} input={input} />
          )}
          {showSolution && tunggalState.name === "lamapinjam" && (
            <SolutionCard inputs={LamaTanggungan} input={input} />
          )}
          {showSolution && tunggalState.name === "sukubunga" && (
            <SolutionCard inputs={SukuBunga} input={input} />
          )} */}
        </div>
      </div>
    </Layout>
  );
};

export default Tunggal;
