import React, { useEffect, useState } from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import { FiSearch } from "react-icons/fi";
import {
  IoMdCheckmarkCircle,
  IoMdClose,
  IoMdCloseCircle,
} from "react-icons/io";
import SearchInput from "../../../components/SearchInput";
import { FaClock, FaFilter, FaTruck } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { IoHeartSharp, IoLocationSharp } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import { useSellers } from "../../../contexts/Seller";

function SellersList() {
  const { sellers, fetchSellers, createfavouriteSeller } = useSellers();
  const [isGrid, setIsGrid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getInitalSellers = async () => {
      await fetchSellers();
    };
    getInitalSellers();
  }, []);

  return (
    <>
      <DrawerModal2 left={"md:left-[15rem] h-full"}>
        <div className="">
          {/* Search Bar */}
          <SearchInput />
          {/* Filter Buttons */}
          <div className="flex space-x-2 my-4">
            <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaClock />
              Geöffnet
            </button>
            <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
              <FaTruck />
              Liefert
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

          {/* Item List */}
          <div
            className={`mt-2 ${
              isGrid ? "grid grid-cols-3  gap-5" : ""
            } w-full  md:gap-5 overflow-y-auto h-full`}
          >
            {sellers.length < 1 ? (
              <div className="h-full w-full flex justify-center items-center">
                No Seller
              </div>
            ) : (
              sellers.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    isGrid ? "" : "flex"
                  } overflow-hidden items-center gap-2 py-2 border-b relative `}
                  onClick={() => navigate(`/sellers/${item.data.id}`)}
                >
                  <img
                    src={item.data.profile_image}
                    alt={item.data.name}
                    className={`${
                      isGrid ? "w-full h-32" : "w-16 h-16 mr-4"
                    } rounded-lg `}
                  />
                  <div className="flex-grow">
                    <div className="flex items-center w-3/4 ">
                      <div
                        className={`${
                          isGrid ? "text-base" : "text-lg"
                        } font-semibold mr-2  overflow-hidden text-ellipsis whitespace-nowrap`}
                      >
                        {item.data.name}
                      </div>
                      <div className="bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs">
                        {item.count}
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
                          onClick={() =>
                            createfavouriteSeller({ object_id: item.data.id })
                          }
                        />
                        <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                          {item.data.total_likes}
                        </div>
                      </div>
                      <div className="flex text-xs items-center gap-1">
                        <IoLocationSharp
                          size={isGrid ? 12 : 18}
                          color="black"
                        />
                        <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                          {item.distance}
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
                </div>
              ))
            )}
          </div>
        </div>
      </DrawerModal2>
    </>
  );
}

export default SellersList;
