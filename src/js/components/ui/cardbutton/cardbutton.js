import React from "react";
import Link from "next/link";
const CardButton = ({ url }) => {
  return (
    <Link href={`/${url}`} passHref={true}>
      <div className="mt-6 px-2 py-1 w-20 h-7 rounded-full bg-white flex justify-center cursor-pointer">
        <h5 className="text-sm font-medium text-blue-500">Hitung!</h5>
      </div>
    </Link>
  );
};

export default CardButton;
