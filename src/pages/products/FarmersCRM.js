import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import { Database, RefreshCw, MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { FarmersCRMIcon } from "../../components/img/ProductIcons";

const features = [
    { icon: Database, title: "Unified Farmer Profiles", desc: "Store and access every farmer's history, crop cycles, and performance in one place." },
    { icon: TrendingUp, title: "AI Yield Predictions", desc: "Machine-learning models trained on local agri-data to forecast yields with high accuracy." },
    { icon: MapPin, title: "Geo-tagged Plots", desc: "Visualize farmlands on interactive maps with plot-level analytics and alerts." },
    { icon: RefreshCw, title: "Season Tracking", desc: "Automate planting season reminders, input schedules, and harvest follow-ups." },
];

const FarmersCRM = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans">
        <Header />

        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#05150E] to-[#05150E]" />
            <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-[#10B981]/20 rounded-full px-5 py-2 mb-8">
                        <FarmersCRMIcon className="w-6 h-6" />
                        <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Farmers AI CRM</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                        Manage Every <br />
                        <span className="text-emerald-400">Farmer Relationship</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        A purpose-built CRM for agri-businesses, cooperatives, and government programs that need to track, engage, and support thousands of farmers at scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                            Request Access <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all">
                            See Features
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>

        <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-emerald-500/30 rounded-3xl p-8 transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                                <f.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-black mb-2">{f.title}</h3>
                            <p className="text-white/50 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <Footer />
    </div>
);

export default FarmersCRM;
