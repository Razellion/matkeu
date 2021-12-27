const BungaOpt = [
  { label: "Mencari besar modal pada waktu ke- n (Mw)", name: "modalakhir" },
  { label: "Mencari besar modal awal (M)", name: "modalawal" },
  { label: "Mencari lama tanggungan (w)", name: "lamapinjam" },
  { label: "Mencari besar suku bunga (p)", name: "sukubunga" },
];

const convertToFormat = (formData) => {
  let bunga, lamapinjam, periode;
  if (formData.bungaOpt === "%/Bulan") {
    bunga = Number(formData.bunga) * 12;
  } else if (formData.bungaOpt === "%/Triwulan") {
    bunga = Number(formData.bunga) * 4;
  } else if (formData.bungaOpt === "%/Catur Wulan") {
    bunga = Number(formData.bunga) * 3;
  } else if (formData.bungaOpt === "%/Semester") {
    bunga = Number(formData.bunga) * 2;
  } else {
    bunga = Number(formData.bunga);
  }
  if (formData.periodeOpt === "Bulan") {
    periode = Number(formData.periode);
  } else {
    periode = Number(formData.periode) * 12;
  }
  if (formData.lamapinjamOpt === "Bulan") {
    lamapinjam = Number(formData.lamapinjam) / periode;
  } else {
    lamapinjam = (Number(formData.lamapinjam) * 12) / periode;
  }
  return { bunga: bunga, lamapinjam: lamapinjam, periode: periode };
};
// ====================== Bunga Tunggal / Majemuk ======================
const ModalAkhir = [
  { label: "Modal Awal (M)", name: "modalawal" },
  {
    label: "Besar Bunga (p)",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Lama pinjaman / investasi (w)",
    name: "lamapinjam",
    opt: ["Bulan", "Tahun"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Bulan", "Tahun"],
  },
];

const TotalBunga = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  { label: "Besar Bunga (p)", name: "bunga" },
  { label: "Lama pinjaman / investasi (w)", name: "lamapinjam" },
];

const ModalAwal = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  {
    label: "Besar Bunga (p)",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Lama pinjaman / investasi (w)",
    name: "lamapinjam",
    opt: ["Bulan", "Tahun"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Bulan", "Tahun"],
  },
];

const LamaTanggungan = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  { label: "Modal Awal (M)", name: "modal" },
  {
    label: "Besar Bunga (p)",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Bulan", "Tahun"],
  },
];

const SukuBunga = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  { label: "Modal Awal (M)", name: "modal" },
  {
    label: "Lama pinjaman / investasi (w)",
    name: "lamapinjam",
    opt: ["Bulan", "Tahun"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Bulan", "Tahun"],
  },
];

export {
  BungaOpt,
  ModalAkhir,
  TotalBunga,
  ModalAwal,
  LamaTanggungan,
  SukuBunga,
  convertToFormat,
};
