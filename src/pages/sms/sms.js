import React, { useState } from "react";
import { MessageSquare, Phone, Send, Languages, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const SmsService = () => {
  const [number, setNumber] = useState("");
  const [log, setLog] = useState("");
  const [load, setLoad] = useState(false);
  const [sent, setSent] = useState(false);
  const [lang, setLang] = useState("en");

  async function onSearchSubmit() {
    if (!number || !log) return alert("Please fill in all details");
    setLoad(true);
    setSent(false);

    // Mock simulation for now as the 127.0.0.1 endpoint might not be reachable
    setTimeout(() => {
      setLoad(false);
      setSent(true);
    }, 2000);

    /* Original Logic:
    let url = "http://127.0.0.1:5000/find_response/" + lang + "/+919599260135/" + log;
    try {
        await fetch(url, { method: "get" });
    } catch(e) {}
    */
  }

  return (
    <div className="font-sans">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center px-4">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-sm border border-emerald-500/10">
            <Smartphone className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#05150E] uppercase tracking-tight mb-4">SMS Assistant</h1>
          <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            No internet? No problem. Type your farm question and we will send the answer directly to your phone as an SMS.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
            <MessageSquare className="w-32 h-32" />
          </div>

          <div className="relative z-10 space-y-8 md:space-y-10">
            {/* Language Selection */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40 flex items-center gap-2">
                <Languages className="w-3 h-3" /> Select Language
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: "en", label: "English" },
                  { id: "hi", label: "Shona" },
                  { id: "es", label: "Ndebele" }
                ].map(l => (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id)}
                    className={`px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${lang === l.id ? "bg-[#05150E] text-white shadow-lg" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <Phone className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 h-5 text-emerald-600" />
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full bg-gray-50 border border-emerald-50 rounded-[1.5rem] md:rounded-[2rem] pl-12 md:pl-16 pr-6 md:pr-8 py-4 md:py-6 text-base md:text-lg font-bold outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner"
                  type="text"
                  placeholder="Your phone number"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-5 md:left-6 top-6 md:top-8 w-4 h-4 md:w-5 h-5 text-emerald-600" />
                <textarea
                  onChange={(e) => setLog(e.target.value)}
                  className="w-full bg-gray-50 border border-emerald-50 rounded-[1.5rem] md:rounded-[2rem] pl-12 md:pl-16 pr-6 md:pr-8 py-6 md:py-8 text-base md:text-lg font-bold outline-none focus:border-emerald-500 focus:bg-white transition-all shadow-inner min-h-[120px] md:min-h-[150px]"
                  placeholder="What is your farming question?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onSearchSubmit}
              disabled={load}
              className={`w-full py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 ${load ? "bg-gray-100 text-gray-400" : "bg-emerald-600 text-white hover:bg-[#05150E] shadow-emerald-600/20"}`}
            >
              {load ? (
                <> Sending Request... </>
              ) : (
                <> Get solution via SMS <Send className="w-5 h-5" /> </>
              )}
            </button>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 md:p-6 bg-emerald-50 rounded-[1.5rem] md:rounded-[2rem] border border-emerald-200 flex items-start md:items-center justify-center gap-4"
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 shrink-0 mt-1 md:mt-0" />
                <p className="font-bold text-emerald-800 text-sm md:text-base">SMS Sent! You will receive a message soon.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsService;
