const PeluruhanOpt = [
  { label: "Hitung nilai akhir peluruhan ke-n (Nw)", name: "nilaiakhir" },
  { label: "Mencari nilai awal suatu peluruhan (N0)", name: "nilaiawal" },
  { label: "Mencari besar persentase peluruhan (p)", name: "persentase" },
  { label: "Mencari lama peluruhan (w)", name: "lamapeluruhan" },
];

const NilaiAkhir = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  {
    label: "Persentase peluruhan",
    name: "persentase",
    persen: true,
  },
  {
    label: "Lama peluruhan (w)",
    name: "lamapeluruhan",
  },
];
const NilaiAwal = [
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Persentase peluruhan",
    name: "persentase",
    persen: true,
  },
  {
    label: "Lama peluruhan (w)",
    name: "lamapeluruhan",
  },
];
const Persentase = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Lama peluruhan (w)",
    name: "lamapeluruhan",
  },
];
const LamaPeluruhan = [
  { label: "Nilai awal (N0)", name: "nilaiawal" },
  { label: "Nilai akhir (Nw)", name: "nilaiakhir" },
  {
    label: "Persentase peluruhan",
    name: "persentase",
    persen: true,
  },
];

export { PeluruhanOpt, NilaiAkhir, NilaiAwal, Persentase, LamaPeluruhan };
