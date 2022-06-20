import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DropdownMenu = () => {
  //array of menu
  const menu = [
    { route: "/menu", label: "Menu Kalkulator (Beranda)" },
    { route: "/tunggal", label: "Bunga Tunggal" },
    { route: "/majemuk", label: "Bunga Majemuk" },
    { route: "/pertumbuhan", label: "Pertumbuhan" },
    { route: "/peluruhan", label: "Peluruhan" },
    { route: "/anuitas", label: "Anuitas" },
  ];

  return (
    <div>
      <div className="w-80">
        <Menu as="div" className="w-full z-20 relative inline-block text-left">
          <div>
            <Menu.Button className="flex justify-between w-full px-4 py-2 text-sm text-gray-600 shadow-md rounded-md border-2 border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Pilih Menu Kalkulator
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute w-full px-2 origin-top bg-white border-blue-400 divide-y divide-gray-200 rounded-md border focus:outline-none">
              {menu.map((item) => {
                return (
                  <Menu.Item key={item.route}>
                    {({ active }) => (
                      <Link passHref={true} href={item.route}>
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-blue-400"
                              : "text-gray-900"
                          } bg-white hover:text-blue-400 group rounded-md text-center w-full px-2 py-2 text-sm`}
                        >
                          {item.label}
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default DropdownMenu;
