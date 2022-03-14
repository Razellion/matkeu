import Layout from "../js/layout/layout";
import HomeCard from "../js/components/ui/homecard/homecard";

const menu = [
  {
    name: "Bunga Tunggal",
    desc: "Hitung bunga berdasarkan modal awal dengan besar bunga yang tetap tiap periodenya.",
    url: "tunggal",
  },
  {
    name: "Bunga Majemuk",
    desc: "Hitung bunga berbunga dari gabungan modal awal dan bunga dari periode sebelumnya.",
    url: "majemuk",
  },
  {
    name: "Pertumbuhan",
    desc: "Pertumbuhan suatu objek yang memiliki peningkatan tetap (dinyatakan dalam persentase)",
    url: "pertumbuhan",
  },
  {
    name: "Peluruhan",
    desc: "Peluruhan jumlah suatu objek dengan nilai persentase penurunan yang tetap",
    url: "peluruhan",
  },
  {
    name: "Anuitas",
    desc: "Sejumlah pembayaran pinjaman dengan besar sama yang terdiri atas bunga dan angsuran",
    url: "anuitas",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Screen Div */}
      {/* <div className="p-5 h-screen w-screen"> */}
      {/* Centered Menu Div */}
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-pacifico">Pilih Menu</h1>
          <h5>Apa yang ingin kamu hitung?</h5>
        </div>
      </div>
      {/* Component Menu -> iterasi component cards dari routes menu */}
      <div className="mt-8 flex justify-center ">
        <div>
          {menu.map((item, index) => {
            return <HomeCard key={index} item={item} />;
          })}
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
}
