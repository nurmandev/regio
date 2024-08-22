import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DrawerModal = ({ children, size, isRounded }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("modal-open");
    setDrawerOpen(true);
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleClose = () => {
    setDrawerOpen(false);
    navigate(-1);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full z-10  transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative overflow-y-auto scrollbar-hide bg-white h-full p-6  transform transition-transform duration-300 ease-in-out ${
            size || "w-screen md:w-[28rem]"
          } ${drawerOpen ? "translate-x-0" : "-translate-x-full"} ${
            isRounded && "md:rounded-r-2xl"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DrawerModal;
