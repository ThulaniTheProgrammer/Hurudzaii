import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import {
    Building2, Globe, Handshake, ArrowRight, Layers,
    ShieldCheck, Layout, LineChart, PieChart,
    Network, Users, Briefcase
} from "lucide-react";
import { B2BSolutionsIcon } from "../../components/img/ProductIcons";
import { staggerContainer, fadeInUp, floatingAnim } from "../../components/HomeSections/shared";

const B2B_HERO_IMG = "/Close-up-of-maize-at-sunrise.png";

const features = [
    {
        icon: Layout,
        title: "White-Label Platform",
        desc: "Deploy Hurudzai AI under your own brand. Custom colors, domains, and messaging for your cooperative or bank.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10"
    },
    {
        icon: Globe,
        title: "Multi-Country Scale",
        desc: "Built for Africa—data sovereignty, regional compliance, and multi-currency support baked into the core.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10"
    },
    {
        icon: Network,
        title: "Custom Integrations",
        desc: "Seamlessly plug into your existing ERP, payment gateways, or satellite data pipelines with our enterprise bus.",
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        icon: Handshake,
        title: "Enterprise SLAs",
        desc: "Guaranteed 99.9% uptime, dedicated success managers, and 24/7 technical priority support.",
        color: "text-purple-400",
        bg: "bg-purple-500/10"
    },
];

const B2BSolutions = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-cyan-500/30">
        <Header />

        {/* ── Hero Section ── */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#05150E]" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <img src={B2B_HERO_IMG} alt="Enterprise Field" className="w-full h-full object-cover blur-md" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#05150E] via-transparent to-[#05150E]" />
            </motion.div>

            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)", backgroundSize: "50px 50px" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-xl text-cyan-400">
                            <B2BSolutionsIcon className="w-6 h-6" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Enterprise Solutions</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-8">
                            Enterprise AgriAI <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-300 to-blue-200">
                                At National Scale.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-white/50 text-xl max-w-xl leading-relaxed mb-12 font-medium">
                            Power your bank, cooperative, or NGO with the world's most advanced agricultural AI. Full-stack white-label solutions tailored for the African market context.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 items-center">
                            <a
                                href="/request-demo"
                                className="group flex items-center justify-center gap-4 bg-cyan-600 hover:bg-cyan-500 text-white font-black text-base uppercase tracking-widest px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-cyan-600/30 active:scale-95"
                            >
                                Speak to Enterprise Sales
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex items-center gap-4 text-white/40 font-black text-[10px] uppercase tracking-widest">
                                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                                99.9% Uptime SLA
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Corporate Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <motion.div animate={floatingAnim} className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                    <LineChart className="w-8 h-8 text-cyan-400 mb-6" />
                                    <div className="text-2xl font-black mb-1">94%</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Advisory Accuracy</div>
                                </div>
                                <div className="bg-cyan-600 p-8 rounded-[2.5rem] shadow-2xl text-white">
                                    <Users className="w-8 h-8 text-white mb-6" />
                                    <div className="text-2xl font-black mb-1">50k+</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-white/70">Farmer Network</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-emerald-600 p-8 rounded-[2.5rem] shadow-2xl text-white">
                                    <Globe className="w-8 h-8 text-white mb-6" />
                                    <div className="text-2xl font-black mb-1">Global</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-white/70">Compliance Ready</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                    <PieChart className="w-8 h-8 text-blue-400 mb-6" />
                                    <div className="text-2xl font-black mb-1">2.4x</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-white/30">Yield Multiplier</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative mesh */}
                        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-cyan-500/10 blur-[100px] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Enterprise Grid ── */}
        <section className="py-32 px-6 bg-white text-[#05150E]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Enterprise Framework
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">Built for the <br /><span className="text-cyan-600 underline">Institution.</span></h2>
                    </div>
                    <p className="text-gray-400 text-lg font-medium max-w-xs text-right">Standardizing agricultural intelligence across borders and brands.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-gray-50 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-gray-100 p-10 rounded-[3rem] transition-all duration-500 h-full flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110`}>
                                <f.icon className={`w-7 h-7 ${f.color}`} />
                            </div>
                            <h3 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-cyan-700 transition-colors">{f.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium text-sm mb-10 flex-grow">{f.desc}</p>

                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">Enterprise Ready</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Partner Section ── */}
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0A110F] border border-white/10 rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10 space-y-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-3xl bg-cyan-500/20 flex items-center justify-center">
                                        <Briefcase className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h4 className="text-3xl font-black uppercase tracking-tight">Deployment Strategy</h4>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        "National ID Integration",
                                        "Bank Account Mapping",
                                        "Regional Weather Nodes",
                                        "Custom Policy Injection"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-6 p-5 bg-white/5 rounded-3xl border border-white/5">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500 text-[#05150E] flex items-center justify-center font-black text-xs">{i + 1}</div>
                                            <span className="text-lg font-bold text-white/80">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Background flare */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px]" />
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            Institutional Trust
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 uppercase">A Unified <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Knowledge Hub.</span></h3>
                        <p className="text-white/40 text-xl leading-relaxed mb-12 font-medium italic">
                            "Hurudzai AI gave us the ability to monitor 12,000 smallholder plots in real-time, reducing our risk profile and increasing loan approvals by 40%."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10" />
                            <div>
                                <div className="font-black uppercase text-lg">Dr. Samuel Moyo</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Head of Digital Ag, Commercial Bank</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-32 bg-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-5xl md:text-[5rem] font-black mb-10 tracking-[0.02em] text-[#05150E] uppercase leading-none">Ready to lead the <br /><span className="text-cyan-600 underline decoration-8 underline-offset-8">revolution?</span></h2>
                <p className="text-gray-500 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">Book a strategy session with our enterprise team to discuss your national deployment strategy.</p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="/request-demo" className="px-12 py-6 rounded-3xl bg-cyan-600 text-white font-black text-lg uppercase tracking-widest hover:bg-cyan-700 transition-all shadow-2xl active:scale-95">
                        Request Strategy Call
                    </a>
                    <a href="/docs" className="px-12 py-6 rounded-3xl bg-gray-50 text-gray-500 border border-gray-100 font-black text-lg uppercase tracking-widest hover:bg-gray-100 transition-all">
                        Download Enterprise PDF
                    </a>
                </div>
            </div>
        </section>

        <Footer />
    </div>
);

export default B2BSolutions;
