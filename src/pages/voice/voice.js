import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic, MicOff, Search, Send, MessageSquare,
  Sparkles, RefreshCw, Volume2, Globe, ArrowRight,
  ShieldCheck
} from "lucide-react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Voice = () => {
  const [load, setLoad] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");
  const [lang, setLang] = useState("en");
  const [listening, setListening] = useState(false);
  const [textQuery, setTextQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationError, setValidationError] = useState("");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const langMap = {
    en: "en-US",
    hi: "sn-ZW", // Shona
    es: "nd-ZW", // Ndebele
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = langMap[lang] || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setTranscript("");
    setChatGPTResponse("");
    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      setListening(false);
      sendToChatGPT(speechToText);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setListening(false);
      setTranscript("Error recognizing voice. Try again.");
    };
  };

  const sendToChatGPT = async (userPrompt) => {
    setLoad(true);
    setIsModalOpen(true);

    try {
      const systemPrompt = {
        en: "You are Hurudzai AI, a helpful, knowledgeable agricultural assistant. Provide clear, accurate, concise answers for any topic. Prefer structured, step-by-step guidance when useful.",
        hi: "Uri Hurudzai AI, mubatsiri anobatsira ane ruzivo rwezvekurima. Ipa mhinduro dzakapfupi, dzakajeka uye dzakarurama pamisoro yose. Shandisa nhanho-nenhanho kana zvichibatsira.",
        es: "UnguHurudzai AI, umsizi onolwazi futhi oluncedo kwezolimo. Nikeza izimpendulo ezicacile, ezifushane nezilungile kunoma yisiphi isihloko. Sebenzisa izinyathelo ezihlelelekile lapho kusiza."
      };

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt[lang] || systemPrompt["en"] },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();

      if (data?.choices?.[0]?.message?.content) {
        setChatGPTResponse(data.choices[0].message.content);
      } else {
        setChatGPTResponse("No response from Hurudzai AI. Please ensure your API key is valid or contact support.");
      }
    } catch (error) {
      console.error("ChatGPT error:", error);
      setChatGPTResponse("An error occurred. Please check your connection or contact us for assistance.");
    }

    setLoad(false);
  };

  const handleTextSearch = async () => {
    setValidationError("");
    if (!textQuery.trim()) {
      setValidationError("Please enter a query.");
      return;
    }
    setTranscript(textQuery);
    await sendToChatGPT(textQuery);
  };

  return (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
      <PreHeader />
      <Header />

      <main className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Agronomy Discovery
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Ask <span className="text-emerald-400">Anything.</span>
            </h1>
            <p className="text-emerald-100/40 text-lg font-medium max-w-xl mx-auto">
              Access the collective agricultural intelligence of Hurudzai AI via voice or text.
            </p>
          </div>

          {/* ── Search Interface ── */}
          <div className="bg-white/5 border border-white/10 rounded-[4rem] p-10 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
            {/* BG Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 space-y-12">
              {/* Language Toggles */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mr-4">Select Dialect:</span>
                {[
                  { id: "en", label: "English" },
                  { id: "hi", label: "Shona" },
                  { id: "es", label: "Ndebele" }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id)}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${lang === l.id ? "bg-emerald-500 text-[#05150E] shadow-xl" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    value={textQuery}
                    onChange={(e) => setTextQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleTextSearch()}
                    placeholder="Describe your soil, crop, or specific pest issue..."
                    className="w-full pl-10 pr-20 py-6 rounded-3xl bg-white/5 border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-medium text-lg placeholder:text-white/20"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button
                      onClick={handleTextSearch}
                      className="p-4 bg-emerald-600 rounded-2xl hover:bg-emerald-500 transition-all shadow-xl active:scale-90"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {validationError && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest pl-4">{validationError}</p>}
              </div>

              {/* Voice Control */}
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-8">
                  <div className="w-px h-12 bg-white/5" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20">OR USE VOICE</span>
                  <div className="w-px h-12 bg-white/5" />
                </div>

                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startListening}
                    disabled={listening}
                    className={`w-32 h-32 rounded-full flex items-center justify-center relative z-10 transition-all shadow-2xl ${listening ? "bg-rose-500 animate-pulse" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"}`}
                  >
                    {listening ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
                  </motion.button>

                  {/* Ripple effects when listening */}
                  {listening && (
                    <>
                      <motion.div initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 2, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-rose-500 rounded-full" />
                      <motion.div initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="absolute inset-0 bg-rose-500 rounded-full" />
                    </>
                  )}
                </div>

                <p className={`text-sm font-bold uppercase tracking-widest transition-colors ${listening ? "text-rose-500" : "text-white/40"}`}>
                  {listening ? "Recording..." : "Start Voice Consultation"}
                </p>
              </div>
            </div>
          </div>

          {/* ── Status Bar ── */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-10">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Private & Secure Inference</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/30">API: Active</span>
              </div>
              <button className="flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest hover:underline">
                Raise Technical Ticket <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ── Results Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#05150E]/90 backdrop-blur-xl"
              onClick={() => !load && setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0A120F] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_200px_rgba(0,0,0,0.8)]"
            >
              {/* Modal Header */}
              <div className="bg-white/5 px-12 py-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight">AI Advisory</h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-widest">
                      <Globe className="w-3 h-3" /> {langMap[lang]}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all group"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-12">
                <div className="mb-10 pb-10 border-b border-white/5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-4">Your Query:</div>
                  <p className="text-xl font-bold text-white italic">"{transcript || textQuery}"</p>
                </div>

                {load ? (
                  <div className="py-20 flex flex-col items-center gap-8">
                    <div className="w-16 h-1 bg-white/5 rounded-full relative overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute inset-0 bg-emerald-500"
                      />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 animate-pulse">Analyzing regional soil data & cross-referencing...</p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="prose prose-invert max-w-none">
                      <p className="text-emerald-50/80 text-xl leading-relaxed whitespace-pre-line font-medium">
                        {chatGPTResponse}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-10">
                      <button className="flex items-center gap-3 bg-white text-[#05150E] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl">
                        <Volume2 className="w-4 h-4" /> Listen
                      </button>
                      <button className="flex items-center gap-3 bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500/20 transition-all">
                        Connect to Agronomist
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-6 right-12 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/10" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Voice;
