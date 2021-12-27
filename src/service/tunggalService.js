import { convertToFormat } from "../js/components/ui/form/bungaformtype";

const hitungModalAkhir = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //Mw = M(1+wp)
    let bunga, lamapinjam, periode;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    //Mw = M(1+wp)
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

const hitungModalAwal = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //M = Mw - Mw*((p*w)/((p*w)+1))
    let modalakhir = Number(formData.modalakhir);
    let bunga, lamapinjam;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
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

const hitungLamaTanggungan = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //w = (Mw - M)/(M*p)
    let modalakhir = Number(formData.modalakhir);
    let modalawal = Number(formData.modal);
    let bunga;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    //w = (Mw - M)/(M*[])
    let hasil = (modalakhir - modalawal) / ((modalawal * bunga) / 100);

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

const hitungSukuBunga = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //p = (Mw - M)/(M*w)
    let modalakhir = Number(formData.modalakhir);
    let modalawal = Number(formData.modal);
    let lama, lamapinjam, periode;
    const converted = convertToFormat(formData);
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    if (formData.lamapinjam !== lamapinjam) {
      lama = "Tahun";
    } else {
      lama = "Bulan";
    }
    //p = (Mw - M)/(M*w)
    let hasil =
      ((modalakhir - modalawal) / (modalawal * lamapinjam)) *
      (12 / periode) *
      100;
    Swal.fire({
      title: "Hasil Akhir",
      text: `Suku Bunga: ${hasil}%/${lama}`,
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

export {
  hitungModalAkhir,
  hitungModalAwal,
  hitungLamaTanggungan,
  hitungSukuBunga,
};
