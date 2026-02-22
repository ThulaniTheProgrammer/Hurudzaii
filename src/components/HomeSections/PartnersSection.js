import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./shared";

const partners = [
    { name: "POTRAZ", desc: "Regulating ICT", logo: "/partners/potraz.png" },
    { name: "CUT", desc: "University Partner", logo: "/partners/cut.png" },
    { name: "ZimTrade", desc: "Export Growth", logo: "/partners/zimtrade.png" },
    { name: "Eight2Five", desc: "Innovation Hub", logo: "/partners/Eight2Five.png" },
];

export const PartnersSection = () => (
    <section className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-xs text-center md:text-left">
                    <h4 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Strategic Partners</h4>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Working alongside leading institutions to advance global agricultural standards.</p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center"
                >
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="group flex flex-col items-center gap-6 cursor-default grayscale hover:grayscale-0 transition-all duration-700"
                        >
                            <div className="relative h-20 md:h-24 aspect-video flex items-center justify-center p-4 bg-gray-50/50 rounded-3xl group-hover:bg-emerald-50/50 group-hover:scale-110 transition-all duration-700 border border-transparent group-hover:border-emerald-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-sm group-hover:drop-shadow-[0_10px_20px_rgba(16,185,129,0.15)] transition-all"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-black text-[#05150E] group-hover:text-emerald-600 transition-colors tracking-tight">{partner.name}</div>
                                <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-hover:text-emerald-900/40 transition-colors">{partner.desc}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);
