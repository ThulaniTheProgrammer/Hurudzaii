import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  CheckCircle2,
  ArrowRight,
  Sprout,
  Zap,
  Globe2,
  MessageSquare,
  Phone,
  Building2,
  User,
  Mail,
  FileText,
  Sparkles,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// ─── Feature bullets shown on the left panel ─────────────────────────────────
const benefits = [
  { icon: Zap, title: "Real-time Agronomy Insights", desc: "AI-powered crop and soil advice delivered instantly via SMS, voice, or app." },
  { icon: Globe2, title: "Multilingual Support", desc: "Fully operational in Shona, Ndebele, and English — no tech-savviness required." },
  { icon: MessageSquare, title: "SMS & Voice Integration", desc: "Works offline via SMS. No smartphone or data connection needed." },
  { icon: Shield, title: "POTRAZ Regulated", desc: "Compliant with national ICT regulations. Your data is secure." },
];

const stats = [
  { value: "45%", label: "Avg Yield Increase" },
  { value: "3+", label: "Countries Active" },
  { value: "10K+", label: "Farmers Served" },
  { value: "24/7", label: "AI Availability" },
];

// ─── Reusable Input ───────────────────────────────────────────────────────────
const FormField = ({ label, error, icon: Icon, children }) => (
  <div className="space-y-1.5">
    <label className="block text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
      )}
      {children}
    </div>
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-rose-500 text-[11px] font-bold flex items-center gap-1"
        >
          <span className="w-1 h-1 bg-rose-500 rounded-full inline-block" />
          {error}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const inputClass = (hasIcon, hasError) =>
  `w-full ${hasIcon ? "pl-11 pr-4" : "px-4"} py-3.5 rounded-2xl border-2 bg-white text-[#05150E] font-medium text-sm placeholder:text-gray-300 transition-all duration-200 outline-none focus:border-emerald-500 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] ${hasError ? "border-rose-400" : "border-gray-100 hover:border-gray-200"}`;

// ─── Success State ────────────────────────────────────────────────────────────
const SuccessCard = ({ onHome }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="flex flex-col items-center text-center py-16 px-8"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
      className="w-24 h-24 rounded-[2rem] bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(16,185,129,0.4)]"
    >
      <CheckCircle2 className="w-12 h-12" />
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="text-3xl font-black text-[#05150E] mb-4 tracking-tight"
    >
      Request Received!
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-gray-500 text-base leading-relaxed max-w-xs font-medium mb-10"
    >
      Our team will reach out within <strong className="text-emerald-600">24 hours</strong> to set up your personalised demo session.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.65 }}
      className="flex flex-col gap-3 w-full max-w-xs"
    >
      <button
        onClick={onHome}
        className="w-full px-8 py-4 rounded-2xl bg-emerald-600 text-white font-black hover:bg-emerald-700 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3"
      >
        Back to Home <ArrowRight className="w-5 h-5" />
      </button>
      <div className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
        Redirecting automatically...
      </div>
    </motion.div>
  </motion.div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────
