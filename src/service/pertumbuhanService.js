const hitungNilaiAkhir = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //Nw = N(1+p)^w

    //Nw = N(1+p)^w
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

const hitungPersentase = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //p = rootsq((Nw / N), w) - 1

    //p = rootsq((Mw / M), w) - 1
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

const hitungLamaPertumbuhan = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name]
  ) {
    //w = log(Nw/N)/log(1+p)

    //w = log(Nw/N)/log(1+p)
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

export { hitungNilaiAkhir, hitungPersentase, hitungLamaPertumbuhan };
