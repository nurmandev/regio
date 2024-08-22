import React from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { FaStoreAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PiNoteDuotone } from "react-icons/pi";

const products = [
  {
    name: "Super Bio Markt",
    price: "18.92#",
    status: { color: "green", value: "Unterweegs" },
    stock: "4 Artikel",
    img: "https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg",
  },
  {
    name: "Dennis Pohl",
    price: "21.43#",
    status: { color: "blue", value: "In Bearbeitung" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrss02Xko_tqUyXzsStRpzX4zP_rVPpdXHQ&s",
    stock: "2 Artikel",
  },
  {
    name: "Philip Arecht",
    price: "12.82#",
    status: { color: "black", value: "Stomiert" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMhJwikKLv2zo8ZteeO6AOdEBHwkd5QI6Tw&s",
    stock: "3 Artikel",
  },
  {
    name: "Super Bio Markt",
    price: "18.92#",
    status: { color: "green", value: "Unterweegs" },
    stock: "4 Artikel",
    img: "https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg",
  },
  {
    name: "Bio Mar",
    price: "31.93#",
    status: { color: "green", value: "Abholbereit" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMhJwikKLv2zo8ZteeO6AOdEBHwkd5QI6Tw&s",
    stock: "11 Artikel",
  },
];

function Order() {
  const navigate = useNavigate();
  return (
    <>
      {/* {location.pathname === "/map/profile/*" && ( */}
      <div className="justify-between flex items-center fixed top-0 left-5 md:top-5 md:left-[44rem] right-5">
        <button
          onClick={() => navigate(-1)}
          className=" border flex items-center md:hidden bg-white  gap-3 text-sm p-2 rounded-full"
        >
          <IoArrowBackOutline size={25} />
        </button>
        <div className="hidden md:block" />
        <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
          <FaStoreAlt />
        </button>
      </div>
      {/* )} */}
      <DrawerModal2
        left={"h-4/5 md:h-full md:left-[43rem] right-0"}
        isRounded={
          "rounded-tl-lg rounded-tr-lg md:rounded-tl-none md:rounded-tr-none"
        }
      >
        <div className="flex items-center justify-between pb-2 ">
          <div className="">
            <h3 className="text-lg font-semibold items-center flex gap-1">
              Abholbestellung
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              #5425 • 18.05.24 • 15:13
            </div>
          </div>
          <div className="flex items-center gap-5 py-2 ">
            <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaStoreAlt />
            </button>
            <div className="bg-red-700 px-4 text-white font-medium rounded-full p-2">
              Stomiert
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around border-t border-b p-3 my-4">
          <div className="">
            <div className="text-lg font-medium">3</div>
            <div className="text-sm text-gray-400">Artikel</div>
          </div>
          <div className="">
            <div className="text-lg font-medium">18,62#</div>
            <div className="text-sm text-gray-400">Preis</div>
          </div>
          <div className="">
            <div className="text-lg font-medium">1,38#</div>
            <div className="text-sm text-gray-400">Trinkgeld</div>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-350px)] scrollbar-hide">
          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("order")}
              className="flex items-center py-2 border-b"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-lg mr-4"
              />
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold items-center flex gap-1">
                    {item.name}{" "}
                  </h3>
                </div>
                <p className="">500g •{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-16 md:bottom-5 left-0 right-0 mx-4 bg-white flex items-center gap-2 border rounded-full p-3  ">
          <PiNoteDuotone size={25} />
          <input
            className=" border-none focus:outline-none w-full  "
            placeholder="Bruh..."
          />
          <IoArrowForward size={25} />
        </div>
      </DrawerModal2>
    </>
  );
}

export default Order;
