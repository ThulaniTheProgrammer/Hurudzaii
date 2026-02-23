import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    MessageSquare,
    Terminal,
    Building2,
    Mic2,
    Smartphone,
    ShieldAlert,
    BarChart3,
    Bot,
    ArrowRight,
    Zap,
    Globe2,
    Activity,
    BrainCircuit,
    Cpu,
    Camera,
    Languages,
    CloudRain,
    TrendingUp
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const ProductConsole = () => {
    const navigate = useNavigate();

    // Simplified Services for Farmers
    const mainTools = [
        {
            id: "voice",
            title: "Ask by Talking",
            desc: "Don't want to type? Just speak in Shona, Ndebele or English.",
            icon: Mic2,
            path: "/voice",
            color: "blue",
            btnText: "Start Talking"
        },
        {
            id: "wa-bot",
            title: "WhatsApp Assistant",
            desc: "Chat with our AI directly on WhatsApp anytime.",
            icon: MessageSquare,
            href: "https://wa.me/message/5VEAMYH37ER3F1",
            color: "green",
            btnText: "Open WhatsApp"
        },
        {
            id: "disease",
            title: "Sick Crops?",
            desc: "Take a photo of your leaves to see what is wrong.",
            icon: Camera,
            path: "/disease",
            color: "rose",
            btnText: "Check My Crop"
        },
        {
            id: "market",
            title: "Selling Prices",
            desc: "Check the latest prices at Mbare Musika and other markets.",
            icon: TrendingUp,
            path: "/market",
            color: "amber",
            btnText: "Check Prices"
        },
        {
            id: "fertilizer",
            title: "Fertilizer Guide",
            desc: "Know exactly which fertilizer to use for your soil.",
            icon: Zap,
            path: "/fertilizer",
            color: "emerald",
            btnText: "How Much to Use"
        },
        {
            id: "weather",
            title: "Planting Dates",
            desc: "Best dates to plant based on your local rain forecast.",
            icon: CloudRain,
            path: "/crop",
            color: "purple",
            btnText: "When to Plant"
        }
    ];

    return (
        <div className="font-sans selection:bg-emerald-100">
            <div className="max-w-6xl mx-auto">

                {/* ── Friendly Welcome ── */}
                <section className="mb-8 md:mb-12">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="bg-[#05150E] p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                                Hello! <span className="text-emerald-400">Ndeipi! Mhoroi!</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-emerald-100/60 text-lg md:text-xl font-medium max-w-xl">
                                Welcome to your farm assistant. What do you want to do today?
                            </motion.p>
                        </div>
                    </motion.div>
                </section>

                {/* ── Simple Tool Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {mainTools.map((tool, i) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => tool.href ? window.open(tool.href, "_blank") : navigate(tool.path)}
                            className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-emerald-100 transition-all duration-500 cursor-pointer flex flex-col items-center text-center"
                        >
                            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-${tool.color}-50 flex items-center justify-center text-${tool.color}-600 mb-6 md:mb-8 transition-transform group-hover:scale-110 shadow-sm`}>
                                <tool.icon className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-[#05150E] mb-2 md:mb-3 uppercase tracking-tight">{tool.title}</h3>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8 md:mb-10 sm:h-10 line-clamp-2 sm:line-clamp-none">{tool.desc}</p>

                            <div className={`w-full py-4 rounded-xl md:rounded-2xl bg-${tool.color}-600 text-white font-black text-[10px] uppercase tracking-widest group-hover:bg-[#05150E] transition-colors shadow-lg shadow-${tool.color}-600/20`}>
                                {tool.btnText}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Help Section ── */}
                <section className="mt-12 md:mt-20 p-8 md:p-10 bg-emerald-50 rounded-[2.5rem] md:rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                            <Languages className="w-7 h-7 md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h4 className="text-lg md:text-xl font-black text-[#05150E] uppercase tracking-tight">Need help in your language?</h4>
                            <p className="text-emerald-700/60 font-medium text-sm md:text-base">All our tools understand Shona and Ndebele.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate("/sandbox")}
                        className="w-full md:w-auto px-10 py-5 bg-[#05150E] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-xl active:scale-95 whitespace-nowrap"
                    >
                        Try All-in-One Assistant
                    </button>
                </section>
            </div>
        </div>
    );
};

export default ProductConsole;
