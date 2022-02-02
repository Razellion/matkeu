const hitungBungaAwal = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //b1 = M*p

    //b1 = M*p
    let hasil;

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

const hitungNilaiAnuitas = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //A = (M*p)/(1-((1+p)^-w))

    //A = (M*p)/(1-((1+p)^-w))
    let hasil;

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

const hitungNilaiAngsuran = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //a1 = A - b1
    //aw = a1(1+i)^w-1

    //a1 = A - b1
    //aw = a1(1+i)^w-1
    let hasil;

    Swal.fire({
      title: "Hasil Akhir",
      text: `Lama tanggungan selama: ${hasil} tahun`,
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

export { hitungBungaAwal, hitungNilaiAnuitas, hitungNilaiAngsuran };
