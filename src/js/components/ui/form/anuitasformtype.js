const AnuitasOpt = [
  { label: "Mencari nilai Anuitas (A)", name: "nilaianuitas" },
  {
    label: "Mencari angsuran,bunga,dan sisa pinjam ke-n",
    name: "KeN",
  },
];

const convertSolution = (input) => {
  //ini untuk hitung cepat
  let bunga, lamapembayaran;
  if (
    (input.bungaOpt === "%/Tahun" && input.lamapembayaranOpt === "Tahun") ||
    (input.bungaOpt === "%/Bulan" && input.lamapembayaranOpt === "Bulan")
  ) {
    bunga = Number(input.bunga) / 100;
    lamapembayaran = Number(input.lamapembayaran);
  } else {
    if (input.bungaOpt === "%/Bulan") {
      bunga = Number(input.bunga) / 100 / 1;
    } else if (input.bungaOpt === "%/Triwulan") {
      bunga = Number(input.bunga) / 100 / 3;
    } else if (input.bungaOpt === "%/Catur Wulan") {
      bunga = Number(input.bunga) / 100 / 4;
    } else if (input.bungaOpt === "%/Semester") {
      bunga = Number(input.bunga) / 100 / 6;
    } else {
      bunga = Number(input.bunga) / 100 / 12;
    }

    if (input.lamapembayaranOpt === "Tahun") {
      lamapembayaran = Number(input.lamapembayaran) * 12;
    }
  }
  // console.log(input.bungaOpt, input.lamapembayaranOpt);
  return { bunga: bunga, lamapembayaran: lamapembayaran };
};

const NilaiAnuitas = [
  { label: "Besar pinjaman (M)", name: "nilaipinjaman" },
  {
    label: "Besar bunga",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Lama pembayaran (w)",
    name: "lamapembayaran",
    opt: ["Tahun", "Bulan"],
  },
];
const KEN = [
  { label: "Besar pinjaman (M)", name: "nilaipinjaman" },
  {
    label: "Besar bunga",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Lama pembayaran (w)",
    name: "lamapembayaran",
    opt: ["Tahun", "Bulan"],
  },
  {
    label: "Periode yang dicari (n)",
    name: "n",
  },
];
// const TabelPelunasan = [
//   { label: "Nilai awal (N0)", name: "nilaiawal" },
//   { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
//   {
//     label: "Lama peluruhan (w)",
//     name: "lamapeluruhan",
//   },
// ];

export { AnuitasOpt, convertSolution, NilaiAnuitas, KEN };
