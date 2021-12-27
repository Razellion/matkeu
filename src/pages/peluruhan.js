import React, { useState } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import {
  PeluruhanOpt,
  NilaiAkhir,
  LamaPeluruhan,
  Persentase,
} from "../js/components/ui/form/peluruhanformtype";
import {
  hitungNilaiAkhir,
  hitungLamaPeluruhan,
  hitungPersentase,
} from "../service/peluruhanService";

const Peluruhan = () => {
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [peluruhanState, setPeluruhanState] = useState(PeluruhanOpt[0]);
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
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {peluruhanState.name === "nilaiakhir" && (
                  <FormInput inputs={NilaiAkhir} hitung={hitungNilaiAkhir} />
                )}
                {peluruhanState.name === "lamapeluruhan" && (
                  <FormInput
                    inputs={LamaPeluruhan}
                    hitung={hitungLamaPeluruhan}
                  />
                )}
                {peluruhanState.name === "persentase" && (
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

export default Peluruhan;
