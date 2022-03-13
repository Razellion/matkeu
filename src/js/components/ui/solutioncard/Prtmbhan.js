/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
  hitungNilaiAkhir,
  hitungNilaiAwal,
  hitungPersentase,
  hitungLamaPertumbuhan,
} from "../../../../service/pertumbuhanService";
import {
  PertumbuhanOpt,
  NilaiAkhir,
  NilaiAwal,
  Persentase,
  LamaPertumbuhan,
} from "../../../components/ui/form/pertumbuhanformtype";

const Prtmbhan = ({ inputs, input, menu }) => {
  const resNW = hitungNilaiAkhir(inputs, input);
  const resN = hitungNilaiAwal(inputs, input);
  const resW = hitungLamaPertumbuhan(inputs, input);
  const resP = hitungPersentase(inputs, input);
  var res = resNW;
  if (menu.name === "nilaiakhir") {
    res = resNW;
  } else if (menu.name === "nilaiawal") {
    res = resN;
  } else if (menu.name === "lamapertumbuhan") {
    res = resW;
  } else if (menu.name === "persentase") {
    res = resP;
  }
  //   const convert = convertSolution(input);
  //   var Temp_Period = convert.periode;
  var Temp_Lamapinjam = res.lamapinjam;
  var Temp_nilaiakhir = res.nilaiakhir;
  var Temp_Persentase = res.persentase;
  var Temp_Nilaiawal = res.nilaiawal;
  // var temp_lamapertumbuhan = res.lamapertumbuhan;
  var Temp_Hasil = res.hasil;
  let hasilarray = res.hasilarray;
  // Temp_Hasil = Temp_Hasil.toFixed(2)
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   var Temp_Modalakhir = convert.modalakhir;
  //   var BungaPerPeriode = convert.BungaPerPeriode;

  //   console.log(input.modalakhir);
  //   console.log(`Modal awal: ${Temp_Modalawal}`);
  //   console.log(`Modal akhir: ${Temp_Modalakhir}`);
  //   console.log(`Lama Pinjam: ${Temp_Lamapinjam}`);
  //   console.log(`Periode: ${Temp_Period}`);
  //   console.log(`Bunga: ${Temp_Bunga}`);
  //   console.log(`bunga Per periode: ${BungaPerPeriode}`);
  //   console.log(`HASIL = ${1 + Temp_Lamapinjam * BungaPerPeriode}`);

  // IF dibawah ini untuk menampilkan SOLUTION CARD ke antar muka
  if (menu.name === "nilaiakhir") {
    const data = React.useMemo(() => hasilarray, []);

    const columns = React.useMemo(
      () => [
        {
          Header: "Ke",
          accessor: "nomor", // accessor is the "key" in the data
        },
        {
          Header: "Nilai Awal",
          accessor: "nilaiawal",
        },
        {
          Header: "Pertumbuhan (%)",
          accessor: "pertumbuhan",
        },
        {
          Header: "Total Pertumbuhan",
          accessor: "totalpertumbuhan",
        },
        {
          Header: "Nilai Akhir",
          accessor: "nilaiakhir",
        },
      ],
      []
    );

    const tableInstance = useTable({ columns, data });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
    return (
      <>
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
                    N<sub>0</sub> = {input.nilaiawal}
                  </p>
                  <p>
                    p = {input.persentase}% = {Temp_Persentase}
                  </p>
                  <p>w = {input.lamapertumbuhan}</p>
                </div>
                <br></br>
                <p>
                  (1) Rumus yang digunakan:{" "}
                  <span className="font-semibold">
                    Nw = N(1+p)<sup>w</sup>
                  </span>
                </p>
                <p>
                  (2) Nw = {input.nilaiawal}(1 + {Temp_Persentase})
                  <sup>{input.lamapertumbuhan}</sup>
                </p>
                <p>
                  (3) Nw = {input.nilaiawal}({1 + Temp_Persentase})
                  <sup>{input.lamapertumbuhan}</sup>
                </p>
                <p>
                  (4) Nw = {input.nilaiawal}(
                  {Math.pow(1 + Temp_Persentase, input.lamapertumbuhan).toFixed(
                    2
                  )}
                  )
                </p>
                <p>
                  (5) Nw ={" "}
                  {resNW.hasil
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 mt-4 rounded-t-md overflow-x-auto">
          <table
            {...getTableProps()}
            className="text-center text-sm border-blue-400 shadow-lg"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  className="rounded-lg"
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="bg-blue-400 text-white px-3 "
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="bg-white p-2"
                          // style={{
                          //   padding: "10px",
                          //   border: "solid 1px gray",
                          //   background: "papayawhip",
                          // }}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  } else if (menu.name === "nilaiawal") {
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
                  N<sub>w</sub> = {input.nilaiakhir}
                </p>
                <p>
                  p = {input.persentase}% = {Temp_Persentase}
                </p>
                <p>w = {input.lamapertumbuhan}</p>
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">
                  Nw = N(1+p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.nilaiakhir} = N<sub>0</sub>(1 + {Temp_Persentase})
                <sup>{input.lamapertumbuhan}</sup>
              </p>
              <p>
                (3) {input.nilaiakhir} = N<sub>0</sub>({1 + Temp_Persentase})
                <sup>{input.lamapertumbuhan}</sup>
              </p>
              <p>
                {" "}
                (4) {input.nilaiakhir} = N<sub>0</sub>(
                {Math.pow(1 + Temp_Persentase, input.lamapertumbuhan).toFixed(
                  2
                )}
                )<sup>{input.lamapertumbuhan}</sup>
              </p>
              <p>
                (5) {input.nilaiakhir} /{" "}
                {Math.pow(1 + Temp_Persentase, input.lamapertumbuhan).toFixed(
                  2
                )}{" "}
                = N<sub>0</sub>
              </p>
              <p>
                (6) Nw ={" "}
                {resN.hasil
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menu.name === "lamapertumbuhan") {
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
                  N<sub>0</sub> = {input.nilaiawal}
                </p>
                <p>
                  N<sub>w</sub> = {input.nilaiakhir}
                </p>
                <p>p = {input.persentase}</p>
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">
                  Nw = N(1+p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.nilaiakhir} = {input.nilaiawal}(1 + {Temp_Persentase}
                )<sup>w</sup>
              </p>
              <p>
                (3) {input.nilaiakhir} / {input.nilaiawal} = (
                {1 + Temp_Persentase})<sup>w</sup>
              </p>
              <p>
                (4) {Temp_nilaiakhir / Temp_Nilaiawal} = ({1 + Temp_Persentase})
                <sup>w</sup>
              </p>
              <p>
                (5) log({Temp_nilaiakhir / Temp_Nilaiawal}) = w . log(
                {1 + Temp_Persentase})
              </p>
              <p>
                (6) log({Temp_nilaiakhir / Temp_Nilaiawal}) / log(
                {1 + Temp_Persentase}) = w
              </p>
              <p>(7) w = {res.hasil}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (menu.name === "persentase") {
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
                  N<sub>0</sub> = {input.nilaiawal}
                </p>
                <p>
                  N<sub>w</sub> = {input.nilaiakhir}
                </p>
                <p>w = {input.lamapertumbuhan}</p>
              </div>
              <br></br>
              <p>
                (1) Rumus yang digunakan:{" "}
                <span className="font-semibold">
                  Nw = N(1+p)<sup>w</sup>
                </span>
              </p>
              <p>
                (2) {input.nilaiakhir} = {input.nilaiawal}(1 + p )
                <sup>{input.lamapertumbuhan}</sup>
              </p>
              <p>
                (3) {input.nilaiakhir} / {input.nilaiawal} = (1 + p)
                <sup>{input.lamapertumbuhan}</sup>
              </p>
              <p>
                (4) <sup>{input.lamapertumbuhan}</sup>&#8730;
                {Temp_nilaiakhir / Temp_Nilaiawal} = (1 + p)
              </p>
              <p>
                (5){" "}
                {Math.pow(
                  Temp_nilaiakhir / Temp_Nilaiawal,
                  1 / input.lamapertumbuhan
                )}{" "}
                = 1 + p
              </p>
              <p>
                (6){" "}
                {Math.pow(
                  Temp_nilaiakhir / Temp_Nilaiawal,
                  1 / input.lamapertumbuhan
                )}{" "}
                - 1 = p
              </p>
              <p>
                (7) p = {res.hasil} = {res.hasil * 100}%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Prtmbhan;
