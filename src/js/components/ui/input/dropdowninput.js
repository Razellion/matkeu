import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DropdownInput = ({ name, menu, setValue }) => {
  //TODO: bikin usestate default value
  return (
    <div className="w-24">
      <Menu as="div" className="w-full inline-block text-left">
        <div>
          <Menu.Button className="flex justify-between w-full px-2 py-1 text-xs text-gray-900 bg-gray-300 shadow-md rounded-r-md border-t border-b border-r border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {/* {state.label} */}
            label
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
          <Menu.Items className="absolute w-24 origin-top bg-white border-blue-400 divide-y divide-gray-200 rounded-md border focus:outline-none">
            {menu.map((item) => {
              return (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <input
                      type="button"
                      name={`${name}Opt`}
                      value={item}
                      className={`${
                        active ? "bg-violet-500 text-blue-400" : "text-gray-900"
                      } bg-white hover:text-blue-400 group rounded-md text-center w-full px-1 py-2 text-xs`}
                      onClick={setValue}
                    />
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownInput;
