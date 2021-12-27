import React, { useState } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import {
  PertumbuhanOpt,
  NilaiAkhir,
  LamaPertumbuhan,
  Persentase,
} from "../js/components/ui/form/pertumbuhanformtype";
import {
  hitungNilaiAkhir,
  hitungLamaPertumbuhan,
  hitungPersentase,
} from "../service/pertumbuhanService";

const Pertumbuhan = () => {
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [pertumbuhanState, setPertumbuhanState] = useState(PertumbuhanOpt[0]);
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
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {pertumbuhanState.name === "nilaiakhir" && (
                  <FormInput inputs={NilaiAkhir} hitung={hitungNilaiAkhir} />
                )}
                {pertumbuhanState.name === "lamapertumbuhan" && (
                  <FormInput
                    inputs={LamaPertumbuhan}
                    hitung={hitungLamaPertumbuhan}
                  />
                )}
                {pertumbuhanState.name === "persentase" && (
                  <FormInput inputs={Persentase} hitung={hitungPersentase} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pertumbuhan;
