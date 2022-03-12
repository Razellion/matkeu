const PertumbuhanOpt = [
  { label: "Hitung jumlah pertumbuhan ke-n (Nw)", name: "nilaiakhir" },
  { label: "Mencari nilai awal pertumbuhan (N0)", name: "nilaiawal" },
  { label: "Mencari lama pertumbuhan (w)", name: "lamapertumbuhan" },
  { label: "Mencari besar persentase pertumbuhan (p)", name: "persentase" },
];

const NilaiAkhir = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  {
    label: "Persentase pertumbuhan",
    name: "persentase",
    persen: true,
  },
  {
    label: "Lama pertumbuhan (w)",
    name: "lamapertumbuhan",
  },
];
const NilaiAwal = [
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Persentase pertumbuhan",
    name: "persentase",
    persen: true,
  },
  {
    label: "Lama pertumbuhan (w)",
    name: "lamapertumbuhan",
  },
];
const Persentase = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Lama pertumbuhan (w)",
    name: "lamapertumbuhan",
  },
];
const LamaPertumbuhan = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Persentase pertumbuhan",
    name: "persentase",
    persen: true,
  },
];

export { PertumbuhanOpt, NilaiAkhir, NilaiAwal, Persentase, LamaPertumbuhan };
