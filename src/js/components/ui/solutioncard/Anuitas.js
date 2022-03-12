import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
  hitungBungaAwal,
  hitungNilaiAnuitas,
  hitungKen,
} from "../../../../service/anuitasService";
import {
  AnuitasOpt,
  NilaiAnuitas,
} from "../../../components/ui/form/anuitasformtype";

const Anitas = ({ inputs, input, menu }) => {
  // const resA = hitungNilaiAnuitas(inputs, input);
  // const resN = hitungKen(inputs, input);
  //   const resP = hitungPersentase(inputs, input);
  //   const resW = hitungLamaPeluruhan(inputs, input);
  //   var res = resNW;

  // console.log(menu.name, resA.lamapembayaran);
  if (menu.name === "nilaianuitas") {
    var res = hitungNilaiAnuitas(inputs, input);
  } else if (menu.name === "KeN") {
    var res = hitungKen(inputs, input);
  }
  var Temp_Lamapinjam = res.lamapembayaran;
  var Temp_modal = res.nilaipinjaman;
  var Temp_Persentase = res.bunga;
  var Temp_Hasil = res.hasil;
  let hasilarray = res.hasilarray;

  if (menu.name === "nilaianuitas") {
    const data = React.useMemo(() => hasilarray, []);

    const columns = React.useMemo(
      () => [
        {
          Header: "Ke",
          accessor: "nomor", // accessor is the "key" in the data
        },
        {
          Header: "angsuran",
          accessor: "angsuran",
        },
        {
          Header: "bunga",
          accessor: "bunga",
        },
        {
          Header: "Besar anuitas",
          accessor: "anuitas",
        },
        {
          Header: "Sisa pinjaman",
          accessor: "sisapinjaman",
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
                  <p>M = {input.nilaipinjaman}</p>
                  <p>
                    p = {input.bunga}% = {Temp_Persentase}
                  </p>
                  <p>w = {Temp_Lamapinjam}</p>
                </div>
                <br></br>
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    A = (M x p) / 1 - (1+p)<sup>-w</sup>
                  </span>
                </p>
                <p>
                  (2) A = ({input.nilaipinjaman} x {Temp_Persentase}) / 1 - (1+
                  {Temp_Persentase})<sup>-{Temp_Lamapinjam}</sup>
                </p>
                <p>
                  (3) A = (
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  ) / 1 - ({Temp_Persentase + 1})<sup>-{Temp_Lamapinjam}</sup>
                </p>
                <p>
                  (4) A ={" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / 1 - (
                  {Math.pow(1 - Temp_Persentase, Temp_Lamapinjam).toFixed(2)})
                </p>
                <p>
                  {" "}
                  (5) A ={" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  /{" "}
                  {1 -
                    Math.pow(1 - Temp_Persentase, Temp_Lamapinjam).toFixed(2)}
                </p>
                <p>(6) A = {res.hasil}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 mt-4 rounded-t-lg overflow-x-auto">
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
  } else if (menu.name === "KeN") {
    var A = res.hasil;
    var b1 = Temp_modal * Temp_Persentase;
    var a1 = res.hasil - Temp_modal * Temp_Persentase;
    var an = a1 * Math.pow(1 + Temp_Persentase, input.n - 1);
    var bn = A - an;
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
                <p>M = {input.nilaipinjaman}</p>
                <p>
                  p = {input.bunga}% = {Temp_Persentase}
                </p>
                <p>w = {Temp_Lamapinjam}</p>
              </div>
              <p className="font-bold">1. Mencari Nilai Anuitas</p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    A = (M x p) / 1 - (1+p)<sup>-w</sup>
                  </span>
                </p>
                <p>
                  (2) A = ({input.nilaipinjaman} x {Temp_Persentase}) / 1 - (1+
                  {Temp_Persentase})<sup>-{Temp_Lamapinjam}</sup>
                </p>
                <p>
                  (3) A = (
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  ) / 1 - ({Temp_Persentase + 1})<sup>-{Temp_Lamapinjam}</sup>
                </p>
                <p>
                  (4) A ={" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / 1 - (
                  {Math.pow(1 - Temp_Persentase, Temp_Lamapinjam).toFixed(2)})
                </p>
                <p>
                  {" "}
                  (5) A ={" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  /{" "}
                  {1 -
                    Math.pow(1 - Temp_Persentase, Temp_Lamapinjam).toFixed(2)}
                </p>
                <p>
                  (6) A ={" "}
                  {res.hasil
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <p className="font-bold">
                2. Mencari Nilai bunga pertama (b<sub>1</sub>)
              </p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    b<sub>1</sub> = M x p
                  </span>
                </p>
                <p>
                  (2) b<sub>1</sub> = {input.nilaipinjaman} x {Temp_Persentase}
                </p>
                <p>
                  (3) b<sub>1</sub> ={" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <p className="font-bold">
                3. Mencari Nilai angsuran pertama (a<sub>1</sub>)
              </p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    a<sub>1</sub> = A - b<sub>1</sub>
                  </span>
                </p>
                <p>
                  (2) a<sub>1</sub> ={" "}
                  {res.hasil
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  -{" "}
                  {(Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>
                  (3) a<sub>1</sub> ={" "}
                  {(res.hasil - Temp_modal * Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <p className="font-bold">
                4. Mencari Nilai angsuran ke-{input.n} (a<sub>{input.n}</sub>)
              </p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    a<sub>{input.n}</sub> = a<sub>1</sub> (1+p)
                    <sup>{input.n} - 1</sup>
                  </span>
                </p>
                <p>
                  (2) a<sub>{input.n}</sub> ={" "}
                  {a1
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  x (1+
                  {Temp_Persentase})<sup>{input.n} - 1</sup>
                </p>
                <p>
                  (3) a<sub>{input.n}</sub> ={" "}
                  {a1
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  x {Math.pow(1 + Temp_Persentase, input.n - 1).toFixed(8)}
                </p>
                <p>
                  (4) a<sub>{input.n}</sub> ={" "}
                  {(a1 * Math.pow(1 + Temp_Persentase, input.n - 1))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <p className="font-bold">
                5. Mencari Nilai bunga ke-{input.n} (b<sub>{input.n}</sub>)
              </p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    b<sup>{input.n}</sup> = A - a<sub>{input.n}</sub>
                  </span>
                </p>
                <p>
                  (2) b<sub>{input.n}</sub> ={" "}
                  {A.toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  -{" "}
                  {an
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>
                  (3) b<sub>{input.n}</sub> ={" "}
                  {(A - an)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
              <p className="font-bold">
                6. Mencari Sisa pinjaman ke-{input.n - 1} (S
                <sub>{input.n - 1}</sub>)
              </p>
              <div className="pl-2">
                <p>
                  (1) Rumus:{" "}
                  <span className="font-semibold">
                    S<sub>{input.n - 1}</sub> = b<sub>{input.n}</sub> / p
                  </span>
                </p>
                <p>
                  (2) S<sub>{input.n - 1}</sub> ={" "}
                  {bn
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / {Temp_Persentase}
                </p>
                <p>
                  (3) S<sub>{input.n - 1}</sub> ={" "}
                  {(bn / Temp_Persentase)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Anitas;
