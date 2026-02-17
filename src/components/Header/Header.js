import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home as HomeIcon, Cpu, Globe2, Newspaper, Users } from "lucide-react";
import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/", icon: HomeIcon },
    { label: "Features", path: "/#features", icon: Cpu },
    { label: "How it Works", path: "/#how-it-works", icon: Globe2 },
    { label: "Partners", path: "/#partners", icon: Users },
    { label: "Latest News", path: "/news", icon: Newspaper },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith("/#")) {
      const sectionId = path.split("#")[1];
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    return location.pathname === path || (path.startsWith("/#") && location.hash === `#${path.split("#")[1]}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${scrolled ? "mt-2" : "mt-0"
        }`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2.5rem] border ${scrolled
          ? "bg-white/70 backdrop-blur-2xl border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] py-3 px-8"
          : "bg-transparent border-transparent py-5 px-6"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            onClick={() => navigate("/")}
            className="group flex items-center gap-4 cursor-pointer"
          >
            <div className="relative p-2.5 rounded-2xl bg-white border border-white/20 shadow-xl group-hover:scale-110 transition-all duration-500">
              <img src={logo} className="w-12 h-12 object-contain" alt="Hurudzai Logo" />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${scrolled ? "text-[#05150E]" : "text-white"
                }`}>
                HURUDZAI <span className="text-emerald-500 underline decoration-2 underline-offset-4">AI</span>
              </span>
              <span className={`text-[10px] font-black uppercase tracking-[0.1em] mt-1 transition-colors duration-500 ${scrolled ? "text-emerald-700" : "text-emerald-400"
                }`}>
                Artificial Intelligence Contact Centre
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${isActive(item.path)
                  ? scrolled ? "bg-[#05150E] text-white shadow-xl" : "bg-white/20 text-white backdrop-blur-md"
                  : scrolled ? "text-[#05150E]/60 hover:text-[#05150E] hover:bg-[#05150E]/5" : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/request-demo")}
              className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95 ${scrolled
                ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl shadow-emerald-600/20"
                : "bg-white text-[#05150E] hover:bg-emerald-50 shadow-2xl"
                }`}
            >
              Request Demo <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-2xl transition-all ${scrolled ? "bg-[#05150E]/5 text-[#05150E]" : "bg-white/10 text-white backdrop-blur-lg"
                }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            style={{ originY: 0 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4"
          >
            <div className="bg-white rounded-[3rem] border border-emerald-100 shadow-2xl p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10" />

              <div className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${isActive(item.path)
                      ? "bg-emerald-600 text-white shadow-xl shadow-emerald-600/20"
                      : "bg-gray-50 text-[#05150E]/60 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                  >
                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]">
                      <item.icon className="w-5 h-5 opacity-60" />
                      {item.label}
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive(item.path) ? "translate-x-0" : "-translate-x-2 opacity-0"}`} />
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <button
                  onClick={() => { navigate("/request-demo"); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#05150E] text-white font-black text-xs uppercase tracking-widest shadow-2xl active:scale-95 transition-all"
                >
                  Request System Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
