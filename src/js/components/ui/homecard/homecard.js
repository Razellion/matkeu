import React from "react";
import CardButton from "../cardbutton/cardbutton";

const HomeCard = ({ item }) => {
  return (
    <>
      <div className="h-16 w-52 mb-4 p-4 transition-all duration-500 ease-in-out hover:h-64 rounded-lg bg-blue-400 flex flex-col items-center">
        <h5 className="text-white font-semibold mt-2 text-xs">{item.name}</h5>
        <div className="mt-6 overflow-hidden flex flex-col items-center">
          <h5 className="text-xs text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolorem non esse! Molestias, praesentium saepe, dolorem cumque alias
            ullam rerum ducimus ad illo est, nulla ipsum veritatis quos
            assumenda sint?
          </h5>
          <CardButton url={item.url} />
        </div>
      </div>
    </>
  );
};

export default HomeCard;
