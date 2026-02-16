import React, { useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../img/mlilo_logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Benefits", path: "#benefits" },
    { label: "Testimonials", path: "#testimonials" },
    { label: "Trust Badges", path: "#trust-badges" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="inPhone py-2 sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border- emerald-50/50">
      <div className="flex items-center justify-between px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center cursor-pointer group" onClick={() => navigate("/")}>
          <img src={logo} className="logoWeb transition-transform group-hover:scale-105" alt="Hurudza logo" />
          <span className="hidden lg:block ml-4 text-xl font-black text-emerald-900 tracking-tighter">HURUDZA.AI</span>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-emerald-700 hover:bg-emerald-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li
                key={item.path}
                onClick={() => {
                  if (item.path.startsWith("#")) {
                    const el = document.querySelector(item.path);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate(item.path);
                  }
                }}
                className={`${isActive(item.path) ? "text-emerald-700" : "text-gray-500 hover:text-emerald-600"} text-sm cursor-pointer font-bold transition-colors`}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => navigate("/request-demo")}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 px-4 pb-4 transition-all duration-300 ease-out origin-top z-40 ${isOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="mt-2 rounded-[2rem] bg-white shadow-2xl border border-emerald-100 overflow-hidden">
          <ul className="flex flex-col divide-y divide-emerald-50">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    if (item.path.startsWith("#")) {
                      const el = document.querySelector(item.path);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(item.path);
                    }
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 text-sm font-bold ${isActive(item.path) ? "text-emerald-700 bg-emerald-50" : "text-gray-700 hover:bg-emerald-50"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="p-4">
              <button
                onClick={() => { navigate("/request-demo"); setIsOpen(false); }}
                className="w-full text-center px-6 py-4 text-sm font-bold text-white bg-emerald-600 rounded-2xl shadow-lg"
              >
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
