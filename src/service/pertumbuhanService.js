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
    let nilaiawal, persentase, lamapertumbuhan;
    nilaiawal = formData[inputs[0].name].toString().replace(/,/g, "");
    persentase = formData[inputs[1].name] / 100;
    lamapertumbuhan = formData[inputs[2].name];
    //Nw = N(1+p)^w
    let hasil = nilaiawal * Math.pow(1 + persentase, lamapertumbuhan);

    let hasilarray = [
      {
        nomor: "1",
        nilaiawal: (nilaiawal - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        pertumbuhan: `${persentase * 100}%`,
        totalpertumbuhan: (nilaiawal * persentase)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        nilaiakhir: (Number(nilaiawal) + Number(nilaiawal * persentase))
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      },
    ];

    for (var i = 2; i <= lamapertumbuhan; i++) {
      let nomor = i.toString();
      // console.log(hasilarray[i - 2]);
      let nilaiawal = hasilarray[i - 2].nilaiakhir.toString().replace(/,/g, "");
      let pertumbuhan = `${persentase * 100}%`;
      let totalpertumbuhan = (nilaiawal * persentase)
        .toString()
        .replace(/,/g, "");
      let nilaiakhir = (Number(nilaiawal) + Number(totalpertumbuhan))
        .toString()
        .replace(/,/g, "");
      // console.log(nomor, nilaiawal, pertumbuhan, totalpertumbuhan, nilaiakhir);
      let pertumbuhanObj = {
        nomor: i,
        nilaiawal: (nilaiawal - 0)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        pertumbuhan: pertumbuhan,
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
    // let hitung = nilaiawal * Math.pow(1 + persentase, lamapertumbuhan);
    // let pertumbuhanObj = {
    //   nomor: i,
    //   nilaiawal: hitung,
    //   pertumbuhan: persentase,
    //   totalpertumbuhan: nilaiawal * persentase,
    // };
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Jumlah pertumbuhan pada periode ke-${lamapertumbuhan} bernilai total: Rp${hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiawal: nilaiawal,
        persentase: persentase,
        lamapertumbuhan: lamapertumbuhan,
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
    let nilaiakhir, persentase, lamapertumbuhan;
    nilaiakhir = formData[inputs[0].name].toString().replace(/,/g, "");
    persentase = formData[inputs[1].name] / 100;
    lamapertumbuhan = formData[inputs[2].name];
    //Nw = N(1+p)^w
    let hasil = nilaiakhir / Math.pow(1 + persentase, lamapertumbuhan);
    // hasil = hasil;

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Nilai awal pertumbuhannya bernilai: Rp.${hasil
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
        lamapertumbuhan: lamapertumbuhan,
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

const hitungLamaPertumbuhan = (inputs, formData, Swal) => {
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
    //w = log(Nw/N)/log(1+p)

    let hasil = Math.log(nilaiakhir / nilaiawal) / Math.log(1 + persentase);
    console.log(hasil, nilaiawal, nilaiakhir, persentase);

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Lama tanggungan selama: ${Math.round(hasil)} periode`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        nilaiawal: nilaiawal,
        nilaiakhir: nilaiakhir,
        persentase: persentase,
        // lamapertumbuhan: lamapertumbuhan,
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
    let nilaiawal, lamapertumbuhan, nilaiakhir;
    nilaiawal = formData[inputs[0].name].toString().replace(/,/g, "");
    nilaiakhir = formData[inputs[1].name].toString().replace(/,/g, "");
    lamapertumbuhan = formData[inputs[2].name];

    //p = rootsq((Nw / N), w) - 1
    let hasil = Math.pow(nilaiakhir / nilaiawal, 1 / lamapertumbuhan) - 1;
    console.log(
      hasil,
      nilaiawal,
      nilaiakhir,
      nilaiakhir / nilaiawal,
      lamapertumbuhan
    );
    hasil = hasil.toFixed(3);

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Besar persentase pertumbuhanya: ${hasil * 100}%`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaiakhir: nilaiakhir,
        nilaiawal: nilaiawal,
        lamapertumbuhan: lamapertumbuhan,
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
  hitungLamaPertumbuhan,
};
