import React from "react";
import { GoChevronDown } from "react-icons/go";

function Select() {
  return (
    <div className="">
      <div className="flex items-center gap-3 border rounded-full p-2 bg-white">
        <img src="" className="w-5 h-5 rounded-full bg-black" />
        <div className="">EUR</div>
        <GoChevronDown />
      </div>
    </div>
  );
}

export default Select;
