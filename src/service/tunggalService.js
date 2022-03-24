import { convertToFormat } from "../js/components/ui/form/bungaformtype";

// const decodecommas(x){
//   return x = "1,000"
// }

const hitungModalAkhir = (inputs, formData, Swal) => {
  let isZero = false; // UNUTUK MEMASTIKAN INPUT TIDAK BOLEH "0"
  for (const key in formData) {
    if (formData[key] == "0") {
      isZero = true;
    }
  }
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name] &&
    !isZero
  ) {
    //Mw = M(1+wp)
    let bunga, lamapinjam, periode;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    //Mw = M(1+wp)
    let modalawal = formData[inputs[0].name].toString().replace(/,/g, "");
    let hasil = [
      // Number(formData.modalawal) *
      //   (1 + (((bunga / 100) * periode) / 12) * lamapinjam),
      // lamapinjam,
      Number(modalawal) * (1 + (((bunga / 100) * periode) / 12) * lamapinjam),
      lamapinjam,
    ];
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Jumlah modal akhir pada periode pembayaran ke-${
          hasil[1]
        } bernilai: Rp${hasil[0]
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil[0]
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        bunga: bunga,
        lamapinjam: lamapinjam,
      };
    }
  } else {
    if (Swal !== undefined) {
      Swal.fire({
        title: "Error",
        text: "Maaf, tolong masukan nilai yang diketahui. Nilai tidak boleh 0 :)",
        icon: "error",
        confirmButtonText: "Oke, saya mengerti",
      });
    }
  }
};

const hitungModalAwal = (inputs, formData, Swal) => {
  let isZero = false; // UNUTUK MEMASTIKAN INPUT TIDAK BOLEH "0"
  for (const key in formData) {
    if (formData[key] == "0") {
      isZero = true;
    }
  }
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name] &&
    !isZero
  ) {
    let Temp = periode;
    let bunga, lamapinjam, periode;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    //M = Mw - Mw*((p*w)/((p*w)+1))
    if (formData.periodeOpt === "Bulan") {
      Temp = 12 / periode;
    } else {
      Temp = 1;
    }
    let modalakhir = formData[inputs[0].name].replace(/,/g, "");
    let hasil =
      // modalakhir -
      // modalakhir *
      //   (((bunga / 100) * lamapinjam) / ((bunga / 100) * lamapinjam + 1));
      // Mw / (1 + w * p * Temp);
      modalakhir / (1 + lamapinjam * (bunga / 100 / Temp));
    console.log(bunga / 100 / Temp);
    console.log(lamapinjam);
    hasil = hasil
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Jumlah modal awalnya sebesar: Rp${hasil}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        bunga: bunga,
        lamapinjam: lamapinjam,
      };
    }
  } else {
    Swal.fire({
      title: "Error",
      text: "Maaf, tolong masukan nilai yang diketahui. Nilai tidak boleh 0 :)",
      icon: "error",
      confirmButtonText: "Oke, saya mengerti",
    });
  }
};

const hitungLamaTanggungan = (inputs, formData, Swal) => {
  let isZero = false; // UNUTUK MEMASTIKAN INPUT TIDAK BOLEH "0"
  for (const key in formData) {
    if (formData[key] == "0") {
      isZero = true;
    }
  }
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name] &&
    !isZero
  ) {
    console.log(inputs);
    //w = (Mw - M)/(M*p)
    let modalakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    let modalawal = formData[inputs[1].name].toString().replace(/,/g, "");
    // let modalakhir = Number(formData.modalakhir);
    // let modalawal = Number(formData.modal);
    let bunga;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    //w = (Mw - M)/(M*[])
    let hasil = (modalakhir - modalawal) / ((modalawal * bunga) / 100);
    // console.log(`${hasil}, ${modalakhir}, ${modalawal}, ${bunga}`);
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Lama tanggungan selama: ${hasil} tahun`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        bunga: bunga,
        // lamapinjam: lamapinjam,
      };
    }
  } else {
    Swal.fire({
      title: "Error",
      text: "Maaf, tolong masukan nilai yang diketahui. Nilai tidak boleh 0 :)",
      icon: "error",
      confirmButtonText: "Oke, saya mengerti",
    });
  }
};

const hitungSukuBunga = (inputs, formData, Swal) => {
  let isZero = false; // UNUTUK MEMASTIKAN INPUT TIDAK BOLEH "0"
  for (const key in formData) {
    if (formData[key] == "0") {
      isZero = true;
    }
  }
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name] &&
    !isZero
  ) {
    //p = (Mw - M)/(M*w)
    let modalakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    let modalawal = formData[inputs[1].name].toString().replace(/,/g, "");
    // let modalakhir = Number(formData.modalakhir);
    // let modalawal = Number(formData.modal);
    let lama, lamapinjam, periode;
    const converted = convertToFormat(formData);
    lamapinjam = converted.lamapinjam;
    lama = formData.periodeOpt;
    periode = converted.periode;
    //p = (Mw - M)/(M*w)
    if (formData.lamapinjam !== lamapinjam) {
      lama = "Tahun";
    } else {
      lama = "Bulan";
    }
    let hasil =
      ((modalakhir - modalawal) / (modalawal * lamapinjam)) *
      (12 / periode) *
      100;
    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Suku Bunga: ${hasil / (12 / periode)}%/${
    //     formData.periode
    //   } ${lama}`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Suku Bunga: ${hasil / (12 / periode)}%/${
          formData.periode
        } ${lama}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        lama: lama,
        lamapinjam: lamapinjam,
      };
    }
  } else {
    Swal.fire({
      title: "Error",
      text: "Maaf, tolong masukan nilai yang diketahui. Nilai tidak boleh 0 :)",
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
