import React, { useMemo, useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router-dom";

const RequestDemo = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    useCase: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (abVariant === "A") {
      if (!form.phone.trim()) e.phone = "Required";
    } else {
      if (!form.company.trim()) e.company = "Required";
    }
    if (!form.useCase.trim()) e.useCase = "Required";
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
      ts: Date.now(),
    };
    try {
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      if (analyticsUrl) {
        await fetch(analyticsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ metric: "demo_request", payload }),
        });
      }
      localStorage.setItem("demoAccess", "true");
      localStorage.setItem("demoRequestEvent", JSON.stringify(payload));
      setSubmitted(true);
      setTimeout(() => navigate("/"), 1800);
    } catch (err) {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  return (
    <>
      <PreHeader />
      <Header />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-700">Request a Demo</h1>
              <p className="mt-3 text-gray-700">
                Access to Hurudzai AI is unlocked after requesting a demo. A team member will contact you immediately.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">✓</span>
                  Real-time agronomy insights
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">✓</span>
                  Crop and fertilizer recommendations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">✓</span>
                  Disease and weather alerts
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border">
              {!submitted ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      type="text"
                      placeholder="e.g., Tendai Moyo"
                    />
                    {errors.name && <div className="text-red-600 text-xs mt-1">{errors.name}</div>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      type="email"
                      placeholder="you@company.com"
                    />
                    {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
                  </div>
                  {abVariant === "A" ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        type="tel"
                        placeholder="+263 77 123 4567"
                      />
                      {errors.phone && <div className="text-red-600 text-xs mt-1">{errors.phone}</div>}
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <input
                        className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        type="text"
                        placeholder="Farm/Co-op/Organization"
                      />
                      {errors.company && <div className="text-red-600 text-xs mt-1">{errors.company}</div>}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Primary Use Case</label>
                    <textarea
                      className="mt-1 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      value={form.useCase}
                      onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                      placeholder="Briefly describe your needs"
                      rows={4}
                    />
                    {errors.useCase && <div className="text-red-600 text-xs mt-1">{errors.useCase}</div>}
                  </div>
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className={`w-full px-6 py-3 rounded-xl font-bold text-white ${submitting ? "bg-gray-400" : "bg-emerald-600 hover:bg-emerald-700"}`}
                  >
                    {submitting ? "Submitting..." : "Request Demo"}
                  </button>
                  <div className="text-center text-xs text-gray-500">
                    By submitting you agree to be contacted for onboarding.
                  </div>
                </div>
              ) : (
                <div className="text-center p-6">
                  <div className="text-emerald-700 text-2xl font-bold">Thank you</div>
                  <p className="mt-2 text-gray-700">Your demo request has been received. Access is now unlocked.</p>
                  <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RequestDemo;
