import React, { useEffect } from "react";
import { GiShoppingCart } from "react-icons/gi";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaStoreAlt } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { useUsers } from "../../../contexts/User";

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

function Profile() {
  const { user, orders, fetchUserOrders } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchUserOrders();
  }, []);
  return (
    <>
      {location.pathname === "/map/profile" && (
        <div className="justify-between flex items-center fixed top-0 left-5 md:top-5 md:left-[44rem] right-5">
          <button className="border md:hidden bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
            <GiShoppingCart />
            0.00#
          </button>
          <div className="hidden md:block" />
          <div className="flex gap-5 items-center mt-4 md:mt-0">
            <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaStoreAlt />
              <span className="md:hidden">Shop</span>
            </button>
            <button
              onClick={() => navigate("settings")}
              className="border md:hidden bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full"
            >
              <GoGear />
            </button>
          </div>
        </div>
      )}
      <DrawerModal2
        left={"md:left-[15rem] h-4/5 md:h-full"}
        isRounded={
          "rounded-tl-lg rounded-tr-lg md:rounded-tl-none md:rounded-tr-none"
        }
      >
        <div className="flex items-center py-2 ">
          <img
            src={user.photo}
            alt={user.firstname}
            className="w-16 h-16 rounded-lg mr-4 "
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold items-center flex gap-1">
                {user.firstname} {user.lastname}
              </h3>
            </div>
            <p className="text-sm text-gray-500">
              <span className="text-blue-500">Natuliebhaber</span> • Montfort
            </p>
            <div className="flex items-center text-sm text-red-500">
              Spender
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around border-t border-b p-3 my-4">
          <div className="">
            <div className="text-lg font-medium">0</div>
            <div className="text-sm text-gray-400">mal besteli</div>
          </div>
          <div className="">
            <div className="text-lg font-medium">0#</div>
            <div className="text-sm text-gray-400">ausgegeben</div>
          </div>
          <div className="">
            <div className="text-lg font-medium">0#</div>
            <div className="text-sm text-gray-400">grespendel</div>
          </div>
        </div>
        {orders.length < 1 ? (
          <div className="flex h-3/4 flex-col gap-5">
            <button
              // onClick={() => setTab("register")}
              className={`w-full text-center bg-primary text-white 
            px-4 py-2 rounded-full focus:outline-none`}
            >
              Tutorial anschauen
            </button>
            <button
              // onClick={() => setTab("register")}
              className={`w-full text-center bg-white border border-gray-400 text-primary
            px-4 py-2 rounded-full focus:outline-none`}
            >
              Lieferadresse Hinzufugen
            </button>
            <div className="flex flex-col h-full justify-center items-center ">
              <GiShoppingCart size={35} color="gray" />
              <div className="text-gray-400">Noch nichts bestellt</div>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto h-[calc(100vh-350px)] scrollbar-hide">
            {orders.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate("order")}
                className="flex items-center py-2 border-b"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold items-center flex gap-1">
                      {item.name}{" "}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    {item.stock} • {item.price} •{" "}
                    <span style={{ color: item.status.color }}>
                      {item.status.value}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </DrawerModal2>
      <Outlet />
    </>
  );
}

export default Profile;
