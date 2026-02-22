import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail, Phone, MapPin, ArrowRight, MessageSquare,
  Send, Globe2, Clock, ShieldCheck, HeartPulse,
  CheckCircle2, RefreshCw
} from "lucide-react";
import { staggerContainer, fadeInUp } from "../components/HomeSections/shared";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "General Inquiries",
    desc: "Interested in Hurudzai AI? We'd love to hear from you.",
    action: "hello@hurudzaai.tech",
    link: "mailto:hello@hurudzaai.tech",
    color: "emerald"
  },
  {
    icon: HeartPulse,
    title: "Customer Support",
    desc: "Active farmers needing technical help or agronomy advice.",
    action: "support@hurudzaai.tech",
    link: "mailto:support@hurudzaai.tech",
    color: "blue"
  },
  {
    icon: Globe2,
    title: "Sales & Partnerships",
    desc: "For B2B, NGOs, or institutional collaborations.",
    action: "sales@hurudzaai.tech",
    link: "mailto:sales@hurudzaai.tech",
    color: "purple"
  },
];

const locations = [
  { city: "Harare", country: "Zimbabwe", address: "Innovation Hub, CUT" },
  { city: "Kadoma", country: "Zimbabwe", address: "Regional Operations Centre" },
  { city: "Cape Town", country: "South Africa", address: "African AI Research Lab" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitting(true);
    setError(null);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      request_type: "Contact Inquiry"
    };

    try {
      // 1. Send to ADMIN
      const adminTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_id",
        adminTemplate || "template_id",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key"
      );

      // 2. Send to CUSTOMER (Confirmation)
      const customerTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CUSTOMER;
      if (customerTemplate) {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          customerTemplate,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
      }
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again or use direct email.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#05150E] font-sans selection:bg-emerald-100">
      <Header />

      {/* ── Page Header ── */}
      <section className="pt-48 pb-32 px-6 bg-[#05150E] relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8">
              <Globe2 className="w-3.5 h-3.5" />
              Connected across borders
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8 uppercase">
              Get in <span className="text-emerald-400">Touch.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you're a small-scale farmer or a national institution, we're here to help you scale your impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-24 px-6 relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[3rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)] transition-all duration-700"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <method.icon className={`w-6 h-6 text-[#05150E] group-hover:text-emerald-500 transition-colors`} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{method.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-12 flex-grow leading-relaxed">{method.desc}</p>
                <a href={method.link} className="inline-flex items-center gap-3 text-[#05150E] font-black text-sm uppercase tracking-widest hover:text-emerald-600 transition-colors group/link">
                  {method.action}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_520px] gap-20 items-start">
            {/* Left: Locations & Numbers */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight uppercase">Our Regional <br /><span className="text-emerald-600">Offices.</span></h2>
                <div className="grid sm:grid-cols-2 gap-12">
                  {locations.map((loc, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-black text-lg uppercase tracking-tight">{loc.city}</span>
                      </div>
                      <p className="text-gray-400 text-sm font-black uppercase tracking-widest">{loc.country}</p>
                      <p className="text-gray-500 text-base font-medium leading-relaxed">{loc.address}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-12">
                <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                  <Phone className="w-8 h-8 text-emerald-600 mb-6" />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-2">Direct Line</div>
                  <div className="text-xl font-black text-[#05150E] tracking-tight">+263 77 123 4567</div>
                  <p className="text-gray-400 text-xs mt-4 font-medium italic">Mon-Fri, 08:00 - 17:00 CAT</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-emerald-600 shadow-2xl shadow-emerald-600/20 text-white">
                  <Mail className="w-8 h-8 text-white mb-6" />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200 mb-2">General Inquiry</div>
                  <div className="text-xl font-black tracking-tight underline decoration-white/30 underline-offset-4">info@hurudzaai.tech</div>
                  <p className="text-emerald-100 text-xs mt-4 font-medium italic">We respond within 24 hours.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-2 border-gray-100 overflow-hidden"
            >
              <div className="bg-[#05150E] p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Direct Message</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">Drop us a line <br /><span className="text-white/30 italic">anytime.</span></h3>
              </div>

              <div className="p-12">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2">Your Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Tendai Moyo"
                          className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2">Message</label>
                        <textarea
                          rows={4}
                          required
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How can we help your farming operation?"
                          className="w-full px-8 py-5 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-medium text-sm resize-none"
                        />
                      </div>

                      {error && <p className="text-rose-500 text-xs font-bold">{error}</p>}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-6 rounded-2xl bg-emerald-600 text-white font-black uppercase tracking-widest text-sm hover:bg-emerald-700 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-95 disabled:opacity-50"
                      >
                        {submitting ? (
                          <RefreshCw className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-black uppercase tracking-tight mb-4">Message Sent!</h4>
                      <p className="text-gray-500 font-medium mb-10">We'll get back to you shortly.</p>
                      <button onClick={() => setSubmitted(false)} className="text-emerald-600 font-black uppercase tracking-widest text-xs hover:underline">Send another message</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section Teaser ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm shrink-0"><Clock className="w-6 h-6" /></div>
              <div>
                <h4 className="font-black text-lg mb-2 uppercase tracking-tight">Response Time</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">Our typical response time for non-urgent matters is under 24 business hours.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0"><ShieldCheck className="w-6 h-6" /></div>
              <div>
                <h4 className="font-black text-lg mb-2 uppercase tracking-tight">Your Privacy</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">All communications are 256-bit encrypted and handled with national regulatory compliance.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm shrink-0"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="font-black text-lg mb-2 uppercase tracking-tight">Site Visits</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">Consultant field visits can be arranged for enterprise agreements and cooperative onboarding.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
