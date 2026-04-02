import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiUser } from "react-icons/fi";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/logo.png.png";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll korle navbar-e shadow add hobe
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu open thakle body scroll band
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "border-b border-black/10"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-black">
          <div className="container flex items-center justify-between py-2.5 px-4">
            <div className="flex-1 flex justify-center">
              <p className="font-poppins text-[12px] md:text-[13px] text-white text-center">
                Summer Sale For All Swim Suits And Free Express Delivery — OFF 50%!{" "}
                <a href="" className="font-semibold underline ml-1 whitespace-nowrap">
                  Shop Now
                </a>
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <div className="relative">
                <select className="appearance-none pl-3 pr-7 py-1 bg-transparent text-white font-poppins text-[13px] outline-none cursor-pointer">
                  <option className="text-black">English</option>
                  <option className="text-black">Bangla</option>
                </select>
                <IoIosArrowDown className="absolute right-1 top-1/2 -translate-y-1/2 text-white text-[12px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 text-[22px] transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <img src={logo} className="w-[100px] md:w-[120px] cursor-pointer" alt="Logo" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex flex-1 justify-center">
              <ul className="flex gap-10">
                {[
                  { label: "Home", to: "/" },
                  { label: "Contact", to: "/contact" },
                  { label: "About", to: "/about" },
                  { label: "Sign Up", to: "/signup" },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="font-poppins text-[15px] font-medium text-black hover:text-red-500 transition-colors relative group"
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop: Search + Icons */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-[#F5F5F5] py-2.5 pl-4 pr-10 w-[200px] lg:w-[243px] font-poppins text-[13px] rounded-lg outline-none focus:ring-2 focus:ring-red-200 transition"
                />
                <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex gap-1 items-center">
                {[
                  { icon: <IoHeartOutline />, to: "/wishlist" },
                  { icon: <IoCartOutline />, to: "/cart" },
                  { icon: <FiUser />, to: "/account" },
                ].map(({ icon, to }, i) => (
                  <Link
                    key={i}
                    to={to}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[20px] text-black hover:bg-red-500 hover:text-white transition-colors"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile: Cart icon only (right side) */}
            <div className="flex md:hidden gap-2">
              <Link
                to="/cart"
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 text-[20px] hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
              >
                <IoCartOutline />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
          {/* Overlay Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-black/10">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} className="w-[100px]" alt="Logo" />
            </Link>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-black/10 text-[22px]"
            >
              <HiX />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-[#F5F5F5] py-3 pl-4 pr-11 font-poppins text-[14px] rounded-xl outline-none focus:ring-2 focus:ring-red-200 transition"
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]" />
            </div>

            {/* Nav Links — Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Contact", to: "/contact" },
                { label: "About", to: "/about" },
                { label: "Sign Up", to: "/signup", accent: true },
              ].map(({ label, to, accent }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={closeMenu}
                  className={`py-3 text-center rounded-xl font-poppins font-medium text-[15px] border transition-colors ${
                    accent
                      ? "bg-red-500 text-white border-red-500"
                      : "border-black/10 text-black hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Wishlist + Account */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-black/10 font-medium text-[14px] text-black hover:bg-gray-50 transition"
              >
                <IoHeartOutline className="text-[18px]" />
                Wishlist
              </Link>
              <Link
                to="/account"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-black/10 font-medium text-[14px] text-black hover:bg-gray-50 transition"
              >
                <FiUser className="text-[18px]" />
                Account
              </Link>
            </div>

            {/* Language selector — mobile */}
            <div className="border border-black/10 rounded-xl px-4 py-3 flex items-center justify-between">
              <span className="text-[14px] text-gray-500 font-poppins">Language</span>
              <div className="relative">
                <select className="appearance-none pl-2 pr-6 text-[14px] font-poppins font-medium outline-none bg-transparent cursor-pointer">
                  <option>English</option>
                  <option>Bangla</option>
                </select>
                <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;