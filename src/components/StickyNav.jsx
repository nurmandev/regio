import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { FaRectangleList, FaRegRectangleList } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { GoHeart, GoHomeFill } from "react-icons/go";
import {
  IoHeartSharp,
  IoLocationOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    path: "profile",
    text: "Profile",
    icon: <FaRegUserCircle size={30} />,
    activeIcon: <FaUserCircle size={30} />,
  },
  {
    path: "favourites",
    text: "Favourites",
    icon: <GoHeart size={30} />,
    activeIcon: <IoHeartSharp size={30} />,
  },
  {
    path: "sellers",
    text: "Sellers",
    icon: <FaRegRectangleList size={30} />,
    activeIcon: <FaRectangleList size={30} />,
  },
  {
    path: "/",
    text: "Location",
    icon: <IoLocationOutline size={30} />,
    activeIcon: <IoLocationSharp size={30} />,
    end: true,
  },
  {
    path: "posts",
    text: "Posts",
    icon: <FiHome size={30} />,
    activeIcon: <GoHomeFill size={30} />,
  },
];

const StickyNav = () => {
  return (
    <div className="block lg:hidden">
      <div className="flex h-[55px] justify-between border-t fixed w-full z-30 bottom-0 bg-white">
        {sidebarLinks.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `items-center flex flex-col grow justify-center min-w-[50px] relative whitespace-nowrap text-primary `
            }
            end={link.end}
            key={link.path}
          >
            {({ isActive }) => (
              <>
                <span className="mr-2 text-xl">
                  {isActive ? link.activeIcon : link.icon}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="h-[60px]" />
    </div>
  );
};

export default StickyNav;