const RequestDemo = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", useCase: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  // A/B variant logic (unchanged from original)
  const abVariant = useMemo(() => {
    const key = "formVariant";
    const existing = localStorage.getItem(key);
    if (existing) return existing;
    const assigned = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(key, assigned);
    return assigned;
  }, []);

  const webhook = process.env.REACT_APP_CRM_WEBHOOK_URL || "";
  const analyticsUrl = process.env.REACT_APP_ANALYTICS_URL || "";

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "A valid email is required";
    if (abVariant === "A") {
      if (!form.phone.trim()) e.phone = "Phone number is required";
    } else {
      if (!form.company.trim()) e.company = "Organisation name is required";
    }
    if (!form.useCase.trim()) e.useCase = "Please describe your use case";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setSubmitting(true);

    const payload = {
      type: "demo_request",
      variant: abVariant,
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      useCase: form.useCase,
      ts: new Date().toLocaleString(),
    };

    // EmailJS parameters
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone || "N/A",
      organization: form.company || "N/A",
      message: form.useCase,
      variant: abVariant,
      request_type: "Demo Request"
    };

    try {
      // 1. Send via EmailJS
      // Send to ADMIN (Notification)
      const adminTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_id",
        adminTemplate || "template_id",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key"
      );

      // Send to CUSTOMER (Confirmation - "Order Confirmation")
      const customerTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CUSTOMER;
      if (customerTemplate) {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          customerTemplate,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
      }

      // 2. Existing hooks (Webhook & Analytics)
      if (webhook) await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (analyticsUrl) await fetch(analyticsUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ metric: "demo_request", payload }) });

      localStorage.setItem("demoAccess", "true");
      localStorage.setItem("demoRequestEvent", JSON.stringify(payload));
      setSubmitted(true);
      setTimeout(() => navigate("/console"), 2500);
    } catch (err) {
      console.error("Submission error:", err);
      // Still set submitted to true for UX, but log error
      setSubmitted(true);
      setTimeout(() => navigate("/console"), 2500);
    }
    setSubmitting(false);
  };

  return (
    <>
      <PreHeader />
      <Header />

      <div className="min-h-screen bg-white font-sans selection:bg-emerald-100">

        {/* ── Hero strip ── */}
        <div className="bg-[#05150E] pt-32 pb-20 relative overflow-hidden">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
          {/* Glow orbs */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-400/5 blur-[80px] rounded-full -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col items-center"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em]">Limited Access — Apply Now</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8">
                Your Farm. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
                  Powered by AI.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-emerald-100/50 max-w-xl text-xl font-medium leading-relaxed mb-12">
                Request access and a Hurudzai AI specialist will onboard you personally — typically within 24 hours.
              </motion.p>

              {/* Stats row */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-2xl">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-black text-white">{s.value}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/60 mt-1">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Main content: Two columns ── */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1fr_520px] gap-16 xl:gap-24 items-start">

            {/* Left column: Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Sprout className="w-3 h-3" />
                What you get
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#05150E] leading-tight tracking-tight mb-6">
                Everything you need <br />
                <span className="text-emerald-600">to grow smarter.</span>
              </motion.h2>

              <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed font-medium mb-16 max-w-md">
                After submitting your request, you'll get full access to the Hurudzai AI platform tailored to your farming operation.
              </motion.p>

              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-500 shadow-sm">
                      <b.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#05150E] text-lg mb-2 tracking-tight group-hover:text-emerald-700 transition-colors">{b.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <motion.div
                variants={fadeUp}
                className="mt-16 p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-[#05150E] text-base mb-1">Response within 24 Hours</div>
                    <p className="text-gray-500 text-sm font-medium">Our onboarding team reviews every request personally and responds fast.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-[#05150E] text-base mb-1">Personal Onboarding Session</div>
                    <p className="text-gray-500 text-sm font-medium">You'll be guided through the platform with a dedicated agricuture specialist.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-white rounded-[3rem] border-2 border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Form header */}
                <div className="bg-[#05150E] px-10 py-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-400">Secure Application</span>
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">Request Demo Access</h3>
                  <p className="text-white/40 text-sm font-medium mt-1">Takes less than 2 minutes to complete</p>
                </div>

                {/* Form body */}
                <div className="p-10">
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                        <FormField label="Full Name" error={errors.name} icon={User}>
                          <input
                            id="demo-name"
                            type="text"
                            placeholder="e.g. Tendai Moyo"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            className={inputClass(true, errors.name)}
                          />
                        </FormField>

                        <FormField label="Email Address" error={errors.email} icon={Mail}>
                          <input
                            id="demo-email"
                            type="email"
                            placeholder="you@company.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            className={inputClass(true, errors.email)}
                          />
                        </FormField>

                        {abVariant === "A" ? (
                          <FormField label="Phone Number" error={errors.phone} icon={Phone}>
                            <input
                              id="demo-phone"
                              type="tel"
                              placeholder="+263 71 404 1560"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              onFocus={() => setFocused("phone")}
                              onBlur={() => setFocused(null)}
                              className={inputClass(true, errors.phone)}
                            />
                          </FormField>
                        ) : (
                          <FormField label="Organisation / Farm Name" error={errors.company} icon={Building2}>
                            <input
                              id="demo-company"
                              type="text"
                              placeholder="Farm / Co-op / Organisation"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              onFocus={() => setFocused("company")}
                              onBlur={() => setFocused(null)}
                              className={inputClass(true, errors.company)}
                            />
                          </FormField>
                        )}

                        <FormField label="Primary Use Case" error={errors.useCase} icon={FileText}>
                          <textarea
                            id="demo-usecase"
                            placeholder="Briefly describe what you need Hurudzai AI for — e.g. crop advice, soil health, market access..."
                            value={form.useCase}
                            onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                            onFocus={() => setFocused("useCase")}
                            onBlur={() => setFocused(null)}
                            rows={4}
                            className={`${inputClass(false, errors.useCase)} resize-none`}
                          />
                        </FormField>

                        {/* Submit */}
                        <button
                          id="demo-submit"
                          onClick={submit}
                          disabled={submitting}
                          className="w-full py-5 rounded-2xl bg-emerald-600 text-white font-black text-base hover:bg-emerald-700 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(16,185,129,0.35)] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Request Demo Access
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>

                        <p className="text-center text-[11px] text-gray-400 font-medium leading-relaxed">
                          By submitting, you agree to be contacted for onboarding. <br />
                          We never share your data with third parties.
                        </p>
                      </motion.div>
                    ) : (
                      <SuccessCard onHome={() => navigate("/")} />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RequestDemo;
