const hitungNilaiAkhir = (inputs, formData, Swal) => {
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
    !isZero
  ) {
    let nilaiawal, persentase, lamapeluruhan;
    nilaiawal = formData[inputs[0].name].toString().replace(/,/g, "");
    // nilaiakhir = formData[inputs[1].name].toString().replace(/,/g, "");
    persentase = formData[inputs[1].name] / 100;
    lamapeluruhan = formData[inputs[2].name];
    //Nw = N(1-p)^w
    let hasil = nilaiawal * Math.pow(1 - persentase, lamapeluruhan);
    hasil = hasil
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Jumlah total peluruhan pada peluruhan ke-${lamapeluruhan} bernilai: Rp${hasil}`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    let hasilarray = [
      {
        nomor: "1",
        nilaiawal: (nilaiawal - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        peluruhan: `${persentase * 100}%`,
        totalpertumbuhan: (nilaiawal * persentase)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        nilaiakhir: (Number(nilaiawal) - Number(nilaiawal * persentase))
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      },
    ];

    for (var i = 2; i <= lamapeluruhan; i++) {
      let nomor = i.toString();
      // console.log(hasilarray[i - 2]);
      let nilaiawal = hasilarray[i - 2].nilaiakhir.toString().replace(/,/g, "");
      let peluruhan = `${persentase * 100}%`;
      let totalpertumbuhan = (nilaiawal * persentase)
        .toString()
        .replace(/,/g, "");
      let nilaiakhir = (Number(nilaiawal) - Number(totalpertumbuhan))
        .toString()
        .replace(/,/g, "");
      // console.log(nomor, nilaiawal, pertumbuhan, totalpertumbuhan, nilaiakhir);
      let pertumbuhanObj = {
        nomor: i,
        nilaiawal: (nilaiawal - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        peluruhan: peluruhan,
        totalpertumbuhan: (totalpertumbuhan - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        nilaiakhir: (nilaiakhir - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      };
      hasilarray.push(pertumbuhanObj);
    }
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Jumlah total peluruhan pada peluruhan ke-${lamapeluruhan} bernilai: Rp${hasil}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiawal: nilaiawal,
        persentase: persentase,
        lamapeluruhan: lamapeluruhan,
        hasilarray: hasilarray,
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
const hitungNilaiAwal = (inputs, formData, Swal) => {
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
    !isZero
  ) {
    let nilaiakhir, persentase, lamapeluruhan;
    nilaiakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    // nilaiakhir = formData[inputs[1].name].toString().replace(/,/g, "");
    persentase = formData[inputs[1].name] / 100;
    lamapeluruhan = formData[inputs[2].name];
    //Nw = N(1-p)^w
    let hasil = nilaiakhir / Math.pow(1 - persentase, lamapeluruhan);

    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Jumlah modal akhir pada periode pembayaran ke-${hasil[1]} bernilai: ${hasil[0]}`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Nilai awal sebelum perluruhan bernilai: ${hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiakhir: nilaiakhir,
        persentase: persentase,
        lamapeluruhan: lamapeluruhan,
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
const hitungPersentase = (inputs, formData, Swal) => {
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
    !isZero
  ) {
    let nilaiawal, lamapeluruhan, nilaiakhir;
    nilaiawal = formData[inputs[0].name].toString().replace(/,/g, "");
    nilaiakhir = formData[inputs[1].name].toString().replace(/,/g, "");
    lamapeluruhan = formData[inputs[2].name];
    //p = rootsq((Nw / N), w) + 1
    let hasil = Math.pow(nilaiakhir / nilaiawal, 1 / lamapeluruhan);
    hasil = 1 - hasil;
    console.log(hasil, Math.pow(nilaiakhir / nilaiawal, 1 / lamapeluruhan));
    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Jumlah modal awalnya sebesar: Rp${hasil}`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Besar persentase pertumbuhannya sebesar: ${
          hasil.toFixed(2) * 100
        }%`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiakhir: nilaiakhir,
        nilaiawal: nilaiawal,
        lamapeluruhan: lamapeluruhan,
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

const hitungLamaPeluruhan = (inputs, formData, Swal) => {
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
    !isZero
  ) {
    let nilaiawal, persentase, nilaiakhir;
    nilaiawal = formData[inputs[0].name].toString().replace(/,/g, "");
    nilaiakhir = formData[inputs[1].name].toString().replace(/,/g, "");
    persentase = formData[inputs[2].name] / 100;
    //w = log(Nw/N)/log(1-p)

    let hasil = Math.log(nilaiakhir / nilaiawal) / Math.log(1 - persentase);
    let temp = Math.round(hasil) - hasil;
    // temp = temp - hasil;
    console.log(temp.toFixed(2), " - ", hasil);
    if (temp < 0.1) {
      hasil = Math.round(hasil);
    }
    console.log(hasil, nilaiawal, nilaiakhir, persentase);
    // let hasil;

    // Swal.fire({
    //   title: "Hasil Akhir",
    //   text: `Lama tanggungan selama: ${hasil} tahun`,
    //   icon: "success",
    //   confirmButtonText: "Lanjut Pembahasan",
    // });
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Lama peluruhan terjadi sebanyak: ${hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} periode`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiakhir: nilaiakhir,
        nilaiawal: nilaiawal,
        persentase: persentase,
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

export {
  hitungNilaiAkhir,
  hitungNilaiAwal,
  hitungPersentase,
  hitungLamaPeluruhan,
};
