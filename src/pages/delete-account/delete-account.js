import React, { useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Trash2, Mail, User, Phone,
  ShieldAlert, CheckCircle2, RefreshCw, AlertTriangle
} from "lucide-react";

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    details: "",
    confirm: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.confirm) return;

    setSubmitting(true);
    setError(null);

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      username: formData.username || "N/A",
      message: `Account Deletion Request Details:\n${formData.details || "N/A"}`,
      request_type: "Account Deletion"
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_id",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_id",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to submit request via AI portal. Opening manual email draft instead...");

      // Fallback to mailto
      const body = `Full name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nUsername: ${formData.username || "N/A"}\n\nRequest details:\n${formData.details || "N/A"}`;
      const mailto = `mailto:support@hurudzaai.tech?subject=Account Deletion Request&body=${encodeURIComponent(body)}`;
      setTimeout(() => { window.location.href = mailto; }, 2000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-100">
      <PreHeader />
      <Header />

      {/* ── Page Header ── */}
      <section className="pt-40 pb-20 px-6 bg-[#05150E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#f43f5e 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Privacy & Data Control
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
            Delete <span className="text-rose-500">Account.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-medium">
            We're sorry to see you go. Submit your request below to initiate the permanent removal of your data.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 relative -mt-10 z-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-2 border-gray-100 overflow-hidden">
            <div className="p-8 md:p-16">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2 flex items-center gap-2">
                          <User className="w-3 h-3 text-emerald-600" /> Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Tendai Moyo"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-rose-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2 flex items-center gap-2">
                          <Mail className="w-3 h-3 text-emerald-600" /> Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-rose-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2 flex items-center gap-2">
                          <Phone className="w-3 h-3 text-emerald-600" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+263 71 404 1560"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-rose-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2 flex items-center gap-2">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Optional"
                          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-rose-500 outline-none transition-all font-medium text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 pl-2">Reason for Deletion (Optional)</label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please tell us how we can improve..."
                        className="w-full px-8 py-5 rounded-3xl bg-gray-50 border-2 border-transparent focus:border-rose-500 outline-none transition-all font-medium text-sm resize-none"
                      />
                    </div>

                    <div className="p-6 rounded-[2rem] bg-rose-50 border border-rose-100 mb-6">
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative mt-1">
                          <input
                            type="checkbox"
                            name="confirm"
                            checked={formData.confirm}
                            onChange={handleChange}
                            required
                            className="sr-only peer"
                          />
                          <div className="w-5 h-5 border-2 border-rose-400 rounded-lg peer-checked:bg-rose-500 peer-checked:border-rose-500 transition-all flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform" />
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-rose-700 transition-colors">
                          I understand that this action is <strong className="text-rose-600">permanent</strong> and will delete all my account history and data from the Hurudzai AI platform.
                        </span>
                      </label>
                    </div>

                    {error && (
                      <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                        <p className="text-xs text-amber-800 font-medium">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting || !formData.confirm}
                      className="w-full py-6 rounded-2xl bg-[#05150E] text-white font-black uppercase tracking-widest text-sm hover:bg-rose-600 transition-all flex items-center justify-center gap-4 shadow-xl active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed group"
                    >
                      {submitting ? (
                        <RefreshCw className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Initiate Deletion
                          <Trash2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-24 h-24 bg-rose-100 text-rose-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
                      <Trash2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Request Sent</h3>
                    <p className="text-gray-500 font-medium mb-10 max-w-xs mx-auto text-lg leading-relaxed">Your account deletion process has been initiated. Our privacy team will confirm completion via email.</p>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-400 font-black uppercase tracking-widest">
                      Deletion Typically Completes in 48h
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeleteAccount;
