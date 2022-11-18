import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("#000814");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#00296b");
        setTextColor("#e8d1d1");
      } else {
        setColor("#000814");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold sm:text-4xl text-xl text-white">Maza&apos;s blog</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 text-white hover:text-[#ffc300]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-white hover:text-[#ffc300]">
            <Link href="/Contact">Contact Me</Link>
          </li>
          <li className="p-4 text-white hover:text-[#ffc300]">
            <Link href="/About">About</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {/* tailwind: apabila min-width > 640 ? muncul : hidden */}
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-[0] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#00509d] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#00509d] text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-[#ffc300]">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-[#ffc300]">
              <Link href="/Contact">Contact Me</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-[#ffc300]">
              <Link href="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
