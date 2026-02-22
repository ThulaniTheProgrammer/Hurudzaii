import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Download, Cpu, Smartphone, Network, Sprout, Bot, Database } from "lucide-react";

export const BulletinStrip = () => (
    <div className="bg-[#05150E] border-y border-white/5 py-10 overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#05150E] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05150E] to-transparent z-10" />

        <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap w-fit"
        >
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                    {[
                        { label: "A.I Contact Centre", icon: Sparkles },
                        { label: "Download Hurudzai App", icon: Download },
                        { label: "Localized AI Models", icon: Cpu },
                        { label: "Google Play Store", icon: Smartphone },
                        { label: "Field-to-Market Data", icon: Network },
                        { label: "Precision Agronomy", icon: Sprout },
                        { label: "SMS Integrated v4.0", icon: Bot },
                        { label: "Soil Nutrient Graph", icon: Database },
                    ].map((item, j) => (
                        <div key={j} className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <item.icon className="w-4 h-4 text-emerald-500/50" />
                                <span className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] group-hover:text-emerald-300 transition-colors">
                                    {item.label}
                                </span>
                            </div>
                            <div className="text-emerald-900 font-light text-2xl">/</div>
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    </div>
);
