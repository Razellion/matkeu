const BungaOpt = [
  { label: "Mencari besar modal pada waktu ke- n (Mw)", name: "modalakhir" },
  { label: "Mencari besar modal awal (M)", name: "modalawal" },
  { label: "Mencari lama tanggungan (w)", name: "lamapinjam" },
  { label: "Mencari besar suku bunga (p)", name: "sukubunga" },
];
const convertSolution = (input) => {
  // INI UNTUK CONVERT DI BAGIAN SOLUTION CARD
  let Temp_Bunga,
    Temp_Period,
    Temp_Lamapinjam,
    Temp_Modalawal,
    Temp_Modalakhir,
    BungaPerPeriode,
    Temp_BungaOpt;
  Temp_Lamapinjam = Number(input.lamapinjam);
  Temp_Period = Number(input.periode);
  Temp_Bunga = Number(input.bunga);
  BungaPerPeriode = 0;

  // // INI BUAT PERIODE
  // if (input.periodeOpt === "Bulan" && input.bungaOpt === "%/Tahun") {
  //   Temp_Period = Temp_Period;
  // }&& input.bungaOpt === "%/Tahun"
  // if (input.periodeOpt === "Tahun") {
  //   Temp_Period = 12 * Temp_Period;
  // }
  // INI BUAT Periode
  // Temp_Lamapinjam = Number(input.lamapinjam);
  // Temp_Period = Number(input.periode);
  // if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
  //   Temp_Period = Temp_Period;
  // } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Tahun") {
  //   Temp_Period = Temp_Period * 12;
  // } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Bulan") {
  //   Temp_Period = Temp_Period;
  // } else if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Tahun") {
  //   Temp_Period = Temp_Period * 12;
  // }
  // INI BUAT CONVERT SATUAN SUKUBUNGA yg %/.... jadi value per bulan
  if (input.bungaOpt === "%/Bulan") {
    Temp_BungaOpt = 1;
    if (input.lamapinjamOpt === input.periodeOpt) {
      BungaPerPeriode = Temp_Bunga / (Temp_BungaOpt / Temp_Period) / 100;
    } else if (input.lamapinjamOpt !== input.periodeOpt) {
      if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
        BungaPerPeriode = Temp_Bunga / (1 / Temp_Period) / 100;
      } else if (
        input.lamapinjamOpt === "Bulan" &&
        input.periodeOpt === "Tahun"
      ) {
        Temp_Period = Temp_Period * 1;
        BungaPerPeriode = Temp_Bunga / (1 / Temp_Period) / 100;
      }
    }
  } else if (input.bungaOpt === "%/Triwulan") {
    Temp_BungaOpt = 3;
    if (input.lamapinjamOpt === input.periodeOpt) {
      BungaPerPeriode = Temp_Bunga / (Temp_BungaOpt / Temp_Period) / 100;
    } else if (input.lamapinjamOpt !== input.periodeOpt) {
      if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
        BungaPerPeriode = Temp_Bunga / (3 / Temp_Period) / 100;
      } else if (
        input.lamapinjamOpt === "Bulan" &&
        input.periodeOpt === "Tahun"
      ) {
        Temp_Period = Temp_Period * 3;
        BungaPerPeriode = Temp_Bunga / (3 / Temp_Period) / 100;
      }
    }
  } else if (input.bungaOpt === "%/Catur Wulan") {
    Temp_BungaOpt = 4;
    if (input.lamapinjamOpt === input.periodeOpt) {
      BungaPerPeriode = Temp_Bunga / (Temp_BungaOpt / Temp_Period) / 100;
    } else if (input.lamapinjamOpt !== input.periodeOpt) {
      if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
        BungaPerPeriode = Temp_Bunga / (4 / Temp_Period) / 100;
      } else if (
        input.lamapinjamOpt === "Bulan" &&
        input.periodeOpt === "Tahun"
      ) {
        Temp_Period = Temp_Period * 4;
        BungaPerPeriode = Temp_Bunga / (4 / Temp_Period) / 100;
      }
    }
  } else if (input.bungaOpt === "%/Semester") {
    Temp_BungaOpt = 6;
    if (input.lamapinjamOpt === input.periodeOpt) {
      BungaPerPeriode = Temp_Bunga / (Temp_BungaOpt / Temp_Period) / 100;
    } else if (input.lamapinjamOpt !== input.periodeOpt) {
      if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
        BungaPerPeriode = Temp_Bunga / (6 / Temp_Period) / 100;
      } else if (
        input.lamapinjamOpt === "Bulan" &&
        input.periodeOpt === "Tahun"
      ) {
        Temp_Period = Temp_Period * 6;
        BungaPerPeriode = Temp_Bunga / (6 / Temp_Period) / 100;
      }
    }
  } else if (input.bungaOpt === "%/Tahun") {
    Temp_BungaOpt = 12;
    if (input.lamapinjamOpt === input.periodeOpt) {
      if (input.periodeOpt === "Tahun") {
        Temp_Period = 12 * Temp_Period;
      }
      BungaPerPeriode = Temp_Bunga / (Temp_BungaOpt / Temp_Period) / 100;
    } else if (input.lamapinjamOpt !== input.periodeOpt) {
      if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
        BungaPerPeriode = Temp_Bunga / (12 / Temp_Period) / 100;
      } else if (
        input.lamapinjamOpt === "Bulan" &&
        input.periodeOpt === "Tahun"
      ) {
        Temp_Period = Temp_Period * 12;
        console.log(Temp_Period);
        BungaPerPeriode = Temp_Bunga / (12 / Temp_Period) / 100;
      }
    }
  }

  console.log(Temp_Bunga, Temp_Lamapinjam, Temp_Period, BungaPerPeriode);
  if (input.modalawal !== undefined) {
    Temp_Modalawal = input.modalawal.toString().replace(/,/g, "");
  }
  if (input.modalakhir !== undefined) {
    Temp_Modalakhir = input.modalakhir.toString().replace(/,/g, "");
  }

  // INI BUAT Periode
  // Temp_Lamapinjam = Number(input.lamapinjam);
  // Temp_Period = Number(input.periode);
  // if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
  //   Temp_Period = Temp_Period;
  // } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Tahun") {
  //   Temp_Period = Temp_Period * 12;
  // } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Bulan") {
  //   Temp_Period = Temp_Period;
  // } else if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Tahun") {
  //   Temp_Period = Temp_Period * 12;
  // }

  // INI BUAT LAMA PINJAM
  // Temp_Lamapinjam = Number(input.lamapinjam);
  Temp_Period = Number(input.periode);
  if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Bulan") {
    Temp_Lamapinjam = (Temp_Lamapinjam * 12) / Temp_Period;
  } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Tahun") {
    Temp_Lamapinjam = (Temp_Lamapinjam * 1) / (Temp_Period * 12);
  } else if (input.lamapinjamOpt === "Bulan" && input.periodeOpt === "Bulan") {
    Temp_Lamapinjam = Temp_Lamapinjam / Temp_Period;
  } else if (input.lamapinjamOpt === "Tahun" && input.periodeOpt === "Tahun") {
    Temp_Lamapinjam = Temp_Lamapinjam / Temp_Period;
  }

  return {
    bunga: Temp_Bunga,
    lamapinjam: Temp_Lamapinjam,
    periode: Temp_Period,
    modalawal: Temp_Modalawal,
    modalakhir: Temp_Modalakhir,
    BungaPerPeriode: BungaPerPeriode,
    Temp_BungaOpt: Temp_BungaOpt,
  };
};

const convertToFormat = (formData) => {
  console.log(formData);
  //ini untuk hitung cepat
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
    opt: ["Tahun", "Bulan"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Tahun", "Bulan"],
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
    opt: ["Tahun", "Bulan"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Tahun", "Bulan"],
  },
];

const LamaTanggungan = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  { label: "Modal Awal (M)", name: "modalawal" },
  {
    label: "Besar Bunga (p)",
    name: "bunga",
    opt: ["%/Tahun", "%/Semester", "%/Catur Wulan", "%/Triwulan", "%/Bulan"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Tahun", "Bulan"],
  },
];

const SukuBunga = [
  { label: "Modal Akhir (Mw)", name: "modalakhir" },
  { label: "Modal Awal (M)", name: "modalawal" },
  {
    label: "Lama pinjaman / investasi (w)",
    name: "lamapinjam",
    opt: ["Tahun", "Bulan"],
  },
  {
    label: "Periode Pembayaran setiap",
    name: "periode",
    opt: ["Tahun", "Bulan"],
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
  convertSolution,
};
