import React from "react";
import { motion } from "framer-motion";
import { Network, Cpu, ArrowRight, Sprout, Monitor, Droplets, BarChart3 } from "lucide-react";
import { staggerContainer, fadeInUp } from "./shared";

const FeatureInfographic = "/High-tech-agriculture-at-sunrise.png";

export const EcosystemSection = () => (
    <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        <Network className="w-3 h-3" />
                        Connectivity
                    </motion.div>
                    <motion.h3 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#05150E] mb-12 leading-[1.05] tracking-tight">
                        The Complete <br />
                        <span className="text-emerald-600">Field-to-Market</span> <br />
                        Ecosystem.
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-gray-500 text-xl leading-relaxed mb-14 max-w-lg font-medium">
                        We've mapped the entire agricultural lifecycle into a single, intuitive platform. No more guesswork—just data-driven precision.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Soil Health", icon: Sprout },
                            { title: "Crop Monitoring", icon: Monitor },
                            { title: "Weather Flow", icon: Droplets },
                            { title: "Market Pulse", icon: BarChart3 },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 text-[#05150E] font-bold bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-emerald-200 group">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm uppercase tracking-wider">{item.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, x: 50 }}
                    whileInView={{ scale: 1, opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="relative z-10 p-6 bg-gradient-to-br from-white to-emerald-50/30 rounded-[4.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[4.5rem] -z-10" />
                        <img src={FeatureInfographic} alt="Infographic" className="w-full h-auto rounded-[3.8rem] shadow-2xl" />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-[#05150E] text-white p-6 rounded-[2.5rem] shadow-2xl border border-white/10"
                        >
                            <Cpu className="w-8 h-8 text-emerald-400 mb-2" />
                            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/60">System Load</div>
                            <div className="text-xl font-black">OPTIMAL</div>
                        </motion.div>
                    </div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-emerald-500/5 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-emerald-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                </motion.div>
            </div>
        </div>
    </section>
);
