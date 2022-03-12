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
      name: "Ezar Rt.",
      citation: "Sale Closed in 2019",
      quote: "INI NANTI CERITANYA QUOTES!",
    },
    {
      name: "Peter C.",
      citation: "Sale Closed in 2019",
      quote:
        "I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the Door.com business model.",
    },
    {
      name: "Paulette H.",
      citation: "Sale Closed in 2019",
      quote:
        "The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to $14,000 in commissions. I will absolutely be using Door.com for the sale of my next property.",
    },
    {
      name: "Ryan W.",
      citation: "Sale Closed in 2019",
      quote:
        "Service was excellent EVERY step of the process! No way to tell that Door.com provided a flat rate service by the way that they treated us and handled every step of the transactions.",
    },
    {
      name: "Kevin R.",
      citation: "Sale Closed in 2019",
      quote:
        "Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all.",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="w-80 h-32 mt-44 border rounded-lg border-blue-400">
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
                        <p>"{quote}"</p>
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
        <div className="flex justify-center mt-20">
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
