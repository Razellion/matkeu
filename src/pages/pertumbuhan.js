// import React, { useState } from "react";
import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import Prtmbhan from "../js/components/ui/solutioncard/Prtmbhan";
import {
  PertumbuhanOpt,
  NilaiAkhir,
  NilaiAwal,
  LamaPertumbuhan,
  Persentase,
} from "../js/components/ui/form/pertumbuhanformtype";
import {
  hitungNilaiAkhir,
  hitungNilaiAwal,
  hitungLamaPertumbuhan,
  hitungPersentase,
} from "../service/pertumbuhanService";

const Pertumbuhan = () => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [pertumbuhanState, setPertumbuhanState] = useState(PertumbuhanOpt[0]);
  const [input, setInput] = useReducer(formReducer, {});
  const [showSolution, setShowSolution] = useState(false);
  // console.log(showSolution);
  // console.log(pertumbuhanState.name);
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <DropdownMenu />
          <div className="w-80 mt-8 border rounded-lg border-blue-400">
            <div className="flex justify-center text-center">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Pertumbuhan</h3>
                <DropdownForm
                  menu={PertumbuhanOpt}
                  state={pertumbuhanState}
                  setState={setPertumbuhanState}
                  setShowSolution={setShowSolution}
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {pertumbuhanState.name === "nilaiakhir" && (
                  <FormInput
                    inputs={NilaiAkhir}
                    hitung={hitungNilaiAkhir}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {pertumbuhanState.name === "nilaiawal" && (
                  <FormInput
                    inputs={NilaiAwal}
                    hitung={hitungNilaiAwal}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {pertumbuhanState.name === "lamapertumbuhan" && (
                  <FormInput
                    inputs={LamaPertumbuhan}
                    hitung={hitungLamaPertumbuhan}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {pertumbuhanState.name === "persentase" && (
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
          {showSolution && pertumbuhanState.name === "nilaiakhir" && (
            <Prtmbhan
              inputs={NilaiAkhir}
              input={input}
              menu={PertumbuhanOpt[0]}
            />
          )}
          {showSolution && pertumbuhanState.name === "nilaiawal" && (
            <Prtmbhan
              inputs={NilaiAwal}
              input={input}
              menu={PertumbuhanOpt[1]}
            />
          )}
          {showSolution && pertumbuhanState.name === "lamapertumbuhan" && (
            <Prtmbhan
              inputs={LamaPertumbuhan}
              input={input}
              menu={PertumbuhanOpt[2]}
            />
          )}
          {showSolution && pertumbuhanState.name === "persentase" && (
            <Prtmbhan
              inputs={Persentase}
              input={input}
              menu={PertumbuhanOpt[3]}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Pertumbuhan;
