import { convertSolution } from "../js/components/ui/form/anuitasformtype";

const hitungBungaAwal = (inputs, formData, Swal) => {
  // if (
  //   formData[inputs[0].name] &&
  //   formData[inputs[1].name] &&
  //   formData[inputs[2].name]
  // ) {
  //b1 = M*p
  //b1 = M*p
  // let hasil;
  // Swal.fire({
  //   title: "Hasil Akhir",
  //   text: `Jumlah modal akhir pada periode pembayaran ke-${hasil[1]} bernilai: Rp${hasil[0]}`,
  //   icon: "success",
  //   confirmButtonText: "Lanjut Pembahasan",
  // });
  // } else {
  //   Swal.fire({
  //     title: "Error",
  //     text: "Maaf, tolong masukan nilai yang diketahui :)",
  //     icon: "error",
  //     confirmButtonText: "Oke, saya mengerti",
  //   });
  // }
};

const hitungNilaiAnuitas = (inputs, formData, Swal) => {
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
    const convert = convertSolution(formData);
    let nilaipinjaman, bunga, lamapembayaran;
    nilaipinjaman = formData[inputs[0].name].toString().replace(/,/g, "");
    // bunga = formData[inputs[1].name] / 100;
    bunga = convert.bunga;
    // lamapembayaran = formData[inputs[2].name];
    lamapembayaran = convert.lamapembayaran;
    //A = (M*p)/(1-((1+p)^-w))
    let temp = Math.pow(1 + bunga, -lamapembayaran);
    let hasil = (nilaipinjaman * bunga) / (1 - temp);
    console.log(nilaipinjaman, bunga, lamapembayaran);
    let hasilarray = [
      {
        nomor: "1",
        angsuran: (hasil - nilaipinjaman * bunga)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        bunga: (bunga * nilaipinjaman)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        anuitas: hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        sisapinjaman: (nilaipinjaman - (hasil - nilaipinjaman * bunga))
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      },
    ];

    for (var i = 2; i <= lamapembayaran; i++) {
      let nomor = i.toString();
      let angsuran =
        hasil -
        hasilarray[i - 2].sisapinjaman.toString().replace(/,/g, "") * bunga;
      let bungaB =
        hasilarray[i - 2].sisapinjaman.toString().replace(/,/g, "") * bunga;
      let anuitas = hasil;
      let sisapinjaman =
        hasilarray[i - 2].sisapinjaman.toString().replace(/,/g, "") -
        angsuran.toString().replace(/,/g, "");
      if (sisapinjaman <= 0) {
        sisapinjaman = 0;
      }
      let pertumbuhanObj = {
        nomor: i,
        angsuran: angsuran
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        bunga: bungaB
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        anuitas: anuitas
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        sisapinjaman: sisapinjaman
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      };
      hasilarray.push(pertumbuhanObj);
    }
    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Besar anuitasnya adalah: ${hasil
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
        nilaipinjaman: nilaipinjaman,
        bunga: bunga,
        lamapembayaran: lamapembayaran,
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

const hitungKen = (inputs, formData, Swal) => {
  let isZero = false; // UNUTUK MEMASTIKAN INPUT TIDAK BOLEH "0"
  for (const key in formData) {
    if (formData[key] == "0") {
      isZero = true;
    }
  }
  // console.log(formData);
  if (
    formData[inputs[0].name] &&
    formData[inputs[1].name] &&
    formData[inputs[2].name] &&
    formData[inputs[3].name] &&
    !isZero
  ) {
    const convert = convertSolution(formData);
    let nilaipinjaman, bunga, lamapembayaran, n;
    nilaipinjaman = formData[inputs[0].name].toString().replace(/,/g, "");
    bunga = convert.bunga;
    lamapembayaran = convert.lamapembayaran;
    n = formData[inputs[3].name];
    //A = (M*p)/(1-((1+p)^-w))
    let temp = Math.pow(1 + bunga, -lamapembayaran);
    let hasil = (nilaipinjaman * bunga) / (1 - temp);

    if (Swal !== undefined) {
      Swal.fire({
        title: "Hasil Akhir",
        text: `Besar anuitasnya adalah: ${hasil
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}, angsuran ke-${n}`,
        icon: "success",
        confirmButtonText: "Lanjut Pembahasan",
      });
    } else {
      return {
        hasil: hasil,
        nilaipinjaman: nilaipinjaman,
        bunga: bunga,
        lamapembayaran: lamapembayaran,
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

export { hitungBungaAwal, hitungNilaiAnuitas, hitungKen };
