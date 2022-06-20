import React from "react";
import {
  hitungLamaTanggungan,
  hitungModalAkhir,
  hitungModalAwal,
  hitungSukuBunga,
} from "../../../../service/tunggalService";
import {
  BungaOpt,
  ModalAkhir,
  ModalAwal,
  LamaTanggungan,
  SukuBunga,
  convertSolution,
} from "../../../components/ui/form/bungaformtype";

const BT = ({ inputs, input, menu }) => {
  const resMW = hitungModalAkhir(inputs, input);
  const resM = hitungModalAwal(inputs, input);
  const resW = hitungLamaTanggungan(inputs, input);
  const resP = hitungSukuBunga(inputs, input);
  if (menu.name === "modalakhir") {
    console.log(resMW);
  } else if (menu.name === "modalawal") {
    console.log(resM);
  } else if (menu.name === "lamapinjam") {
    console.log(resW);
  }
  const convert = convertSolution(input);
  var Temp_Period = convert.periode;
  var Temp_Lamapinjam = convert.lamapinjam;
  var Temp_Bunga = convert.bunga;
  var Temp_Modalawal = convert.modalawal;
  var Temp_Modalakhir = convert.modalakhir;
  var BungaPerPeriode = convert.BungaPerPeriode;

  console.log(input.modalakhir);
  console.log(`Modal awal: ${Temp_Modalawal}`);
  console.log(`Modal akhir: ${Temp_Modalakhir}`);
  console.log(`Lama Pinjam: ${Temp_Lamapinjam}`);
  console.log(`Periode: ${Temp_Period}`);
  console.log(`Bunga: ${Temp_Bunga}`);
  console.log(`bunga Per periode: ${BungaPerPeriode}`);
  console.log(`HASIL = ${1 + Temp_Lamapinjam * BungaPerPeriode}`);
  // IF dibawah ini untuk menampilkan SOLUTION CARD ke antar muka
  if (menu.name === "modalakhir") {
    return (
      <div className="w-80 mt-8 bg-blue-500 border rounded-lg">
        <div className="flex justify-center p-4">
          <div>
            <h5 className="text-base text-center font-semibold text-white">
              Cara Pengerjaan
            </h5>
            <div className="mt-4 text-sm text-white">
              <p>Diketahui:</p>
              <div className="pl-2">
                <p>
                  periode pembayaran tiap {input.periode} {input.periodeOpt}
                </p>
                <p>
                  p = {input.bunga}
                  {input.bungaOpt} = {BungaPerPeriode}/{input.periode}{" "}
                  {input.periodeOpt}
                </p>
                <p>
                  w ={" "}
                  {`${input.lamapinjam} ${input.lamapinjamOpt} / ${input.periode} ${input.periodeOpt}`}
                </p>
                <p>w = {Temp_Lamapinjam}</p>
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">Mw = M(1 + wp)</span>
              </p>
              <p>
                (2) Mw = {input.modalawal} (1 + {Temp_Lamapinjam} x{" "}
                {/* {(Number(input.bunga) / Temp_Period / 100).toFixed(3)}) */}
                {BungaPerPeriode})
              </p>
              <p>
                (3) Mw = {input.modalawal} (1 +{" "}
                {/* {(
                    Number(resMW.lamapinjam) *
                    (Number(input.bunga) / Temp_Period / 100)
                  ).toFixed(2)} */}
                {(Temp_Lamapinjam * BungaPerPeriode).toFixed(2)})
              </p>
              <p>
                (4) Mw = {input.modalawal} (
                {/* {(
                    1 +
                    Number(resMW.lamapinjam) *
                      (Number(input.bunga) / Temp_Period / 100)
                  ).toFixed(2)} */}
                {1 + Temp_Lamapinjam * BungaPerPeriode})
              </p>
              <p>(5) Mw = {resMW.hasil}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menu.name === "modalawal") {
    return (
      <div className="w-80 mt-8 bg-blue-500 border rounded-lg">
        <div className="flex justify-center p-4">
          <div>
            <h5 className="text-base text-center font-semibold text-white">
              Cara Pengerjaan
            </h5>
            <div className="mt-4 text-sm text-white">
              <p></p>
              <p>Diketahui:</p>
              <div className="pl-2">
                <p>
                  periode pembayaran tiap {input.periode} {input.periodeOpt}
                </p>
                <p>Mw = {input.modalakhir}</p>
                <p>
                  p = {input.bunga}
                  {input.bungaOpt} = {BungaPerPeriode}/{input.periode}{" "}
                  {input.periodeOpt}
                </p>
                <p>
                  w ={" "}
                  {`${input.lamapinjam} ${input.lamapinjamOpt} / ${input.periode} ${input.periodeOpt}`}
                </p>
                <p>w = {Temp_Lamapinjam}</p>
                {/* INI BATAS paling bawah untuk bagian DIKETAHUI */}
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">Mw = M(1 + wp)</span>
              </p>
              <p>
                (2) {input.modalakhir} = M (1 + {Temp_Lamapinjam} x{" "}
                {BungaPerPeriode})
              </p>
              <p>
                (3) {input.modalakhir} = M (1 +{" "}
                {(Temp_Lamapinjam * BungaPerPeriode).toFixed(2)})
              </p>
              <p>
                (4) {input.modalakhir} = M (
                {1 + Temp_Lamapinjam * BungaPerPeriode})
              </p>
              <p>
                (5) {input.modalakhir} / (
                {1 + Temp_Lamapinjam * BungaPerPeriode}) = M
              </p>
              <p>(6) M = {resM.hasil}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menu.name === "lamapinjam") {
    return (
      <div className="w-80 mt-8 bg-blue-500 border rounded-lg">
        <div className="flex justify-center p-4">
          <div>
            <h5 className="text-base text-center font-semibold text-white">
              Cara Pengerjaan
            </h5>
            <div className="mt-4 text-sm text-white">
              <p></p>
              <p>Diketahui:</p>
              <div className="pl-2">
                <p>
                  periode pembayaran tiap {input.periode} {input.periodeOpt}
                </p>
                <p>Mw = {input.modalakhir}</p>
                <p>M = {input.modalawal}</p>
                <p>
                  p = {input.bunga}
                  {input.bungaOpt} = {BungaPerPeriode}/{input.periode}{" "}
                  {input.periodeOpt}
                </p>
              </div>
              {/* INI BATAS paling bawah untuk bagian DIKETAHUI */}
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">Mw = M(1 + wp)</span>
              </p>
              <p>
                (2) {input.modalakhir} = {input.modalawal} (1 + w x{" "}
                {BungaPerPeriode})
              </p>
              <p>
                (3) {input.modalakhir} = {input.modalawal} +{" "}
                {(Temp_Modalawal * BungaPerPeriode)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                w
              </p>
              <p>
                (4) {input.modalakhir} -{" "}
                {Temp_Modalawal.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}{" "}
                ={" "}
                {(Temp_Modalawal * BungaPerPeriode)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                w
              </p>
              <p>
                (5){" "}
                {(Temp_Modalakhir - Temp_Modalawal)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                ={" "}
                {(Temp_Modalawal * BungaPerPeriode)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                w
              </p>
              <p>
                (6){" "}
                {(Temp_Modalakhir - Temp_Modalawal)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                /{" "}
                {(Temp_Modalawal * BungaPerPeriode)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                = w
              </p>
              <p>
                (7) w = {resW.hasil} Tahun = {resW.hasil * 12} Bulan
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menu.name === "sukubunga") {
    return (
      <div className="w-80 mt-8 bg-blue-500 border rounded-lg">
        <div className="flex justify-center p-4">
          <div>
            <h5 className="text-base text-center font-semibold text-white">
              Cara Pengerjaan
            </h5>
            <div className="mt-4 text-sm text-white">
              <p></p>
              <p>Diketahui:</p>
              <div className="pl-2">
                <p>
                  periode pembayaran tiap {input.periode} {input.periodeOpt}
                </p>
                <p>Mw = {input.modalakhir}</p>
                <p>M = {input.modalawal}</p>
                <p>
                  w ={" "}
                  {`${input.lamapinjam} ${input.lamapinjamOpt} / ${input.periode} ${input.periodeOpt}`}
                </p>
                <p>w = {Temp_Lamapinjam}</p>
              </div>
              {/* INI BATAS paling bawah untuk bagian DIKETAHUI */}
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">Mw = M(1 + wp)</span>
              </p>
              <p>
                (2) {input.modalakhir} = {input.modalawal} (1 +{" "}
                {Temp_Lamapinjam} x p)
              </p>
              <p>
                (3) {input.modalakhir} = {input.modalawal} +{" "}
                {(Temp_Modalawal * Temp_Lamapinjam)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                p
              </p>
              <p>
                (4) {input.modalakhir} -{" "}
                {Temp_Modalawal.toString().replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}{" "}
                ={" "}
                {(Temp_Modalawal * Temp_Lamapinjam)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                p
              </p>
              <p>
                (5){" "}
                {(Temp_Modalakhir - Temp_Modalawal)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                ={" "}
                {(Temp_Modalawal * Temp_Lamapinjam)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                p
              </p>
              <p>
                (6){" "}
                {(Temp_Modalakhir - Temp_Modalawal)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                /{" "}
                {(Temp_Modalawal * Temp_Lamapinjam)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                = p
              </p>
              <p>
                (7) p = {resP.hasil}%/{resP.lama}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BT;
