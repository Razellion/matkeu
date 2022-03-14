/* eslint-disable react/no-unescaped-entities */
import Layout from "../js/layout/layout";
// import HomeCard from "../js/components/ui/homecard/homecard";
import Link from "next/link";

// import Button from "@material-ui/core/Button";
//ini buat carousel quotes
import React, { useEffect, useState } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 10000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Wayne Chirisa",
      citation: "Sale Closed in 2019",
      quote:
        "Literasi keuangan tidak hanya melibatkan kemampuan untuk menghitung uang Anda, tetapi juga menguji kemampuan Anda untuk mengevaluasi biaya dan manfaat yang terkait dengan setiap keputusan yang Anda buat.",
    },
    {
      name: "Dave Ramsey",
      citation: "Sale Closed in 2019",
      quote:
        "Financial peace bukan tentang memiliki suatu barang. Tetapi, belajar untuk hidup berhemat, sehingga kamu dapat menyisihkan uang untuk berinvestasi.",
    },
    {
      name: "Adam Smith",
      citation: "Sale Closed in 2019",
      quote:
        "Tidak ada masyarakat yang bisa maju dan bahagia. Jika, sebagian besar dari mereka adalah kalangan miskin dan sengsara.",
    },
    {
      name: "Aristotle",
      citation: "Sale Closed in 2019",
      quote:
        "Uang adalah jaminan bahwa kita mungkin memiliki apa yang kita inginkan di masa depan. Meskipun kita tidak membutuhkan apa-apa saat ini, hal itu menjamin kemungkinan untuk memuaskan keinginan baru ketika keinginan itu muncul.",
    },
    {
      name: "Oscar Wilde",
      citation: "Sale Closed in 2019",
      quote:
        "Ketika saya masih muda saya berpikir bahwa uang adalah hal yang paling penting dalam hidup. Sekarang saya sudah tua, dan saya yakin akan hal itu.",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-80 h-36 mt-44 border rounded-lg border-blue-400">
          <div className="text-center text-xs">
            <ul className="carousel__list">
              {reviews.map((review, index) => {
                const { citation, name, quote } = review;
                const count = index + 1;
                return (
                  <li
                    className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                    key={count}
                  >
                    <blockquote className="carousel__quote">
                      <cite>
                        <p className="pb-1">"{quote}"</p>
                        <span className="carousel__name">{name}</span>
                      </cite>
                    </blockquote>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Link href={"/menu"} passHref={true}>
        <div className="flex justify-center mt-24">
          <div className="text-center text-xs">
            <div className="w-32 h-12 p-3.5 bg-blue-300 place-items-center hover:bg-blue-500 rounded-full bg-blue-80 cursor-pointer">
              <h5 className="text-sm text-white">Get Start!</h5>
            </div>
          </div>
        </div>
      </Link>
    </Layout>
  );
}
