import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DrawerModal2 = ({ children, size, isRounded, left }) => {
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
        className={`absolute bottom-0  md:top-0 z-10  transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }  ${left || "left-0"}`}
      >
        <div
          className={`relative  bg-white h-full p-6  transform transition-transform duration-300 ease-in-out ${
            size || "w-screen md:w-[28rem]"
          } ${
            drawerOpen
              ? "translate-y-0 md:translate-x-0"
              : " translate-y-full md:translate-y-0 md:-translate-x-full "
          } ${isRounded} `}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DrawerModal2;
