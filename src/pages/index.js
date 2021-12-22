import Layout from "../js/layout/layout";
import HomeCard from "../js/components/ui/homecard/homecard";

const menu = [
  { name: "Bunga Tunggal", url: "tunggal" },
  { name: "Bunga Majemuk", url: "majemuk" },
  { name: "Pertumbuhan", url: "pertumbuhan" },
  { name: "Peluruhan", url: "peluruhan" },
  { name: "Anuitas", url: "anuitas" },
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
      <div className="mt-8 flex justify-center">
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
