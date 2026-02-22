import React from "react";
import { motion } from "framer-motion";
import { Database, Languages, Code2, BarChart3, ArrowRight } from "lucide-react";

const ScienceDetailImg = "/Leaf-rust-detection-in-precision-agriculture.png";

export const TechBentoSection = () => (
    <section id="features" className="py-40 bg-emerald-50/30 relative overflow-hidden">
        <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#065f46 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Technical Architecture
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-[#05150E] tracking-tighter leading-[0.9]">
                        Precision tools for <br />
                        <span className="text-emerald-600">the modern field.</span>
                    </h3>
                </motion.div>
                <div className="flex items-center gap-6 pb-2">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Processing Power</span>
                        <span className="text-2xl font-black text-[#05150E]">2.4 PFLOPS</span>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Latency</span>
                        <span className="text-2xl font-black text-emerald-600">12ms</span>
                    </div>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]">

                {/* Feature 1: Knowledge Graph — Large */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-8 relative group"
                >
                    <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-8 shadow-2xl">
                                <Database className="w-8 h-8" />
                            </div>
                            <h4 className="text-4xl font-black text-[#05150E] mb-6 tracking-tight">The African <br />Knowledge Graph</h4>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-medium">Building the largest proprietary database of soil types and agricultural practices in the region.</p>
                        </div>
                        <div className="relative mt-8 h-48 bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden group/scanner">
                            <div className="absolute inset-x-0 top-0 bottom-12 p-8 grid grid-cols-4 gap-4">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="h-2 bg-blue-500/10 rounded-full overflow-hidden relative">
                                        <motion.div
                                            animate={{ width: ["0%", `${Math.random() * 100}%`, "0%"] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                                            className="absolute h-full bg-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                            <motion.div
                                animate={{ left: ["-10%", "110%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 z-10"
                            />
                            <div className="absolute bottom-0 inset-x-0 h-14 bg-blue-50/50 backdrop-blur-sm border-t border-blue-100/50 px-8 flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em] leading-none">Indexing African Soil Data...</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature 2: Multilingual Engine — Small */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-4 relative group"
                >
                    <div className="h-full p-12 rounded-[4rem] bg-[#05150E] border border-white/5 overflow-hidden flex flex-col justify-between text-white">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/20">
                                <Languages className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">Multilingual <br />Assistant Engine</h4>
                            <p className="text-white/40 text-sm leading-relaxed font-medium">Trained on local dialects for seamless interaction.</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {["Shona", "Ndebele", "Swahili", "Zulu", "English"].map((lang) => (
                                <span key={lang} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all cursor-default">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Feature 3: API — Small */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-4 relative group"
                >
                    <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20">
                                <Code2 className="w-7 h-7" />
                            </div>
                            <h4 className="text-2xl font-black text-[#05150E] mb-4 tracking-tight leading-tight">Agritech API <br />Integration</h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">Scale your application with our robust agricultural logic.</p>
                        </div>
                        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 font-mono text-[10px] text-purple-600">
                            <div className="flex gap-2 mb-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full" />
                                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                                <div className="w-2 h-2 bg-green-400 rounded-full" />
                            </div>
                            <code>GET /api/v1/soil_analysis</code>
                        </div>
                    </div>
                </motion.div>

                {/* Feature 4: Market Clearing House — Wide */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-8 relative group"
                >
                    <div className="h-full p-12 rounded-[4rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row gap-12 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-700">
                        <div className="flex-1 flex flex-col justify-between h-full">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-8 shadow-2xl shadow-amber-500/20">
                                    <BarChart3 className="w-7 h-7" />
                                </div>
                                <h4 className="text-3xl font-black text-[#05150E] mb-6 tracking-tight">Market Clearing <br />House Solution</h4>
                                <p className="text-gray-500 text-base leading-relaxed font-medium">Connecting thousands of farmers directly to high-value markets across Africa.</p>
                            </div>
                            <div className="mt-8 flex items-center gap-4 text-emerald-600 font-black text-xs uppercase tracking-[0.2em] cursor-pointer group/link">
                                Explore Marketplace
                                <div className="w-10 h-10 rounded-full border border-emerald-100 flex items-center justify-center group-hover/link:bg-emerald-600 group-hover/link:text-white transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 h-full bg-emerald-50 rounded-[3rem] border border-emerald-100/50 p-8 flex flex-col relative overflow-hidden">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Live Trade Stream</span>
                                <span className="text-[10px] font-black bg-emerald-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">+12.4%</span>
                            </div>
                            <div className="flex-grow flex items-end gap-1">
                                {[40, 60, 45, 80, 55, 70, 90, 65, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="flex-1 bg-emerald-600/30 rounded-t-lg group-hover:bg-emerald-600 transition-colors"
                                    />
                                ))}
                            </div>
                            <div
                                className="absolute inset-0 opacity-[0.2] pointer-events-none"
                                style={{ backgroundImage: "linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)", backgroundSize: "15px 15px" }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);
