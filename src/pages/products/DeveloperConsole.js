import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import {
    Code2, Webhook, Key, ShieldCheck, ArrowRight,
    Cpu, Zap, Terminal, Globe2, Layers,
    Database, Fingerprint
} from "lucide-react";
import { DeveloperConsoleIcon } from "../../components/img/ProductIcons";
import { staggerContainer, fadeInUp, floatingAnim } from "../../components/HomeSections/shared";

const features = [
    {
        icon: Code2,
        title: "REST & GraphQL APIs",
        desc: "Full-featured API suite to integrate Hurudzai AI capabilities in any stack. High performance, zero latency.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: Webhook,
        title: "Webhooks & Events",
        desc: "Subscribe to real-time agronomy events and trigger complex workflows in your own platforms seamlessly.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: Key,
        title: "API Key Management",
        desc: "Granular key scoping with detailed usage analytics and advanced rate-limit controls for enterprise scale.",
        color: "text-amber-400",
        bg: "bg-amber-500/10"
    },
    {
        icon: ShieldCheck,
        title: "Sandbox Environment",
        desc: "Develop with confidence. Test against a mirror of our production models before pushing to your users.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
];

const DeveloperConsole = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
        <Header />

        {/* ── Hero Section ── */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#05150E]" />
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }}
            />
            {/* Glow orbs */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-[1fr_550px] gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-teal-500/10 border border-teal-500/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-xl">
                            <DeveloperConsoleIcon className="w-6 h-6" />
                            <span className="text-teal-300 text-[10px] font-black uppercase tracking-[0.25em]">Developer SDK v4.0</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                            The Agri-Data <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-200">
                                Control Plane.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-emerald-100/60 text-xl max-w-xl leading-relaxed mb-12 font-medium">
                            Access powerful APIs, webhooks, and SDKs to embed agricultural intelligence directly into your own platforms. Built for scale, security, and developer joy.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 items-center">
                            <button className="group flex items-center justify-center gap-4 bg-white text-[#05150E] font-black text-base uppercase tracking-widest px-10 py-5 rounded-3xl transition-all shadow-2xl active:scale-95">
                                Read Documentation
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-widest">
                                <Terminal className="w-4 h-4 text-emerald-500" />
                                $ npm install @hurudzai/sdk
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Code Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        <motion.div animate={floatingAnim} className="bg-[#0A0F0D] rounded-3xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                            {/* Header */}
                            <div className="bg-white/[0.03] px-6 py-4 flex items-center justify-between border-b border-white/10">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-white/20">request.js</div>
                            </div>

                            {/* Code Panel */}
                            <div className="p-8 font-mono text-xs leading-relaxed overflow-x-auto">
                                <pre className="text-emerald-300/80">
                                    <span className="text-purple-400">POST</span> /v1/advisory <span className="text-white/40">HTTP/1.1</span><br />
                                    <span className="text-white/40">Host:</span> api.hurudzaai.tech<br />
                                    <span className="text-white/40">Authorization:</span> <span className="text-amber-400">Bearer hzai_live_xxxxxxx</span><br />
                                    <span className="text-white/40">Content-Type:</span> application/json<br /><br />
                                    {`{`} <br />
                                    &nbsp;&nbsp;<span className="text-teal-400">"farmer_id"</span>: <span className="text-emerald-400">"f_12345"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-teal-400">"query"</span>: <span className="text-emerald-400">"Best fertilizer for maize?"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-teal-400">"language"</span>: <span className="text-emerald-400">"sn"</span><br />
                                    {`}`}<br /><br />
                                    <span className="text-white/20">// Response 200 OK</span><br />
                                    {`{`} <br />
                                    &nbsp;&nbsp;<span className="text-teal-400">"advice"</span>: <span className="text-emerald-400">"Shandisai Compound D..."</span>,<br />
                                    &nbsp;&nbsp;<span className="text-teal-400">"confidence"</span>: <span className="text-purple-400">0.94</span><br />
                                    {`}`}
                                </pre>
                            </div>

                            {/* Bottom Status */}
                            <div className="bg-emerald-500/5 px-6 py-4 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">API Health: 99.99%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-3 h-3 text-amber-400" />
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-right">12ms Latency</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background orbit decorations */}
                        <div className="absolute -top-16 -left-16 w-32 h-32 border border-emerald-500/20 rounded-full animate-[ping_3s_infinite]" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Feature Grid ── */}
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 rounded-[2.5rem] p-10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <f.icon className={`w-7 h-7 ${f.color}`} />
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">{f.title}</h3>
                            <p className="text-white/40 leading-relaxed font-medium mb-6">{f.desc}</p>

                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-emerald-400/50 group-hover:text-emerald-400 transition-colors">
                                <Code2 className="w-3.5 h-3.5" />
                                SDK Implementation
                            </div>

                            {/* Accent line */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl -z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Tech Stack ── */}
        <section className="py-32 bg-white text-[#05150E]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Developer First
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 uppercase">Build for <br /><span className="text-emerald-600 underline">the future.</span></h3>
                        <p className="text-gray-500 text-xl leading-relaxed mb-12 font-medium">
                            We've done the hard work of training models on specialized agri-data and agricultural speech-to-text for local dialects. You get to build the applications that change lives.
                        </p>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { icon: Globe2, title: "Edge Networks", desc: "Low-latency API nodes across Zimbabwe and regional hubs." },
                                { icon: ShieldCheck, title: "Auth Secure", desc: "Enterprise-grade HMAC and OAuth 2.0 implementations." },
                                { icon: Layers, title: "GraphQL", desc: "Query exactly what you need with our expressive schema." },
                                { icon: Cpu, title: "ML Models", desc: "Access raw model endpoints for custom processing." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-black text-lg mb-1 tracking-tight uppercase">{item.title}</div>
                                        <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#05150E] rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                                        <Fingerprint className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tight">Identity & Scopes</h4>
                                </div>

                                <div className="space-y-4">
                                    {["api:read", "advisory:write", "analytics:full", "weather:limited"].map((scope) => (
                                        <div key={scope} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                                            <code className="text-emerald-400 text-xs">{scope}</code>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-5 rounded-2xl bg-emerald-600 font-black text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20">
                                    Generate Production Key
                                </button>
                            </div>
                            {/* Background visual */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 bg-[#05150E] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">Ready to <br /><span className="text-emerald-400 underline decoration-8">innovate?</span></h2>
                <p className="text-emerald-100/40 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">Join hundreds of developers building the next generation of African agricultural technology.</p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-12 py-6 rounded-3xl bg-emerald-600 text-white font-black text-lg uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-2xl active:scale-95">
                        Create Free Account
                    </button>
                    <button className="px-12 py-6 rounded-3xl bg-white/5 border border-white/10 text-white font-black text-lg uppercase tracking-widest hover:bg-white/10 transition-all">
                        Talk to Support
                    </button>
                </div>
            </div>
            {/* Decorative nodes */}
            <div className="absolute top-1/2 left-1/4 w-px h-64 bg-emerald-500/20" />
            <div className="absolute top-1/2 right-1/4 w-px h-64 bg-teal-500/20" />
        </section>

        <Footer />
    </div>
);

export default DeveloperConsole;
