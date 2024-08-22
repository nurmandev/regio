import React, { useEffect, useState } from "react";

const SmallModal = ({ children, content, container, drawerOpen }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <>
      <div
        className={`absolute bottom-0 flex justify-center items-center p-5 md:block top-0 z-10  transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }  ${container} left-0 right-0`}
      >
        <div
          className={`relative  bg-white rounded-2xl p-6  transform transition-transform duration-300 ease-in-out ${content} w-full md:w-[20rem]
          ${
            drawerOpen
              ? "translate-y-0 md:translate-x-0"
              : " translate-y-full md:translate-y-0 md:-translate-x-full "
          }  `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default SmallModal;
