import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import {
    Database, RefreshCw, MapPin, ArrowRight, TrendingUp,
    BarChart3, Users, LayoutDashboard, ShieldCheck,
    Zap, Calendar, PieChart
} from "lucide-react";
import { FarmersCRMIcon } from "../../components/img/ProductIcons";
import { staggerContainer, fadeInUp, floatingAnim } from "../../components/HomeSections/shared";

const CRM_HERO_IMG = "/Farm-field-nutrient-analysis-at-sunset.png";

const features = [
    {
        icon: Database,
        title: "Unified Farmer Profiles",
        desc: "Store and access every farmer's history, crop cycles, and performance in one place. Complete with soil history and historical yields.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: TrendingUp,
        title: "AI Yield Predictions",
        desc: "Predict future production at the regional or individual farm level using models trained on local environmental data.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: MapPin,
        title: "Geo-tagged Plots",
        desc: "Visualize farmlands on interactive maps with plot-level analytics, satellite monitoring, and custom risk alerts.",
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
    {
        icon: RefreshCw,
        title: "Season Tracking",
        desc: "Automate planting reminders, input delivery schedules, and harvest follow-ups via integrated SMS and WhatsApp triggers.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
];

const FarmersCRM = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
        <Header />

        {/* ── Hero Section ── */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#05150E]" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <img src={CRM_HERO_IMG} alt="Field Analysis" className="w-full h-full object-cover blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-transparent to-[#05150E]" />
            </motion.div>

            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-[1fr_550px] gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-xl">
                            <FarmersCRMIcon className="w-6 h-6" />
                            <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em]">Precision CRM v3.2</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                            Manage Every <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
                                Relationship.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-emerald-100/60 text-xl max-w-xl leading-relaxed mb-12 font-medium">
                            A purpose-built CRM for agri-businesses, cooperatives, and government programs that need to track, engage, and support thousands of farmers with data-driven precision.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 items-center">
                            <a
                                href="/request-demo"
                                className="group flex items-center justify-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base uppercase tracking-widest px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-emerald-600/30 active:scale-95"
                            >
                                Request Admin Access
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-widest">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                Enterprise Validated
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Dashboard Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <motion.div animate={floatingAnim} className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                        <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest">Aggregate View</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                                    <Users className="w-5 h-5 text-blue-400 mb-3" />
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Farmers</div>
                                    <div className="text-2xl font-black">12,482</div>
                                </div>
                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                                    <PieChart className="w-5 h-5 text-emerald-400 mb-3" />
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Avg. Yield</div>
                                    <div className="text-2xl font-black">+38.4%</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Live Incident Log</div>
                                {[
                                    { farm: "Chinhoyi Sector G", status: "Harvesting", color: "text-emerald-400" },
                                    { farm: "Mazowe North", status: "Irrigation Alert", color: "text-amber-400" },
                                    { farm: "Bulawayo Hub", status: "Input Delivery", color: "text-blue-400" }
                                ].map((log, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-xs font-bold text-white/80">{log.farm}</span>
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${log.color}`}>{log.status}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative glow */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Features Bento ── */}
        <section id="features" className="py-32 px-6 bg-white overflow-hidden text-[#05150E]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                        >
                            System Features
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">Farmer-centric <br /><span className="text-emerald-600">Infrastructure.</span></h2>
                    </div>
                    <p className="text-gray-400 text-lg font-medium max-w-xs text-right">Centralising regional agriculture data for impactful decision-making.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-gray-50 hover:bg-emerald-50/50 border border-gray-100 hover:border-emerald-200 rounded-[3rem] p-12 transition-all duration-700 flex flex-col md:flex-row gap-8 items-start"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-white text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                <f.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase group-hover:text-emerald-700 transition-colors">{f.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium text-base mb-6">{f.desc}</p>
                                <div className="flex items-center gap-4 text-emerald-600 font-black text-[10px] uppercase tracking-widest border-t border-gray-100 pt-6">
                                    <Zap className="w-4 h-4" />
                                    Instant Deployment
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Impact Section ── */}
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#05150E] rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent" />
                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                <BarChart3 className="w-3 h-3" />
                                Data-Driven Scale
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-8 uppercase">Operational <br /><span className="text-emerald-400">Visibility.</span></h3>
                            <p className="text-emerald-100/50 text-xl leading-relaxed mb-12 font-medium">
                                Stop working in the dark. Hurudzai AI CRM aggregates localized data across your entire network, giving you a birds-eye view of crop health, input needs, and harvest readiness.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <Calendar className="w-8 h-8 text-blue-400 mb-4" />
                                    <div className="font-black text-white text-lg mb-1 tracking-tight">Cycle Tracking</div>
                                    <p className="text-white/40 text-sm font-medium leading-relaxed">Automated tracking from land prep to point-of-sale.</p>
                                </div>
                                <div>
                                    <RefreshCw className="w-8 h-8 text-purple-400 mb-4" />
                                    <div className="font-black text-white text-lg mb-1 tracking-tight">Sync Updates</div>
                                    <p className="text-white/40 text-sm font-medium leading-relaxed">Real-time feedback loops from field agronomists.</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[3rem] overflow-hidden border-[8px] border-white/5 shadow-2xl shadow-black/80"
                        >
                            <img src="/High-tech-agriculture-at-sunrise.png" alt="Map View" className="w-full h-auto opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 animate-pulse">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 bg-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-[#05150E] uppercase">Ready to scale your <br /><span className="text-emerald-600 underline decoration-8 underline-offset-[-2px]">operations?</span></h2>
                    <p className="text-gray-500 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">Transform your agri-business with the world's first AI-native Farmers CRM.</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/request-demo" className="px-12 py-6 rounded-3xl bg-[#05150E] text-white font-black text-lg uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-2xl active:scale-95">
                            Get Started for Free
                        </a>
                        <a href="/contact" className="px-12 py-6 rounded-3xl bg-emerald-50 text-emerald-700 border border-emerald-100 font-black text-lg uppercase tracking-widest hover:bg-emerald-100 transition-all">
                            Contact Solutions
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>

        <Footer />
    </div>
);

export default FarmersCRM;
