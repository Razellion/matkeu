import React, { useState } from "react";
import Layout from "../js/layout/layout";
import DropdownMenu from "../js/components/ui/dropdown/dropdownmenu";
import DropdownForm from "../js/components/ui/dropdown/dropdownform";
import FormInput from "../js/components/ui/form/form";
import {
  AnuitasOpt,
  NilaiAnuitas,
} from "../js/components/ui/form/anuitasformtype";
import { hitungNilaiAnuitas } from "../service/anuitasService";

const Anuitas = () => {
  // bikin state yg ganti berdasarkan dropdown, panggil form type passing ke component form
  const [anuitasState, setAnuitasState] = useState(AnuitasOpt[0]);
  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <DropdownMenu />
          <div className="w-80 mt-8 border rounded-lg border-blue-400">
            <div className="flex justify-center text-center">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Anuitas</h3>
                <DropdownForm
                  menu={AnuitasOpt}
                  state={anuitasState}
                  setState={setAnuitasState}
                />
                {
                  // conditional bisa diakalin dengan bikin array object of input, nanti di map didalam component form input
                }
                {anuitasState.name === "nilaianuitas" && (
                  <FormInput
                    inputs={NilaiAnuitas}
                    hitung={hitungNilaiAnuitas}
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

export default Anuitas;
