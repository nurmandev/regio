import React, { useEffect } from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";
import {
  IoArrowBackOutline,
  IoHeartSharp,
  IoLinkOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../../../components/posts/Carousel";
import { FaClock } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { usePosts } from "../../../contexts/Post";

function Detail() {
  const { post, fetchPost, loading, error } = usePosts();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  return (
    <DrawerModal2 left={"md:left-[43rem] right-0 h-full"}>
      <div className="flex md:hidden items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className=" border flex items-center bg-white  gap-3 text-sm p-2 rounded-full"
          >
            <IoArrowBackOutline size={25} />
          </button>
          <div className="">
            <div className="font-bold text-lg">15 Mai 2024</div>
            <div className="text-gray-400 text-xs">12:32 • Montfort</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className=" border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
            <GoHeart size={25} />
          </button>
          <button className="border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
            <HiOutlineDotsVertical size={25} />
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : !post ? (
        <div>Post not found</div>
      ) : (
        <>
          <div className="overflow-y-auto scrollbar-hide h-full pb-60 ">
            <img
              src={""}
              alt={``}
              className="w-full h-60 object-cover rounded-3xl"
            />
            <div className="font-bold text-lg my-4">{post.headline}</div>
            <div className="relative max-w-full overflow-hidden">
              <div className="relative z-10 p-4 mb-4">{post.content}</div>
              <div className="absolute inset-0 bg-gradient-to-t z-10 from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="flex items-center justify-between">
              <button className="border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
                <IoLinkOutline size={25} />
                sebastianweidel.de
              </button>

              <div className="items-center gap-4 hidden md:flex">
                <button className=" border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
                  <GoHeart size={25} />
                </button>
                <button className=" border flex items-center bg-white  gap-3 text-sm p-2 rounded-full">
                  <HiOutlineDotsVertical size={25} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center py-2 px-4 border-y absolute bottom-16 md:bottom-0 bg-white w-full left-0 z-10">
            <img
              src=""
              alt="Sebastian Weidel"
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold items-center flex gap-1">
                  {post.author_name}
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                {post.author_city || "null"} • Montfort •{" "}
                <span className="text-blue-500">Liefert</span>
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="mr-2 flex items-center gap-1">
                  <IoHeartSharp size={18} color={false ? "red" : "black"} />
                  126
                </div>
                <div className="flex items-center gap-1">
                  <IoLocationSharp size={18} color="black" />1 km
                </div>

                <span
                  className={`text-sm flex items-center gap-1 ml-2 ${
                    "Geöffnet" === "Geöffnet"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {"Geöffnet" === "Geöffnet" ? (
                    <FaClock />
                  ) : (
                    <IoMdCloseCircle />
                  )}
                  {"Geöffnet"}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </DrawerModal2>
  );
}

export default Detail;
