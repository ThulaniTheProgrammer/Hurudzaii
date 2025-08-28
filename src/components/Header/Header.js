import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inPhone my-2">
      <div className="flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/") }>
          <img src={logo} className="logoWeb" alt="" />
          <h3 className="text-md font-bold opacity-[.70] ml-2">HURUDZA.AI</h3>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-[#219653] hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <div className="hidden md:block flex-1">
          <ul className="flex items-center justify-center">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
            >
              Home
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
              onClick={() => navigate("/voice")}
            >
              Voice Help
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
            >
              Disease Prediction
            </li>
            <li
              onClick={() => navigate("/sms")}
              className="text-sm cursor-pointer font-semibold text-[#219653] hover:opacity-90 mx-3"
            >
              SMS Service
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-3">
          <ul className="flex flex-col space-y-2 mt-2">
            <li onClick={() => { navigate("/"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">Home</li>
            <li onClick={() => { navigate("/voice"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">Voice Help</li>
            <li onClick={() => { navigate("/crop"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">Crop Recommendation</li>
            <li onClick={() => { navigate("/fertilizer"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">Fertilizer Recommendation</li>
            <li onClick={() => { navigate("/disease"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">Disease Prediction</li>
            <li onClick={() => { navigate("/sms"); setIsOpen(false); }} className="text-sm font-semibold text-[#219653]">SMS Service</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
