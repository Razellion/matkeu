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

const hitungModalAkhir = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //Mw = M(1+wp)
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
    let hasil = [
      Number(formData.modalawal) *
        (1 + (((bunga / 100) * periode) / 12) * lamapinjam),
      lamapinjam,
    ];

    Swal.fire({
      title: "Hasil Akhir",
      text: `Jumlah modal akhir pada periode pembayaran ke-${hasil[1]} bernilai: Rp${hasil[0]}`,
      icon: "success",
      confirmButtonText: "Lanjut Pembahasan",
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Maaf, tolong masukan nilai yang diketahui :)",
      icon: "error",
      confirmButtonText: "Oke, saya mengerti",
    });
  }
};

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

const hitungModalAwal = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //M = Mw - Mw*((p*w)/((p*w)+1))
    let modalakhir = Number(formData.modalakhir);
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
    //M = Mw - Mw*((p*w)/((p*w)+1))
    let hasil =
      modalakhir -
      modalakhir *
        (((bunga / 100) * lamapinjam) / ((bunga / 100) * lamapinjam + 1));

    Swal.fire({
      title: "Hasil Akhir",
      text: `Jumlah modal awalnya sebesar: Rp${hasil}`,
      icon: "success",
      confirmButtonText: "Lanjut Pembahasan",
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Maaf, tolong masukan nilai yang diketahui :)",
      icon: "error",
      confirmButtonText: "Oke, saya mengerti",
    });
  }
};

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
  hitungModalAkhir,
  TotalBunga,
  ModalAwal,
  hitungModalAwal,
  LamaTanggungan,
  SukuBunga,
};
