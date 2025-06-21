import { useState } from "react";
import {Link} from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import logo from "../../../public/logoAoron.png"
import { NavLink } from "react-router-dom";

const Header = () => {
  const [lang, setLang] = useState("EN");

  return (
    <header className="w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-white">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      </Link>
      {/* Navigation */}
      <nav className="space-x-6 hidden md:flex">
        <NavLink to="/" className="text-gray-800 hover:text-black">
          Home
        </NavLink>
        <NavLink to="/catalog" className="text-gray-800 hover:text-black">
          Catalog
        </NavLink>
        <NavLink to="/about" className="text-gray-800 hover:text-black">
          About
        </NavLink>
        <NavLink to="/cart" className="text-gray-800 hover:text-black">
          Cart
        </NavLink>
        <NavLink to="/contact" className="text-gray-800 hover:text-black">
          Contact
        </NavLink>
      </nav>

      {/* Language & Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {["EN", "RU", "DE"].map((lng) => (
            <button
              key={lng}
              onClick={() => setLang(lng)}
              className={`px-2 py-1 text-sm rounded ${
                lang === lng
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {lng}
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="relative">
          <FaShoppingBag className="text-2xl text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
