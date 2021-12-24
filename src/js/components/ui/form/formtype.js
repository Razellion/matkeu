const BungaOpt = [
  { label: "Mencari besar modal pada waktu ke- n (Mw)", name: "modalakhir" },
  { label: "Mencari besar modal awal (M)", name: "modalawal" },
  { label: "Mencari lama tanggungan (w)", name: "lamapinjam" },
  { label: "Mencari besar suku bunga (p)", name: "sukubunga" },
];
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
};
