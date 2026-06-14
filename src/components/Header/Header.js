import React, { useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../img/mlilo_logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Voice Help", path: "/voice" },
    { label: "Crop Recommendation", path: "/crop" },
    { label: "Fertilizer Recommendation", path: "/fertilizer" },
    { label: "Disease Prediction", path: "/disease" },
    { label: "SMS Service", path: "/sms" }
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="inPhone my-2 relative z-40">
      <div className="flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/") }>
          <img src={logo} className="logoWeb" alt="" />
        
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-[#219653] hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div className="hidden md:block flex-1">
          <ul className="flex items-center justify-center">
            {navItems.map((item) => (
              <li
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`${isActive(item.path) ? "text-[#1e874b]" : "text-[#219653]"} text-sm cursor-pointer font-semibold hover:opacity-90 mx-3`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 px-4 pb-4 transition-all duration-300 ease-out origin-top z-40 ${
          isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mt-2 rounded-2xl bg-white shadow-xl border border-emerald-100 overflow-hidden">
          <ul className="flex flex-col divide-y">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => { navigate(item.path); setIsOpen(false); }}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold ${
                    isActive(item.path) ? "text-emerald-700 bg-emerald-50" : "text-[#219653] hover:bg-emerald-50"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
