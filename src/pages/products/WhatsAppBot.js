import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import { Zap, Users, Bot, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { WhatsAppBotIcon } from "../../components/img/ProductIcons";

const WA_BOT_URL = "https://wa.me/message/5VEAMYH37ER3F1";

const features = [
    { icon: Bot, title: "AI-Powered Responses", desc: "Smart, context-aware replies 24/7 with no human intervention needed." },
    { icon: Zap, title: "Instant Alerts", desc: "Real-time crop alerts, weather warnings, and market price updates." },
    { icon: Users, title: "Group Broadcasting", desc: "Reach thousands of farmers simultaneously via WhatsApp groups." },
    { icon: CheckCircle, title: "Multi-Language", desc: "Supports Shona, Ndebele, English and more local languages." },
];

const WhatsAppBot = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans">
        <Header />

        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#05150E] to-[#05150E]" />
            <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full px-5 py-2 mb-8">
                        <WhatsAppBotIcon className="w-6 h-6" />
                        <span className="text-[#25D366] text-sm font-bold uppercase tracking-widest">WhatsApp Bot</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                        AI Voice for Every <br />
                        <span className="text-emerald-400">Farmer's Phone</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Deploy an intelligent WhatsApp-native AI agent that guides farmers through agronomic decisions, market pricing, and government programs—right inside the app they already use.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Primary CTA — opens the live WhatsApp bot */}
                        <a
                            href={WA_BOT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-2xl shadow-[#25D366]/30 active:scale-95"
                        >
                            <WhatsAppBotIcon className="w-5 h-5" />
                            Chat with the Bot
                        </a>
                        {/* Secondary — scroll down to features */}
                        <a
                            href="#features"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all"
                        >
                            See Features <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Features */}
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
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-black text-xs uppercase tracking-widest px-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 transition-colors"
            title="Chat with Hurudzai AI WhatsApp Bot"
        >
            <WhatsAppBotIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Start Chatting</span>
        </motion.a>
    </div>
);

export default WhatsAppBot;
