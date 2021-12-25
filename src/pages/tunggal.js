import React, { useState } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import {
  BungaOpt,
  ModalAkhir,
  ModalAwal,
  LamaTanggungan,
  SukuBunga,
  hitungModalAkhir,
  hitungModalAwal,
} from "../js/components/ui/form/formtype";

const Tunggal = () => {
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [tunggalState, setTunggalState] = useState(BungaOpt[0]);
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
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {tunggalState.name === "modalakhir" && (
                  <FormInput inputs={ModalAkhir} hitung={hitungModalAkhir} />
                )}
                {tunggalState.name === "modalawal" && (
                  <FormInput inputs={ModalAwal} hitung={hitungModalAwal} />
                )}
                {tunggalState.name === "lamapinjam" && (
                  <FormInput inputs={LamaTanggungan} />
                )}
                {tunggalState.name === "sukubunga" && (
                  <FormInput inputs={SukuBunga} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tunggal;
