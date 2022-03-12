import React, { useState, useReducer } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import BT from "../js/components/ui/solutioncard/BT";
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
                    setShowSolution={setShowSolution}
                  />
                )}
                {tunggalState.name === "lamapinjam" && (
                  <FormInput
                    inputs={LamaTanggungan}
                    hitung={hitungLamaTanggungan}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
                {tunggalState.name === "sukubunga" && (
                  <FormInput
                    inputs={SukuBunga}
                    hitung={hitungSukuBunga}
                    setInput={setInput}
                    setShowSolution={setShowSolution}
                  />
                )}
              </div>
            </div>
          </div>
          {/* {console.log(showSolution)} */}
          {showSolution && tunggalState.name === "modalakhir" && (
            <BT inputs={ModalAkhir} input={input} menu={BungaOpt[0]} />
          )}
          {showSolution && tunggalState.name === "modalawal" && (
            <BT inputs={ModalAwal} input={input} menu={BungaOpt[1]} />
          )}
          {showSolution && tunggalState.name === "lamapinjam" && (
            <BT inputs={LamaTanggungan} input={input} menu={BungaOpt[2]} />
          )}
          {showSolution && tunggalState.name === "sukubunga" && (
            <BT inputs={SukuBunga} input={input} menu={BungaOpt[3]} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Tunggal;
