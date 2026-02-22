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
  MapPin,
  ShieldCheck,
  Globe2,
  Leaf
} from "lucide-react";
import logo from "../img/logo.png";
import footer from "../img/footer.png";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "SMS Service", path: "/sms" },
        { name: "Fertilizer Prediction", path: "/fertilizer" },
        { name: "Crop Prediction", path: "/crop" },
        { name: "Disease Detection", path: "/disease" },
        { name: "Market Pulse", path: "/market" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Science", path: "/science" },
        { name: "Success Stories", path: "/stories" },
        { name: "News & Press", path: "/news" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Farmer Support", path: "/support" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Account Safety", path: "/delete-account" }
      ]
    }
  ];

  return (
    <footer className="bg-[#05150E] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div
              onClick={() => navigate("/")}
              className="group flex items-center gap-4 cursor-pointer mb-8"
            >
              <div className="relative p-3 rounded-2xl bg-white border border-white/20 group-hover:border-emerald-500/50 transition-colors shadow-2xl shadow-white/5">
                <img src={logo} alt="Hurudzai Logo" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter text-white group-hover:text-emerald-400 transition-colors">HURUDZAI <span className="text-emerald-500 underline decoration-2 underline-offset-4">AI</span></h3>
                <p className="text-[10px] uppercase font-black tracking-[0.1em] text-emerald-400 mt-1">Artificial Intelligence Contact Centre</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
              Empowering African farmers with localized AI intelligence to digitize generational wisdom and maximize yields.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, color: "hover:text-blue-500" },
                { Icon: Twitter, color: "hover:text-sky-400" },
                { Icon: Linkedin, color: "hover:text-blue-600" },
                { Icon: Globe2, color: "hover:text-emerald-400" }
              ].map((social, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-white/10 ${social.color} cursor-pointer hover:-translate-y-1 active:scale-95`}
                >
                  <social.Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-1 hidden lg:block" />

          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((section, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400 mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, j) => (
                    <li
                      key={j}
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA/Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400 mb-8">Get In Touch</h4>
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/40 mb-1">Email Support</div>
                  <div className="text-sm font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer">support@hurudzaai.tech</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/40 mb-1">Contact Us</div>
                  <div className="text-sm font-bold text-white">+263 71 404 1560</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate("/request-demo")}
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 text-white font-black hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl"
                >
                  Join the Network <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support & Ministry Branding Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-white/5 gap-8">
          <div className="flex items-center gap-6">
            <div className="p-3 bg-white rounded-2xl">
              <img src={footer} alt="Ministry" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white leading-tight">Ministry of Agriculture <br /> & Farmer's Welfare</h4>
              <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-widest">Strategic Innovation Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Enterprise Secure</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Leaf className="w-4 h-4 text-emerald-500/50" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sustainable Tech</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 gap-6">
          <p>© {new Date().getFullYear()} Hurudzai Software Team. All rights reserved.</p>
          <div className="flex gap-8">
            <span onClick={() => navigate("/privacy")} className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy</span>
            <span onClick={() => navigate("/terms")} className="hover:text-emerald-400 transition-colors cursor-pointer">Terms</span>
            <span onClick={() => navigate("/delete-account")} className="hover:text-rose-500 transition-colors cursor-pointer text-gray-700">Deletion Request</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
