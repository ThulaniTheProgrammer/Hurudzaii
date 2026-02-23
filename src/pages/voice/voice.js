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
    <div className="font-sans selection:bg-emerald-100">
      <div className="max-w-4xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.25em] mb-8 border border-emerald-500/10 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Voice Assistant
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-[#05150E] uppercase tracking-tight mb-4">
            Ask by <span className="text-emerald-600 font-serif lowercase italic tracking-normal">talking</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Don't want to type? Just press the button and talk to us in Shona, Ndebele, or English.
          </p>
        </div>

        {/* ── Search Interface ── */}
        <div className="bg-white border border-emerald-100 rounded-[4rem] p-10 md:p-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-12 text-center">
            {/* Language Toggles */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/40">Choose your language:</span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: "en", label: "English" },
                  { id: "hi", label: "Shona" },
                  { id: "es", label: "Ndebele" }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id)}
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${lang === l.id ? "bg-[#05150E] text-white shadow-xl" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Control */}
            <div className="flex flex-col items-center gap-10 py-6">
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startListening}
                  disabled={listening}
                  className={`w-40 h-40 rounded-full flex items-center justify-center relative z-10 transition-all shadow-2xl ${listening ? "bg-rose-500 animate-pulse shadow-rose-500/20" : "bg-emerald-600 hover:bg-[#05150E] shadow-emerald-600/20"}`}
                >
                  {listening ? <MicOff className="w-14 h-14 text-white" /> : <Mic className="w-14 h-14 text-white" />}
                </motion.button>

                {/* Ripple effects when listening */}
                {listening && (
                  <>
                    <motion.div initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 2, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-rose-500 rounded-full" />
                    <motion.div initial={{ scale: 1, opacity: 0.5 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="absolute inset-0 bg-rose-500 rounded-full" />
                  </>
                )}
              </div>

              <p className={`text-lg font-black uppercase tracking-[0.2em] transition-colors ${listening ? "text-rose-500" : "text-[#05150E]"}`}>
                {listening ? "LISTENING..." : "PRESS TO SPEAK"}
              </p>
            </div>

            <div className="flex items-center gap-4 md:gap-8 justify-center opacity-20">
              <div className="h-px w-20 bg-[#05150E]" />
              <span className="text-[10px] font-black uppercase tracking-widest">OR TYPE BELOW</span>
              <div className="h-px w-20 bg-[#05150E]" />
            </div>

            {/* Text Input Area */}
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={textQuery}
                  onChange={(e) => setTextQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTextSearch()}
                  placeholder="Type your question here..."
                  className="w-full pl-10 pr-20 py-7 rounded-[2.5rem] bg-gray-50 border-2 border-transparent focus:border-emerald-500 outline-none transition-all font-medium text-lg placeholder:text-gray-300 shadow-inner"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <button
                    onClick={handleTextSearch}
                    className="p-5 bg-[#05150E] text-white rounded-[1.5rem] hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
              {validationError && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest pl-4">{validationError}</p>}
            </div>
          </div>
        </div>

        {/* ── Status Bar ── */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-10">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/20">Farmer Privacy Guaranteed</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#05150E]/20">AI System Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
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
              className="relative w-full max-w-3xl bg-white rounded-[4rem] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="bg-gray-50/50 px-12 py-10 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-[#05150E]">Farm Advice</h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <Globe className="w-3 h-3" /> Listening in {lang === 'en' ? 'English' : lang === 'hi' ? 'Shona' : 'Ndebele'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all group shadow-sm text-gray-400 font-bold text-xl"
                >
                  &times;
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-12 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="mb-10 pb-8 border-b border-gray-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">You asked:</div>
                  <p className="text-2xl font-bold text-[#05150E] italic">"{transcript || textQuery}"</p>
                </div>

                {load ? (
                  <div className="py-20 flex flex-col items-center gap-10">
                    <div className="w-24 h-24 border-[12px] border-emerald-50 rounded-full animate-spin border-t-emerald-600" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 animate-pulse">Thinking about your farm...</p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-10"
                  >
                    <div className="prose prose-emerald max-w-none">
                      <p className="text-[#05150E]/80 text-xl md:text-2xl leading-relaxed whitespace-pre-line font-medium">
                        {chatGPTResponse}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="flex items-center gap-4 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#05150E] transition-all shadow-xl active:scale-95">
                        <Volume2 className="w-5 h-5" /> Listen to Audio
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Voice;
