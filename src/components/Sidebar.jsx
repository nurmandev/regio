import React from "react";
import { NavLink } from "react-router-dom";
import { GoHeart, GoHomeFill } from "react-icons/go";
import {
  IoHeartSharp,
  IoLocationOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FaRectangleList, FaRegRectangleList } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { useUsers } from "../contexts/User";

const sidebarLinks = [
  {
    path: "favourites",
    text: "Favourites",
    icon: <GoHeart />,
    activeIcon: <IoHeartSharp />,
  },
  {
    path: "sellers",
    text: "Sellers",
    icon: <FaRegRectangleList />,
    activeIcon: <FaRectangleList />,
  },
  {
    path: "/",
    text: "Location",
    icon: <IoLocationOutline />,
    activeIcon: <IoLocationSharp />,
    end: true,
  },
  {
    path: "posts",
    text: "Posts",
    icon: <FiHome />,
    activeIcon: <GoHomeFill />,
  },
  {
    path: "cart",
    text: "Cart",
    icon: <GiShoppingCart />,
    activeIcon: <GiShoppingCart />,
  },
];

function Sidebar() {
  const { user, logout } = useUsers();
  return (
    <nav className=" overflow-y-auto  scrollbar-hide h-full">
      <ul className="">
        <NavLink
          to={"profile"}
          className={({ isActive }) =>
            `flex items-center p-2 text-primary ${isActive ? "font-bold" : ""}`
          }
        >
          <img
            src="data:image/jpeg;base64,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"
            className="h-6 w-6 rounded-full mr-2"
          />
          {user.firstname} {user.lastname}
        </NavLink>
        {sidebarLinks.map((link, index) => (
          <li
            key={link.text}
            className="mb-3 text-base hover:font-medium transition-all duration-300 "
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `flex items-center p-2 text-primary ${
                  isActive ? "font-bold" : ""
                }`
              }
              end={link.end}
            >
              {({ isActive }) => (
                <>
                  <span className="mr-2 text-xl">
                    {isActive ? link.activeIcon : link.icon}
                  </span>
                  {link.text}
                </>
              )}
            </NavLink>
          </li>
        ))}

        <li
          onClick={() => logout()}
          className="mb-3 text-base hover:font-medium transition-all duration-300 "
        >
          Logout
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
