import { convertToFormat } from "../js/components/ui/form/bungaformtype";

const hitungModalAkhir = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //Mw = M(1+p)^w
    let bunga, lamapinjam, periode;
    const converted = convertToFormat(formData);
    let modalawal = formData[inputs[0].name].toString().replace(/,/g, "");
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    //Mw = M(1+p)^w
    let hasil = [
      modalawal * Math.pow(1 + ((bunga / 100) * periode) / 12, lamapinjam),
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
        text: "Maaf, tolong masukan nilai yang diketahui :)",
        icon: "error",
        confirmButtonText: "Oke, saya mengerti",
      });
    }
  }
};

const hitungModalAwal = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //M = Mw / (1+p)^w
    let modalakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    // let modalakhir = Number(formData.modalakhir);
    let bunga, lamapinjam, periode;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    //M = Mw / (1+p)^w
    let hasil =
      modalakhir / Math.pow(1 + bunga / 100 / (12 / periode), lamapinjam);

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Jumlah modal awalnya sebesar: Rp${hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil
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
        text: "Maaf, tolong masukan nilai yang diketahui :)",
        icon: "error",
        confirmButtonText: "Oke, saya mengerti",
      });
    }
  }
};

const hitungLamaTanggungan = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //w = log(Mw/M)/log(1+p)
    let modalakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    let modalawal = formData[inputs[1].name].toString().replace(/,/g, "");
    // let modalakhir = Number(formData.modalakhir);
    // let modalawal = Number(formData.modal);
    let bunga;
    const converted = convertToFormat(formData);
    bunga = converted.bunga;
    //w = log(Mw/M)/log(1+p)
    let hasil = Math.log(modalakhir / modalawal) / Math.log(1 + bunga / 100);
    hasil = Math.round(hasil);
    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Lama tanggungan selama: ${Math.round(hasil * 12)} bulan`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Lama tanggungan selama: ${Math.round(
          hasil
        )} Tahun atau sama dengan ${Math.round(hasil * 12)} Bulan`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        hasil: hasil,
        bunga: bunga,
        // lamapinjam: lamapinjam,
      };
    }
  } else {
    if (Swal !== undefined) {
      Swal.fire({
        title: "Error",
        text: "Maaf, tolong masukan nilai yang diketahui :)",
        icon: "error",
        confirmButtonText: "Oke, saya mengerti",
      });
    }
  }
};

const hitungSukuBunga = (inputs, formData, Swal) => {
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name]
  ) {
    //p = rootsq((Mw / M), w) - 1
    let modalakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    let modalawal = formData[inputs[1].name].toString().replace(/,/g, "");
    // let modalakhir = Number(formData.modalakhir);
    // let modalawal = Number(formData.modal);
    let lama;
    let lamapinjam, periode;
    const converted = convertToFormat(formData);
    lamapinjam = converted.lamapinjam;
    periode = converted.periode;
    if (formData.lamapinjam !== lamapinjam) {
      lama = "Tahun";
    } else {
      lama = "Bulan";
    }
    //p = rootsq((Mw / M),w) - 1
    let hasil = (Math.pow(modalakhir / modalawal, 1 / lamapinjam) - 1) * 100;
    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Suku Bunga: ${Math.round(hasil * (12 / periode))}%/${lama}`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    hasil = hasil.toFixed(1);
    console.log(hasil);
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Suku Bunga: ${Math.round(hasil * (12 / periode))}%/${lama}`,
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
    if (Swal !== undefined) {
      Swal.fire({
        title: "Error",
        text: "Maaf, tolong masukan nilai yang diketahui :)",
        icon: "error",
        confirmButtonText: "Oke, saya mengerti",
      });
    }
  }
};

export {
  hitungModalAkhir,
  hitungModalAwal,
  hitungLamaTanggungan,
  hitungSukuBunga,
};
