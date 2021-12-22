import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 w-full lg:w-5/12 flex justify-center bg-blue-400">
        <div>
          <Link href="/" passHref={true}>
            <h2 className="text-2xl font-pacifico text-white">Mat-Keu</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
