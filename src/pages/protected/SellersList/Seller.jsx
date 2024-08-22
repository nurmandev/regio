import React, { useEffect, useState } from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import { GiShoppingCart } from "react-icons/gi";
import { GoHeart, GoPlus } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  IoHeartSharp,
  IoLocationOutline,
  IoLocationSharp,
  IoPricetag,
} from "react-icons/io5";
import { FaClock, FaFilter, FaPlus, FaRegListAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import SmallModal from "../../../components/Modals/SmallModal";
import { useSellers } from "../../../contexts/Seller";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";

function Seller() {
  const { seller, fetchSeller } = useSellers();
  const { id } = useParams();
  const [isGrid, setIsGrid] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(id);

  useEffect(() => {
    const getSeller = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError("");
        await fetchSeller(id);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getSeller();
  }, []);

  return (
    <DrawerModal2
      left={"md:left-[15rem] right-0 h-full"}
      size={"w-screen md:w-[35rem]"}
    >
      <div className="justify-between flex items-center mb-4 md:hidden  ">
        <button className="border  bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
          <GiShoppingCart size={20} />
          23.68#
        </button>
      </div>
      {loading ? (
        <div className="flex w-full h-full justify-center items-center">
          <Loading />
        </div>
      ) : error || !seller ? (
        <div className="flex w-full h-full justify-center items-center text-red-500">
          {error}
        </div>
      ) : (
        <>
          <img
            src={seller.cover}
            alt={`Slide `}
            className="w-full h-24 object-cover bg-black  rounded-3xl mb-3"
          />
          <div className="flex justify-between items-start ">
            <div className={`flex  items-center gap-2 py-2`}>
              <img
                src={seller.img}
                alt={seller.name}
                className={`w-16 h-16 rounded-lg  `}
              />
              <div className="flex-grow">
                <div className="flex items-center ">
                  <div
                    className={`text-lg font-semibold mr-2  overflow-hidden text-ellipsis whitespace-nowrap`}
                    onClick={() => setOpenInfo(true)}
                  >
                    {seller.name}
                  </div>
                  <div className="bg-red-500 text-white py-0.5 px-1.5 rounded-full text-xs">
                    {seller.count}
                  </div>
                </div>
                <p className="text-sm text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis">
                  {seller.type} • {seller.location}
                </p>
                <div className="flex text-xs items-center  text-gray-500">
                  <div className="mr-2 flex items-center gap-1 ">
                    <IoHeartSharp
                      size={18}
                      color={seller.liked ? "red" : "black"}
                    />
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                      {seller.likes}
                    </div>
                  </div>
                  <div className="flex text-xs items-center gap-1">
                    <IoLocationSharp size={18} color="black" />
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                      {seller.distance}
                    </div>
                  </div>

                  <div
                    className={`text-xs flex items-center gap-1 ml-2 ${
                      seller.status === "Geöffnet"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {seller.status === "Geöffnet" ? (
                      <FaClock size={18} />
                    ) : (
                      <IoMdCloseCircle size={18} />
                    )}
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                      {seller.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-5 right-5 md:relative md:top-auto md:right-auto flex gap-2 items-center md:mt-0">
              <button className="border bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
                <IoLocationOutline size={20} />
              </button>
              <button className="border  bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
                <GoHeart size={20} />
              </button>
              <button className="border  bg-white shadow-md flex items-center gap-3 text-sm p-2.5 rounded-full">
                <HiOutlineDotsVertical size={20} />
              </button>
            </div>
          </div>
          <div className="md:flex items-center w-full gap-2 ">
            <div className="flex items-center bg-white p-2 rounded-full border my-3 ">
              <FiSearch className="mr-2" size={20} />
              <input
                type="text"
                placeholder="Suchen.."
                className="flex-grow outline-none w-full"
              />
            </div>

            <div className="flex space-x-2 my-4">
              <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
                <IoPricetag />
                Produkte
              </button>
              <button className="border flex items-center gap-3 text-sm p-2.5 rounded-full">
                <ImNewspaper />
                Beitrage
              </button>
              <button className="border md:hidden flex items-center gap-3 text-sm p-2.5 rounded-full">
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
          <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center gap-3">
              <img
                src={seller.img}
                alt={seller.name}
                className={`w-10 h-10 rounded-lg  `}
              />
              <div>
                <div
                  className={`text-lg font-semibold mr-2  overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                  {seller.name}
                </div>
                <div>16 Produkte</div>
              </div>
            </div>
            <GoPlus size={24} />
          </div>
          <div className="md:grid md:grid-cols-2 gap-2">
            <div className="flex items-center gap-3 p-2 border-b">
              <img
                src="https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg"
                alt={seller.name}
                className={`w-10 h-10 rounded-lg  `}
              />
              <div>
                <div
                  className={`text-lg font-semibold mr-2  overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                  Schweinefleisch
                </div>
                <div>500g • 12,82#</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 border-b">
              <img
                src="https://www.health.com/thmb/fbyHcuD2A3OrfZTC-LUJIPsKKVk=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/HealthiestFruits-feb2318dc0a3454993007f57c724753f.jpg"
                alt={seller.name}
                className={`w-10 h-10 rounded-lg  `}
              />
              <div>
                <div
                  className={`text-lg font-semibold mr-2  overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                  Schweinefleisch
                </div>
                <div>500g • 12,82#</div>
              </div>
            </div>
          </div>
          <SmallModal
            drawerOpen={openInfo}
            container={"md:left-[35rem] left-0"}
          >
            modal
          </SmallModal>
        </>
      )}
    </DrawerModal2>
  );
}

export default Seller;
