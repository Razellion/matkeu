import React from "react";
import Link from "next/link";
const CardButton = ({ url }) => {
  return (
    <Link href={`/${url}`} passHref={true}>
      <div className="mt-6 w-20 h-7 rounded-full bg-white flex justify-center">
        <h5 className="text-sm font-bold text-blue-500">Hitung!</h5>
      </div>
    </Link>
  );
};

export default CardButton;
