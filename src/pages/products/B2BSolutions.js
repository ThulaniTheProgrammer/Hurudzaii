import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion } from "framer-motion";
import { Building2, Globe, Handshake, ArrowRight, Layers } from "lucide-react";
import { B2BSolutionsIcon } from "../../components/img/ProductIcons";

const features = [
    { icon: Building2, title: "White-Label Platform", desc: "Deploy Hurudzai AI under your own brand for cooperatives, banks, or agri retailers." },
    { icon: Globe, title: "Multi-Country Deployment", desc: "Built for Africa—data sovereignty, local compliance, and offline resilience built-in." },
    { icon: Layers, title: "Custom Integrations", desc: "Plug into your existing ERP, payments, or satellite data pipelines seamlessly." },
    { icon: Handshake, title: "Dedicated Support", desc: "Enterprise SLAs, an assigned success manager, and 24/7 uptime monitoring." },
];

const B2BSolutions = () => (
    <div className="min-h-screen bg-[#05150E] text-white font-sans">
        <Header />

        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#05150E] to-[#05150E]" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2 mb-8">
                        <B2BSolutionsIcon className="w-6 h-6" />
                        <span className="text-cyan-300 text-sm font-bold uppercase tracking-widest">B2B Solutions</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6">
                        Enterprise AgriAI <br />
                        <span className="text-emerald-400">At Scale</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Power your agribusiness, cooperative, bank, or NGO with a full-stack AI contact centre solution tailored for African agriculture. White-label, integrate, and scale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                            Talk to Sales <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all">
                            Download Deck
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

export default B2BSolutions;
