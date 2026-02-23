import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    MessageSquare,
    Sprout,
    Camera,
    TrendingUp,
    Zap,
    CloudRain,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Home,
    Mic2
} from "lucide-react";
import logo from "../img/logo.png";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: "My Farm Home", icon: LayoutDashboard, path: "/console" },
        { name: "Talk to AI", icon: MessageSquare, path: "/sandbox" },
        { name: "Voice Assistant", icon: Mic2, path: "/voice" },
        { name: "Crop Doctor", icon: Camera, path: "/disease" },
        { name: "Market Prices", icon: TrendingUp, path: "/market" },
        { name: "Soil & Fertilizer", icon: Zap, path: "/fertilizer" },
        { name: "Planting Guide", icon: Sprout, path: "/crop" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("demoAccess");
        navigate("/");
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#F8FAF9] flex">
            {/* ── Sidebar (Desktop) ── */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 bg-[#05150E] text-white transition-all duration-300 hidden lg:flex flex-col ${isSidebarOpen ? "w-72" : "w-20"}`}
            >
                {/* Logo Area */}
                <div className="h-24 flex items-center px-6 border-b border-white/5">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
                    {isSidebarOpen && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-3 font-black uppercase tracking-widest text-sm"
                        >
                            Hurudzai AI
                        </motion.span>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow py-8 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${isActive(item.path) ? "bg-emerald-600 text-white shadow-lg" : "text-white/40 hover:bg-white/5 hover:text-white"}`}
                        >
                            <item.icon className="w-6 h-6 shrink-0" />
                            {isSidebarOpen && (
                                <span className="font-black uppercase tracking-tight text-xs">{item.name}</span>
                            )}
                            {isActive(item.path) && isSidebarOpen && (
                                <ChevronRight className="ml-auto w-4 h-4" />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-white/5 space-y-2">
                    <button
                        onClick={() => navigate("/")}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl text-white/40 hover:bg-white/5 hover:text-white transition-all"
                    >
                        <Home className="w-6 h-6 shrink-0" />
                        {isSidebarOpen && <span className="font-black uppercase tracking-tight text-xs">Back to Site</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl text-rose-400/60 hover:bg-rose-500/10 hover:text-rose-400 transition-all font-black uppercase tracking-tight text-xs"
                    >
                        <LogOut className="w-6 h-6 shrink-0" />
                        {isSidebarOpen && <span>Logout</span>}
                    </button>
                </div>

                {/* Collapse Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-28 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center border-2 border-[#05150E] hover:scale-110 transition-transform"
                >
                    <ChevronRight className={`w-3 h-3 transition-transform ${isSidebarOpen ? "rotate-180" : ""}`} />
                </button>
            </aside>

            {/* ── Mobile Navigation ── */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-[#05150E] text-white px-6 h-20 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-8 h-8 object-contain bg-white rounded-lg p-1" />
                    <span className="font-black uppercase tracking-widest text-xs">Hurudzai</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 bg-white/5 rounded-xl text-white"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        className="fixed inset-0 z-50 bg-[#05150E] pt-24 px-6 lg:hidden"
                    >
                        <div className="space-y-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        navigate(item.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all ${isActive(item.path) ? "bg-emerald-600 text-white shadow-xl" : "bg-white/5 text-white/40 shadow-sm"}`}
                                >
                                    <item.icon className="w-6 h-6" />
                                    <span className="font-black uppercase tracking-tight text-sm">{item.name}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-12 pt-12 border-t border-white/5 space-y-4">
                            <button onClick={() => navigate("/")} className="w-full flex items-center gap-4 p-5 text-white/40 font-black uppercase text-xs">
                                <Home className="w-5 h-5" /> Main Website
                            </button>
                            <button onClick={handleLogout} className="w-full flex items-center gap-4 p-5 bg-rose-500/10 text-rose-400 rounded-2xl font-black uppercase text-xs shadow-xl">
                                <LogOut className="w-5 h-5" /> Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Main Content Area ── */}
            <main
                className={`flex-grow transition-all duration-500 min-h-screen pt-20 lg:pt-0 ${isSidebarOpen ? "lg:ml-72" : "lg:ml-20"}`}
            >
                {/* Simplified Content Header (Desktop Only) */}
                <div className="hidden lg:flex h-24 items-center justify-between px-12 bg-white border-b border-gray-100 sticky top-0 z-40">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#05150E]/40">
                        {menuItems.find(item => isActive(item.path))?.name || "Member Dashboard"}
                    </h2>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">System Live</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
