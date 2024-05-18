import React, { useState } from "react";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleCancel = () => {
    setToggle(false);
  };

  const handleLinkClick = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  return (
    <div className="md:sticky md:top-0 h-14 w-full bg-slate-900 flex justify-between items-center px-14">
      <div className="">
        <img
          className="h-10 w-10 rounded-full"
          src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
          alt="logo"
        />
      </div>
      {toggle && (
        <div className="fixed top-0 right-0 h-screen w-screen bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 h-screen w-[280px] bg-white z-100 shadow-lg">
          <div className="absolute top-4 px-3">
            <IoClose
              className="text-black text-2xl cursor-pointer"
              onClick={handleCancel}
            />
            
          </div>
            <ul className="flex flex-col items-center gap-4 font-semibold cursor-pointer mt-14">
              <li className="hover:text-purple-700">
                <Link to={"/"} onClick={handleLinkClick} >Home</Link>
              </li>
              <li className="hover:text-purple-700">
                <Link to={"service"} onClick={handleLinkClick} >Service</Link>{" "}
              </li>
              <li className="hover:text-purple-700">
                <Link to={"about-us"} onClick={handleLinkClick} >About Us</Link>
              </li>
              <li className="hover:text-purple-700">Portfolio</li>
              <li className="hover:text-purple-700">Contact Us</li>
            </ul>
          </div>
        </div>
      )}
      {!toggle && (
        <IoReorderThree
          className="md:hidden text-2xl cursor-pointer text-white"
          onClick={() => setToggle(true)}
        />
      )}
      <ul className="hidden md:flex md:justify-center md:items-center gap-8 font-semibold cursor-pointer text-white opacity-80">
        <li className="hover:text-purple-700">
          <Link to={"/"} onClick={handleLinkClick} >Home</Link>
        </li>
        <li className="hover:text-purple-700">
          <Link to={"service"} onClick={handleLinkClick} >Service</Link>
        </li>
        <li className="hover:text-purple-700">
          <Link to={"about-us"} onClick={handleLinkClick} >About Us</Link>
        </li>
        <li className="hover:text-purple-700">Portfolio</li>
        <li className="hover:text-purple-700">Contact Us</li>
      </ul>
    </div>
  );
}
