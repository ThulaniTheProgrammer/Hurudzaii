import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Phone,
  ShieldCheck,
  Globe2,
  Leaf,
  Zap,
  Cpu,
  Smartphone,
  MessageSquare
} from "lucide-react";
import logo from "../img/logo.png";
import footer from "../img/footer.png";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "WhatsApp Bot", path: "/products/whatsapp-bot" },
        { name: "Farmers CRM", path: "/products/farmers-crm" },
        { name: "Developer Console", path: "/products/developer-console" },
        { name: "B2B Solutions", path: "/products/b2b-solutions" },
        { name: "Market Pulse", path: "/market" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Science & AI", path: "/science" },
        { name: "Farmer Stories", path: "/stories" },
        { name: "Global News", path: "/news" },
        { name: "Contact Hub", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Partner Portal", path: "/partners" },
        { name: "API Docs", path: "/docs" },
        { name: "Farmer Support", path: "/support" },
        { name: "Account Safety", path: "/delete-account" },
        { name: "Privacy Tech", path: "/privacy" }
      ]
    }
  ];

  return (
    <footer className="bg-[#05150E] text-white pt-32 pb-12 relative overflow-hidden">
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 mb-24">

          {/* Brand & Vision Column */}
          <div className="lg:col-span-4 space-y-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div
                onClick={() => navigate("/")}
                className="group flex items-center gap-5 cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-full" />
                  <div className="relative p-3.5 rounded-2xl bg-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <img src={logo} alt="Hurudzai Logo" className="w-12 h-12 object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
                    HURUDZAI <span className="text-emerald-500 underline decoration-4 underline-offset-4">AI</span>
                  </h3>
                  <div className="flex items-center gap-2 mt-1 opacity-60">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-400">Next-Gen Agri-Tech</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 text-lg leading-relaxed max-w-sm font-medium"
            >
              Building the primary interface between the <span className="text-white">African economy</span> and its soil. Empowering generational wisdom through high-speed AI.
            </motion.p>

            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { Icon: Twitter, color: "hover:text-sky-400" },
                { Icon: Linkedin, color: "hover:text-blue-600" },
                { Icon: MessageSquare, color: "hover:text-emerald-400", label: "WhatsApp" }
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-[1rem] bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10 cursor-pointer group"
                >
                  <social.Icon className={`w-5 h-5 transition-colors ${social.color}`} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {footerLinks.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-10 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-emerald-500/30" />
                  {section.title}
                </h4>
                <ul className="space-y-6">
                  {section.links.map((link, j) => (
                    <li
                      key={j}
                      onClick={() => navigate(link.path)}
                      className="text-white/40 text-[13px] font-black uppercase tracking-widest hover:text-white cursor-pointer transition-all flex items-center group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-3 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all text-emerald-500" />
                      {link.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Node Card */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-500/[0.03] backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group"
            >
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">Direct Node</h4>
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-0.5 animate-pulse">Online & Secure</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="cursor-pointer group flex items-center gap-4">
                    <Mail className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">hello@hurudzaai.tech</span>
                  </div>
                  <div className="group flex items-center gap-4">
                    <Phone className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-sm font-bold text-white/60 transition-colors">+263 71 404 1560</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/request-demo")}
                  className="w-full py-5 rounded-[1.5rem] bg-emerald-600 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all flex items-center justify-center gap-4 active:scale-95 shadow-2xl shadow-emerald-900/40"
                >
                  Request Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl -z-10 mt-[-20%] mr-[-20%]" />
            </motion.div>
          </div>
        </div>

        {/* ── Institutional Trust Strip ── */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/5 gap-12 group/strip">
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-md opacity-20 group-hover/strip:opacity-40 transition-opacity" />
              <div className="relative p-2.5 bg-white rounded-3xl group-hover/strip:scale-105 transition-transform duration-700">
                <img src={footer} alt="Ministry" className="w-14 h-14 object-contain" />
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/90 leading-tight">Ministry of Agriculture <br /> & Farmer's Welfare</h4>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Strategic Innovation Partner</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: ShieldCheck, label: "Enterprise Secure" },
              { icon: Leaf, label: "Sustainable Tech" },
              { icon: Cpu, label: "Localized ML" },
              { icon: Smartphone, label: "Offline First" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-default">
                <item.icon className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">
              © {new Date().getFullYear()} Hurudzai AI Ops.
              <span className="hidden sm:inline mx-3 opacity-20">|</span>
              <span className="text-emerald-500/50">Digitizing Generational Wisdom.</span>
            </p>
          </div>

          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em]">
            <span onClick={() => navigate("/privacy")} className="text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer">Security Protocol</span>
            <span onClick={() => navigate("/terms")} className="text-gray-500 hover:text-emerald-400 transition-colors cursor-pointer">Conditions</span>
            <span
              onClick={() => navigate("/delete-account")}
              className="px-4 py-2 border border-rose-500/20 rounded-xl text-rose-500/40 hover:text-rose-500 hover:bg-rose-500/5 hover:border-rose-500/50 transition-all cursor-pointer"
            >
              Account Deletion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

