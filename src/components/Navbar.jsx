import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // PREVENT THE SCROLLING WHILE MENU IS OPEN
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {/* --------- mobile menu ---------- */}
      <div
        className={`md:hidden ${
          showMenu ? "fixed w-full" : "h-0 w-0"
        }  bg-white top-0 bottom-0 right-0 overflow-hidden transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a href="#About" className="px-4 py-2 rounded-full inline-block">
            About
          </a>
          <a href="#Projects" className="px-4 py-2 rounded-full inline-block">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
