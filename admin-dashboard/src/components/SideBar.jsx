import { HiOutlineUser, HiMenu, HiHome, HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  let [menuButton, setMenuButton] = useState(false);
  const handleMenuButton = () => {
    setMenuButton(!menuButton);
  };

  return (
    <>
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-white flex justify-between md:hidden order-1">
        {/* logo mobile */}
        <a href="/" className="block p-4 text-white font-bold">
          Clue Dashboard
        </a>
        {/* menu button */}
        <button
          className="px-4 focus:bg-gray-700"
          onClick={() => {
            handleMenuButton();
          }}
        >
          <HiMenu size={30} />
        </button>
      </div>

      <div
        className={`bg-gray-900 text-white h-screen w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          menuButton ? "" : "-translate-x-full"
        } transition duration-200 md:relative md:translate-x-0`}
      >
        {/* logo */}
        <a
          href="/"
          className="flex items-center space-x-2"
          onClick={() => handleMenuButton()}
        >
          <HiOutlineUser size={30} />

          <span className="text-white text-2xl font-extrabold">
            Clue Dashboard
          </span>
        </a>
        {/* nav */}
        <nav>
          <Link
            to="/"
            className="flex items-center space-x-2 py-2 px-4 rounded transition duration-200 hover:bg-gray-400"
          >
            <HiHome/> <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 py-2 px-4 rounded transition duration-200 hover:bg-gray-400"
          >
           <HiInformationCircle/> <span>About</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
