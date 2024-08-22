import React, { useEffect, useState } from "react";
import DrawerModal from "../../components/Modals/DrawerModal";
import DrawerModal2 from "../../components/Modals/DrawerModal2";
import { Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { FaClock, FaFilter, FaRegListAlt, FaTruck } from "react-icons/fa";
import { IoHeartSharp, IoLocationSharp, IoPricetag } from "react-icons/io5";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { useUsers } from "../../contexts/User";

const favourites = [
  {
    img: "https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg",
    name: "Huhner Eier",
    location: "Sebastin Weidel",
    type: "product",
    price: "2.30#",
    weight: "12stk",
  },
  {
    name: "Uwe Becker",
    type: "Landwirte",
    location: "Montfort",
    likes: 241,
    liked: true,
    distance: "2 km",
    status: "Geöffnet",
    img: "https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?cs=srgb&dl=pexels-dodogr8-916406.jpg&fm=jpg",
    count: "6.5",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrss02Xko_tqUyXzsStRpzX4zP_rVPpdXHQ&s",
    name: "Fruchte Garten Mix",
    location: "Herman Peters",
    type: "product",
    price: "3.50#",
    weight: "500g",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMhJwikKLv2zo8ZteeO6AOdEBHwkd5QI6Tw&s",
    name: "Rest Erdbeeren noch 2kg",
    location: "Super Bio Markt",
    type: "product",
    price: "3.50#",
    status: "Kostenlos",
  },
  {
    name: "Uwe Becker",
    type: "Landwirte",
    location: "Montfort",
    likes: 241,
    liked: true,
    distance: "2 km",
    status: "Geöffnet",
    img: "https://images.fairtrade.net/article/_articleFull/26196_MangoHarvest_870.jpg",
    count: "7",
  },
];

function Favourite() {
  const { fetchUserFavorites, favorites } = useUsers();
  const [isGrid, setIsGrid] = useState(false);

  useEffect(() => {
    fetchUserFavorites();
  }, []);
  return (
    <DrawerModal2
      left={"md:left-[15rem] h-full"}
      size={"w-screen md:w-[calc(100vw-15rem)]"}
    >
      <div className=" md:flex  items-center space-x-2 w-full  ">
        <div className=" w-full md:w-96">
          <SearchInput />
        </div>
        <div className="flex overflow-x-auto gap-5 items-center mt-3 md:mt-0">
          <button className="border bg-white flex items-center gap-3 text-sm p-2.5 rounded-full">
            <SiHomeassistantcommunitystore />
            Verkaufer
          </button>
          <button className="border bg-white flex items-center gap-3 text-sm p-2.5 rounded-full">
            <IoPricetag />
            Produkte
          </button>
          <button className="border bg-white flex items-center gap-3 text-sm p-2.5 rounded-full">
            <ImNewspaper />
            Beitrage
          </button>
          <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
            <FaFilter />
            5/12
          </button>
          {isGrid ? (
            <button
              onClick={() => setIsGrid(!isGrid)}
              className="border flex items-center gap-3 text-sm p-2 rounded-full"
            >
              <FaRegListAlt size={20} />
            </button>
          ) : (
            <button
              onClick={() => setIsGrid(!isGrid)}
              className="border flex items-center gap-3 text-sm p-2 rounded-full"
            >
              <BsFillGridFill size={20} />
            </button>
          )}
        </div>
      </div>
      <div
        className={`mt-2 ${
          isGrid
            ? "grid grid-cols-3 md:grid-cols-8 gap-5"
            : "md:grid md:grid-cols-4"
        } w-full  md:gap-5 `}
      >
        {favourites.length < 1 ? (
          <div className="h-full w-full flex justify-center items-center p-20">
            No favourites
          </div>
        ) : (
          favorites.map((item, index) => {
            return item.content_type !== "Seller | seller" ? (
              <div
                key={index}
                className={`${
                  isGrid ? "" : "flex"
                } overflow-hidden items-center gap-2 py-2 border-b relative `}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={`${
                    isGrid ? "w-full h-32" : "w-16 h-16 mr-4"
                  } rounded-lg `}
                />
                <div className="flex-1 md:flex-auto ">
                  <div className="flex w-full overflow-hidden items-center justify-between">
                    <div
                      className={`${
                        isGrid ? "text-base" : "text-lg"
                      } font-semibold  w-3/4 overflow-hidden text-ellipsis whitespace-nowrap`}
                    >
                      {item.name}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.location}</div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <div className="mr-2 text-xs flex items-center gap-1">
                      {item.weight}
                    </div>
                    <div className="flex text-xs items-center gap-1">
                      {item.price}
                    </div>
                    <div className="flex text-xs items-center text-green-400 gap-1">
                      {item.status}
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute cursor-pointer bg-white rounded-full p-1 ${
                    isGrid
                      ? " top-3 right-1"
                      : "top-1/2 -translate-y-1/2 right-5"
                  }`}
                >
                  <IoMdClose />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`${
                  isGrid ? "" : "flex"
                } overflow-hidden items-center gap-2 py-2 border-b relative `}
              >
                <img
                  src={item.content_object.image}
                  alt={item.content_object.name}
                  className={`${
                    isGrid ? "w-full h-32" : "w-16 h-16 mr-4"
                  } rounded-lg `}
                />
                <div className="flex-grow">
                  <div className="flex items-center w-3/4 ">
                    <div
                      className={`${
                        isGrid ? "text-base" : "text-lg"
                      } font-semibold w-full  overflow-hidden text-ellipsis whitespace-nowrap`}
                    >
                      {item.content_object.name}
                    </div>
                    <div className="bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs">
                      {item.content_object.count}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.type} • {item.location}
                  </p>
                  <div className="flex text-xs items-center  text-gray-500">
                    <div className="mr-2 flex items-center gap-1 ">
                      <IoHeartSharp
                        size={isGrid ? 12 : 18}
                        color={item.liked ? "red" : "black"}
                      />
                      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                        {item.content_object.total_likes}
                      </div>
                    </div>
                    <div className="flex text-xs items-center gap-1">
                      <IoLocationSharp size={isGrid ? 12 : 18} color="black" />
                      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                        {item.content_object.distance}
                      </div>
                    </div>

                    <div
                      className={`text-xs flex items-center gap-1 ml-2 ${
                        item.status === "Geöffnet"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.status === "Geöffnet" ? (
                        <FaClock size={isGrid ? 12 : 18} />
                      ) : (
                        <IoMdCloseCircle size={isGrid ? 12 : 18} />
                      )}
                      <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute cursor-pointer bg-white rounded-full p-1 ${
                    isGrid
                      ? " top-3 right-1"
                      : "top-1/2 -translate-y-1/2 right-5"
                  }`}
                >
                  <IoMdClose />
                </div>
              </div>
            );
          })
        )}
      </div>
    </DrawerModal2>
  );
}

export default Favourite;
