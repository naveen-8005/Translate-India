import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ contactRef, languageRef, serviceRef }) => {
  const [menu, setMenu] = useState(false);

  const scrollWithOffset = (ref) => {
    const offset = -80; // Adjust if your navbar height changes
    const element = ref.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenu(false);
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 px-5 py-4 md:px-0 bg-white md:-ml-3 z-30">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center ">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-4">
          <img
            src="Logo3.jpg"
            alt="Logo"
            className="h-[50px] lg:h-[65px] rounded-full object-cover border"
          />

          <div className="leading-tight">
            <h1 className="text-xl lg:text-2xl font-bold text-blue-700">
              Translate India
            </h1>
            <p className="text-[12px] lg:text-[14px] text-gray-700 font-medium">
              Your <span className="text-blue-600">Language</span>, Our Expertise
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex items-center gap-14 md:text-[17px] lg:text-[18px] font-semibold text-gray-800">

          <button
            className="relative group"
            onClick={() => window.location.reload()}
          >
            Home
            <span className="w-0 h-[2px] bg-blue-600 block group-hover:w-full transition-all duration-300"></span>
          </button>

          <button
            className="relative group"
            onClick={() => serviceRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Services
            <span className="w-0 h-[2px] bg-blue-600 block group-hover:w-full transition-all duration-300"></span>
          </button>

          {/* UPDATED DESKTOP LANGUAGES */}
          <button
            className="relative group"
            onClick={() => languageRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Languages
            <span className="w-0 h-[2px] bg-blue-600 block group-hover:w-full transition-all duration-300"></span>
          </button>

          <button
            className="relative group"
            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
            <span className="w-0 h-[2px] bg-blue-600 block group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="sm:hidden text-gray-800" onClick={() => setMenu(true)}>
          <FiMenu size={32} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menu && (
        <div className="sm:hidden bg-[#1e2842] text-white w-screen -ml-5 py-8 px-7 rounded-b-xl shadow-md mt-5">

          <button className="mb-6" onClick={() => setMenu(false)}>
            <IoMdClose size={28} />
          </button>

          <div className="flex flex-col gap-6 text-[20px] font-medium">

            <button
              onClick={() => window.location.reload()}
              className="underline underline-offset-4"
            >
              Home
            </button>

            <button
              onClick={() => serviceRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="underline underline-offset-4"
            >
              Services
            </button>

            {/* UPDATED MOBILE LANGUAGES */}
            <button
                onClick={() => languageRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="underline underline-offset-4"
            >
              Languages
            </button>

            <button
                   onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}  
              className="underline underline-offset-4"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
