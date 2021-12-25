import React, { useState } from "react";
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
} from "../js/components/ui/form/formtype";
import {
  hitungModalAkhir,
  hitungModalAwal,
  hitungLamaTanggungan,
  hitungSukuBunga,
} from "../service/majemukService";

const Majemuk = () => {
  const [majemukState, setMajemukState] = useState(BungaOpt[0]);
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
                  <FormInput inputs={ModalAkhir} hitung={hitungModalAkhir} />
                )}
                {majemukState.name === "modalawal" && (
                  <FormInput inputs={ModalAwal} hitung={hitungModalAwal} />
                )}
                {majemukState.name === "lamapinjam" && (
                  <FormInput
                    inputs={LamaTanggungan}
                    hitung={hitungLamaTanggungan}
                  />
                )}
                {majemukState.name === "sukubunga" && (
                  <FormInput inputs={SukuBunga} hitung={hitungSukuBunga} />
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
