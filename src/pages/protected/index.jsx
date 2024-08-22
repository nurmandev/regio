import React, { useEffect } from "react";
import DrawerModal from "../../components/Modals/DrawerModal";
import Sidebar from "../../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import DrawerModal2 from "../../components/Modals/DrawerModal2";
import StickyNav from "../../components/StickyNav";
import SearchInput from "../../components/SearchInput";
import { FaClock, FaFilter, FaTruck } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import MapView from "../../components/Map";
import { useUsers } from "../../contexts/User";

function Map() {
  const location = useLocation();
  const { user } = useUsers();

  useEffect(() => {
    if (!user) {
      return <Navigate to="/auth/register" replace />;
    }
  }, [user]);

  return (
    <div className="bg-primary h-screen overflow-hidden">
      <div className="flex h-full items-center justify-center">
        <MapView />
      </div>
      {location.pathname === "/map" && (
        <div className="absolute top-5 left-0 md:left-[16rem] right-5 md:right-auto md:flex  items-center space-x-2 ">
          <button className="fixed bottom-16 left-5 md:relative md:bottom-auto md:left-auto border flex items-center shadow-md bg-white  gap-3 text-sm p-2 rounded-full">
            <MdMyLocation size={25} />
          </button>
          <div className=" w-full md:w-96">
            <SearchInput />
          </div>
          <div className="flex gap-5 items-center mt-4 md:mt-0">
            <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaClock />
              Geöffnet
            </button>
            <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaTruck />
              Liefert
            </button>
          </div>
          <button className="fixed bottom-16 right-5 border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
            <GiShoppingCart />
            23.65#
          </button>
        </div>
      )}
      <Outlet />
      <DrawerModal2 size="w-[15rem] hidden md:block border-r ">
        <Sidebar />
      </DrawerModal2>
      <StickyNav />
    </div>
  );
}

export default Map;
