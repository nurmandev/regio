import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";

function SearchInput() {
  return (
    <div className="flex items-center bg-white p-2 rounded-full border ">
      <FiSearch className="mr-2" size={25} />
      <input
        type="text"
        placeholder="Suchen.."
        className="flex-grow outline-none"
      />
      <HiOutlineDotsVertical size={25} />
    </div>
  );
}

export default SearchInput;
