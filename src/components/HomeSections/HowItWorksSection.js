import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldAlert, Zap, Bot } from "lucide-react";
import { staggerContainer, fadeInUp } from "./shared";

const HomeFarmerImg = "/Farm-field-nutrient-analysis-at-sunset.png";

export const HowItWorksSection = () => (
    <section id="how-it-works" className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">

                {/* Left: Farmer image with sci-fi overlays */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group p-4"
                >
                    <div className="relative rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[16px] border-emerald-50/50">
                        <img src={HomeFarmerImg} alt="Farmer" className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        {/* Scanner Line */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,1)] z-20 pointer-events-none opacity-80"
                        />
                        {/* Floating Data Nodes */}
                        <div className="absolute top-12 right-12 flex flex-col gap-4">
                            {[Globe2, ShieldAlert, Zap, Bot].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.2 }}
                                    className="p-4 bg-[#05150E]/40 backdrop-blur-xl border border-white/20 rounded-2xl text-white shadow-2xl"
                                >
                                    <Icon className="w-5 h-5 text-emerald-400" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
                </motion.div>

                {/* Right: Steps */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        Simplifying Science
                    </motion.div>
                    <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-black text-[#05150E] mb-16 leading-tight tracking-tight">
                        Complex Analysis. <br />Simple Steps.
                    </motion.h3>

                    <div className="space-y-12">
                        {[
                            { title: "Input Basic Soil Data", desc: "Share your soil observations via SMS, Voice, or App. No internet required for SMS/Voice.", num: "01" },
                            { title: "AI Analysis", desc: "Our engine cross-references historical data, local weather patterns, and soil science.", num: "02" },
                            { title: "Actionable Guidance", desc: "Receive clear planting, fertilizing, and protection schedules in your local language.", num: "03" },
                        ].map((step, i) => (
                            <motion.div key={i} variants={fadeInUp} className="flex gap-10 group relative">
                                {i !== 2 && (
                                    <div className="absolute left-10 top-20 bottom-[-20px] w-0.5 bg-gradient-to-b from-emerald-500 to-transparent opacity-20" />
                                )}
                                <div className="flex-shrink-0 w-20 h-20 rounded-[2rem] bg-emerald-600 text-white flex items-center justify-center font-black text-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {step.num}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-[#05150E] mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{step.title}</h4>
                                    <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-md">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);
