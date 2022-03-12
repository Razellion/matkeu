// import React, { useState } from "react";
import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import Pluruhan from "../js/components/ui/solutioncard/Pluruhan";
import {
  PeluruhanOpt,
  NilaiAkhir,
  NilaiAwal,
  LamaPeluruhan,
  Persentase,
} from "../js/components/ui/form/peluruhanformtype";
import {
  hitungNilaiAkhir,
  hitungNilaiAwal,
  hitungLamaPeluruhan,
  hitungPersentase,
} from "../service/peluruhanService";
// import { hitungNilaiAwal } from "../service/pertumbuhanService";
// import Pluruhan from "../js/components/ui/solutioncard/pluruhan";

const Peluruhan = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [peluruhanState, setPeluruhanState] = useState(PeluruhanOpt[0]);
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
                <h3 className="text-lg font-semibold">Peluruhan</h3>
                <DropdownForm
                  menu={PeluruhanOpt}
                  state={peluruhanState}
                  setState={setPeluruhanState}
                  setShowSolution={setShowSolution}
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {peluruhanState.name === "nilaiakhir" && (
                  <FormInput
                    inputs={NilaiAkhir}
                    hitung={hitungNilaiAkhir}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {peluruhanState.name === "nilaiawal" && (
                  <FormInput
                    inputs={NilaiAwal}
                    hitung={hitungNilaiAwal}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {peluruhanState.name === "lamapeluruhan" && (
                  <FormInput
                    inputs={LamaPeluruhan}
                    hitung={hitungLamaPeluruhan}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {peluruhanState.name === "persentase" && (
                  <FormInput
                    inputs={Persentase}
                    hitung={hitungPersentase}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
              </div>
            </div>
          </div>
          {showSolution && peluruhanState.name === "nilaiakhir" && (
            <Pluruhan
              inputs={NilaiAkhir}
              input={input}
              menu={PeluruhanOpt[0]}
            />
          )}
          {showSolution && peluruhanState.name === "nilaiawal" && (
            <Pluruhan inputs={NilaiAwal} input={input} menu={PeluruhanOpt[1]} />
          )}
          {showSolution && peluruhanState.name === "persentase" && (
            <Pluruhan
              inputs={Persentase}
              input={input}
              menu={PeluruhanOpt[2]}
            />
          )}
          {showSolution && peluruhanState.name === "lamapeluruhan" && (
            <Pluruhan
              inputs={LamaPeluruhan}
              input={input}
              menu={PeluruhanOpt[3]}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Peluruhan;
