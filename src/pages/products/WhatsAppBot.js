import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import {
    Zap, Users, Bot, ArrowRight, CheckCircle,
    MessageCircle, Sparkles, Languages, Shield,
    Globe2, Smartphone, Cpu
} from "lucide-react";
import { WhatsAppBotIcon } from "../../components/img/ProductIcons";
import { staggerContainer, fadeInUp, floatingAnim, slideIn } from "../../components/HomeSections/shared";

const WA_BOT_URL = "https://wa.me/message/5VEAMYH37ER3F1";
const HeroImg = "/High-tech-agriculture-at-sunrise.png";

const features = [
    {
        icon: Bot,
        title: "AI-Powered Responses",
        desc: "Smart, context-aware replies 24/7 with no human intervention needed. Our models are trained specifically on African soil and crop data.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: Zap,
        title: "Instant Alerts",
        desc: "Real-time crop alerts, weather warnings, and market price updates delivered straight to their chat thread.",
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
    {
        icon: Users,
        title: "Group Broadcasting",
        desc: "Reach thousands of farmers simultaneously via WhatsApp groups. Perfect for NGO extensions and Ministry bulletins.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: CheckCircle,
        title: "Multi-Language",
        desc: "Supports Shona, Ndebele, English and more local languages. Bridging the digital divide with conversational AI.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
];

const WhatsAppBot = () => (
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
                <img src={HeroImg} alt="Field" className="w-full h-full object-cover blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-transparent to-[#05150E]" />
            </motion.div>

            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-xl">
                            <WhatsAppBotIcon className="w-6 h-6" />
                            <span className="text-[#25D366] text-[10px] font-black uppercase tracking-[0.25em]">WhatsApp Native AI Agent</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                            AI Voice for Every <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
                                Farmer's Phone.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-emerald-100/60 text-xl max-w-xl leading-relaxed mb-12 font-medium">
                            Deploy an intelligent WhatsApp-native AI agent that guides farmers through agronomic decisions, market pricing, and government programs—right inside the app they already use.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 items-center">
                            <a
                                href={WA_BOT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba58] text-white font-black text-base uppercase tracking-widest px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-[#25D366]/30 active:scale-95"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Start Live Demo
                            </a>
                            <div className="flex items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-widest">
                                <Shield className="w-4 h-4 text-emerald-500" />
                                Secure & Encrypted
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex justify-center hidden lg:flex"
                    >
                        <motion.div animate={floatingAnim} className="relative w-[320px] h-[640px] bg-[#05150E] rounded-[3.5rem] border-[12px] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/5 rounded-b-2xl z-20" />

                            <div className="h-full w-full bg-[#E5DDD5] overflow-y-auto custom-scrollbar p-4 pt-10 flex flex-col gap-4">
                                {/* Chat Interface Mockup */}
                                <div className="bg-white p-4 rounded-xl shadow-sm self-start max-w-[85%] text-[#05150E] text-xs leading-relaxed">
                                    <span className="font-bold text-emerald-600 block mb-1">Hurudzai AI:</span>
                                    Mhoroi! Ndingakubatsira sei nhasi? (Hello! How can I help you today?)
                                </div>

                                <div className="bg-[#DCF8C6] p-4 rounded-xl shadow-sm self-end max-w-[85%] text-[#05150E] text-xs leading-relaxed">
                                    Chibage changu chiri kuita mavara matsvuku pamashizha. Chii chinogona kudaro? (My maize is developing red spots on leaves. What could it be?)
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm self-start max-w-[85%] text-[#05150E] text-xs leading-relaxed border-l-4 border-emerald-500">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="w-3 h-3 text-emerald-600" />
                                        <span className="font-bold text-emerald-600">AI Analysis:</span>
                                    </div>
                                    Mavara matsvuku anoonekwa pamazai echibage anogona kuva chiratidzo che *Maize Streak Virus*. Ndapota tumira mufananidzo kuti tione zviri nani.
                                </div>

                                <div className="mt-auto bg-white p-3 rounded-full shadow-lg flex items-center justify-between">
                                    <span className="text-gray-400 text-[10px] pl-2">Type a message...</span>
                                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating stats */}
                        <div className="absolute top-1/4 -right-12 p-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Response Time</span>
                            <span className="text-2xl font-black text-white">&lt; 2.4s</span>
                        </div>

                        <div className="absolute bottom-1/4 -left-12 p-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">Status</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-xl font-black text-white">Online</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Features Bento ── */}
        <section id="features" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        Core Capabilities
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Precision Messaging.</h2>
                    <p className="text-white/40 text-lg font-medium max-w-2xl mx-auto">Bridging the gap between high-level agronomy and the hands-on farmer through conversational AI.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 rounded-[2.5rem] p-10 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                <f.icon className={`w-7 h-7 ${f.color}`} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-emerald-400 transition-colors uppercase">{f.title}</h3>
                            <p className="text-white/40 leading-relaxed font-medium mb-8 flex-grow">{f.desc}</p>

                            <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-bold uppercase tracking-widest">Active Module</span>
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Impact Section ── */}
        <section className="py-32 bg-white text-[#05150E] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-emerald-50">
                            <img src="/Futuristic-farm-at-dawn.png" alt="Impact" className="w-full h-auto" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                        </div>
                        {/* Visual elements */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Smartphone className="w-3 h-3" />
                            Farmer-First Design
                        </motion.div>
                        <motion.h3 variants={fadeInUp} className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8 uppercase">No internet? <br /><span className="text-emerald-600">No problem.</span></motion.h3>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-xl leading-relaxed mb-12 font-medium">
                            We built our WhatsApp bot to work even with low data connectivity. For areas with zero data, our system automatically falls back to SMS integration, ensuring no farmer is left behind.
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { icon: Languages, title: "Dialect Detection", desc: "Automatically detects and switches to the farmer's local language." },
                                { icon: Cpu, title: "Edge Processing", desc: "Fast response times even on older mobile devices." },
                                { icon: Globe2, title: "Offline Resilience", desc: "Synchronizes data once a connection is established." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeInUp} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-black text-lg mb-1 tracking-tight">{item.title}</div>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 bg-[#05150E] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight uppercase">Ready to empower <br />your farmers?</h2>
                    <p className="text-emerald-100/40 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">Join the WhatsApp revolution in African agriculture. Deploy your custom bot today.</p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href={WA_BOT_URL} className="px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black text-lg uppercase tracking-widest hover:bg-[#20ba58] transition-all shadow-2xl active:scale-95">
                            Start Talking AI
                        </a>
                        <a href="/request-demo" className="px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                            Request Sales Kit
                        </a>
                    </div>
                </motion.div>
            </div>
            {/* Abstract circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
        </section>

        <Footer />

        {/* Floating sticky WhatsApp chat button */}
        <motion.a
            href={WA_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-3xl shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-colors border-2 border-white/20"
        >
            <WhatsAppBotIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Live Chat</span>
        </motion.a>
    </div>
);

export default WhatsAppBot;
