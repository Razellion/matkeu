import React, { useState, useReducer } from "react";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import Layout from "../js/layout/layout";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
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
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {majemukState.name === "modalakhir" && (
                  <FormInput
                    inputs={ModalAkhir}
                    hitung={hitungModalAkhir}
                    input={input}
                    setInput={setInput}
                  />
                  //input supaya pass build
                )}
                {majemukState.name === "modalawal" && (
                  <FormInput
                    inputs={ModalAwal}
                    hitung={hitungModalAwal}
                    setInput={setInput}
                  />
                )}
                {majemukState.name === "lamapinjam" && (
                  <FormInput
                    inputs={LamaTanggungan}
                    hitung={hitungLamaTanggungan}
                    setInput={setInput}
                  />
                )}
                {majemukState.name === "sukubunga" && (
                  <FormInput
                    inputs={SukuBunga}
                    hitung={hitungSukuBunga}
                    setInput={setInput}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Majemuk;
