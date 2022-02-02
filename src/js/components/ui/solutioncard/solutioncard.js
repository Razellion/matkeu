import React from "react";
import { hitungModalAkhir } from "../../../../service/tunggalService";

const SolutionCard = ({ inputs, input }) => {
  const res = hitungModalAkhir(inputs, input);
  console.log(res);
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
                {input.bungaOpt} ={" "}
                {`${Number(input.bunga) * Number(input.periode)}%/${
                  input.periode
                } ${input.periodeOpt}`}
              </p>
              <p>
                w ={" "}
                {`${input.lamapinjam} ${input.lamapinjamOpt} / ${input.periode} ${input.periodeOpt}`}
              </p>
              <p>w = {res.lamapinjam}</p>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">Mw = M(1 + wp)</span>
              </p>
              <p>
                (2) Mw = {input.modalawal} (1 + {res.lamapinjam} x{" "}
                {(Number(input.bunga) * Number(input.periode)) / 100})
              </p>
              <p>
                (3) Mw = {input.modalawal} (1 +{" "}
                {(
                  Number(input.lamapinjam) *
                  (Number(input.bunga) / 100)
                ).toFixed(1)}
                )
              </p>
              <p>
                (4) Mw = {input.modalawal} (
                {(
                  1 +
                  Number(input.lamapinjam) * (Number(input.bunga) / 100)
                ).toFixed(1)}
                )
              </p>
              <p>(5) Mw = {res.hasil}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
