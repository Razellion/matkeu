import React from "react";
import {
  hitungLamaTanggungan,
  hitungModalAkhir,
  hitungModalAwal,
  hitungSukuBunga,
} from "../../../../service/majemukService";
import {
  BungaOpt,
  ModalAkhir,
  ModalAwal,
  LamaTanggungan,
  SukuBunga,
  convertSolution,
} from "../../../components/ui/form/bungaformtype";

const BM = ({ inputs, input, menu }) => {
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
  } else {
    console.log(resP);
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

  var power = 1 + BungaPerPeriode;
  power = Math.pow(power, Temp_Lamapinjam);
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
                <span className="font-semibold">
                  Mw = M(1 + p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) Mw = {input.modalawal} (1 + {BungaPerPeriode})
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (3) Mw = {input.modalawal} ({(1 + BungaPerPeriode).toFixed(2)})
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (4) Mw = {input.modalawal} x ({power.toFixed(4)})
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
                <span className="font-semibold">
                  Mw = M(1 + p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.modalakhir} = M (1 + {BungaPerPeriode})
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (3) {input.modalakhir} = M ({(1 + BungaPerPeriode).toFixed(2)})
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (4) {input.modalakhir} = M x ({power.toFixed(4)})
              </p>
              <p>
                (5) {input.modalakhir} / ({power.toFixed(4)}) = M
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
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">
                  Mw = M(1 + p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.modalakhir} = {input.modalawal} (1 +{" "}
                {BungaPerPeriode})<sup>w</sup>
              </p>
              <p>
                (3) {input.modalakhir} = {input.modalawal} (
                {(1 + BungaPerPeriode).toFixed(2)})<sup>w</sup>
              </p>
              <p>
                (4) {input.modalakhir} / {input.modalawal} = (
                {1 + BungaPerPeriode})<sup>w</sup>
              </p>
              <p>
                (5) {Temp_Modalakhir / Temp_Modalawal} = ({1 + BungaPerPeriode})
                <sup>w</sup>
              </p>
              <p>
                (6) log ({Temp_Modalakhir / Temp_Modalawal}) = w . log(
                {1 + BungaPerPeriode})
              </p>
              <p>
                {" "}
                (7) w = log({Temp_Modalakhir / Temp_Modalawal}) / log(
                {1 + BungaPerPeriode})
              </p>
              <p>(8) w = {resW.hasil}</p>
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
              <p>Diketahui:</p>
              <div className="pl-2">
                <p>
                  periode pembayaran tiap {input.periode} {input.periodeOpt}
                </p>
                <p>Mw = {input.modalakhir}</p>
                <p>M = {input.modalawal}</p>
                <p>
                  w = {input.lamapinjam} {input.lamapinjamOpt} / {input.periode}{" "}
                  {input.periodeOpt}
                </p>
                <p>w = {Temp_Lamapinjam}</p>
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">
                  Mw = M(1 + p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.modalakhir} = {input.modalawal} (1 + p)
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (3) {input.modalakhir} / {input.modalawal} = (1 + p)
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (4) {Temp_Modalakhir / Temp_Modalawal} = (1 + p)
                <sup>{Temp_Lamapinjam}</sup>
              </p>
              <p>
                (5) <sup>{Temp_Lamapinjam}</sup>&#8730;
                {Temp_Modalakhir / Temp_Modalawal} = 1 + p
              </p>
              <p>
                (6){" "}
                {Math.pow(
                  Temp_Modalakhir / Temp_Modalawal,
                  1 / Temp_Lamapinjam
                )}{" "}
                = 1 + p
              </p>
              <p>
                (7) p ={" "}
                {Math.pow(
                  Temp_Modalakhir / Temp_Modalawal,
                  1 / Temp_Lamapinjam
                )}{" "}
                - 1
              </p>
              {/* <p>
                (8) p = {resW.hasil}%/{input.periode} {input.periodeOpt} ={" "}
                {resW.hasil * (12 / Temp_Lamapinjam)}
              </p> */}
              <p>
                (8) p = {resP.hasil}%/{input.periode} {input.periodeOpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default BM;
