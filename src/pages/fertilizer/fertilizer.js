import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, Search, RefreshCw, Sprout,
  MapPin, CheckCircle2, ChevronRight, Info,
  Zap, Droplets, Thermometer, Wind
} from "lucide-react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("Clay");
  const [cropType, setCropType] = useState("Maize");
  const [moisture, setMoisture] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");
  const [lang, setLang] = useState("en");

  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const systemPrompt = {
    en: `You are an architectural agricultural assistant. Based on soil type, crop type, moisture, nitrogen, phosphorus, potassium and city, provide:
1. Recommended fertilizer.
2. Information about it.
3. How to apply it.
4. Its specifications.
Keep responses highly technical and structured.`,
    hi: `Iwe uri mubatsiri wezvekurima weHurudzai AI. Zvichienderana nerudzi rwevhu, chirimwa, hunyoro, nitrogen, phosphorus, potassium nemaguta, ipa:
1. Fetereza inokurudzirwa.
2. Ruzivo nezvayo.
3. Maitiro ekuiisa.
4. Zvakakosha zvefetereza yacho.
Pindura muchiShona zvakajeka uye zvine hunyanzvi.`,
    nd: `Ungumeluleki wezolimo weHurudzai AI. Ngokohlobo lomhlabathi, uhlobo lwesilimo, umswakamo, i-nitrogen, i-phosphorus, i-potassium kanye ledolobho, nikeza:
1. Umanyolo ohlongozwayo.
2. Ulwazi ngawo.
3. Indlela yokuwusebenzisa.
4. Incazelo yomkhiqizo.
Phendula ngesiNdebele esiqondile.`
  };

  const onSearchSubmit = async () => {
    setLoad(true);
    setPrediction("");
    setInformation("");
    setApplication("");
    setSpecification("");

    const userInput = `Soil type: ${soilType}, Crop type: ${cropType}, Moisture: ${moisture}, N: ${nitrogen}, P: ${phosphorus}, K: ${potassium}, City: ${city}. Give a full fertilizer recommendation.`;

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt[lang] || systemPrompt.en },
            { role: "user", content: userInput }
          ],
          temperature: 0.6
        })
      });

      const data = await res.json();
      const content = data?.choices?.[0]?.message?.content || "";

      setPrediction(content.match(/(?:Fertilizer|Recommendation):?\s*(.*)/i)?.[1] || "—");
      setInformation(content.match(/Information:?\s*([\s\S]*?)Application:/i)?.[1] || "—");
      setApplication(content.match(/Application:?\s*([\s\S]*?)Specification:/i)?.[1] || "—");
      setSpecification(content.match(/Specification:?\s*([\s\S]*)/i)?.[1] || "—");
    } catch (error) {
      console.error("OpenAI Error:", error);
      setPrediction("Technical error in inference. Please try again.");
    }
    setLoad(false);
  };

  return (
    <div className="min-h-screen bg-[#05150E] text-white font-sans selection:bg-emerald-500/30">
      <PreHeader />
      <Header />

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              Precision Nutrient Lab
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
              Predictive <br /><span className="text-emerald-400 font-serif lowercase italic">fertility</span> Engine.
            </h1>
            <p className="text-emerald-100/40 text-lg font-medium max-w-2xl leading-relaxed">
              Input your soil metrics and regional data to generate a machine-learning based fertilizer recommendation tailored for your specific plot.
            </p>
          </div>

          <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
            {/* ── Parameters Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl shadow-2xl space-y-8"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400">Input Metrics</h3>
                <div className="flex gap-2">
                  {["en", "hi", "nd"].map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`w-8 h-8 rounded-full text-[8px] font-black uppercase flex items-center justify-center transition-all ${lang === l ? "bg-emerald-500 text-[#05150E]" : "bg-white/5 text-white/40"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-4">Soil Type</label>
                    <select onChange={(e) => setSoilType(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all">
                      <option value="Clay">Clayey</option>
                      <option value="Sandy">Sandy</option>
                      <option value="Loamy">Loamy</option>
                      <option value="Black">Black</option>
                      <option value="Red">Red</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-4">Crop Type</label>
                    <select onChange={(e) => setCropType(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all">
                      {["Maize", "Wheat", "Tobacco", "Cotton", "Sugarcane", "Paddy", "Barley"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-4">Moisture Level (%)</label>
                  <div className="relative">
                    <Droplets className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                    <input type="number" onChange={(e) => setMoisture(e.target.value)} placeholder="0 - 100" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[{ label: "N", setter: setNitrogen }, { label: "P", setter: setPhosphorus }, { label: "K", setter: setPotassium }].map(item => (
                    <div key={item.label} className="space-y-2 text-center">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/20">{item.label}</label>
                      <input type="number" onChange={(e) => item.setter(e.target.value)} placeholder="mg/kg" className="w-full bg-white/5 border border-white/10 rounded-xl px-2 py-4 text-center text-sm font-bold outline-none focus:border-emerald-500 transition-all font-mono" />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20 pl-4">Location / City</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="e.g. Mashonaland West" className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold outline-none focus:border-emerald-500 transition-all" />
                  </div>
                </div>
              </div>

              <button
                onClick={onSearchSubmit}
                disabled={load}
                className="w-full py-6 rounded-3xl bg-emerald-600 text-[#05150E] font-black uppercase tracking-[0.2em] text-xs hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
              >
                {load ? <RefreshCw className="w-5 h-5 animate-spin" /> : <><Search className="w-4 h-4" /> Run Lab Inference</>}
              </button>
            </motion.div>

            {/* ── Results Panel ── */}
            <div className="space-y-8">
              {!prediction && !load && (
                <div className="h-full min-h-[500px] border-2 border-dashed border-white/10 rounded-[3.5rem] flex flex-col items-center justify-center p-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-10">
                    <Info className="w-8 h-8 text-white/20" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white/20 mb-4">Awaiting Parameters</h3>
                  <p className="text-white/10 text-sm font-medium italic">Enter your soil metrics on the left to generate the fertility report.</p>
                </div>
              )}

              {load && (
                <div className="h-full min-h-[500px] bg-white/5 rounded-[3.5rem] flex flex-col items-center justify-center p-20 text-center border border-white/10">
                  <div className="relative mb-12">
                    <div className="w-24 h-24 border-4 border-emerald-500/20 rounded-full animate-spin border-t-emerald-500" />
                    <FlaskConical className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-emerald-400 animate-pulse" />
                  </div>
                  <code className="text-emerald-400 text-xs font-black uppercase tracking-[0.3em] bg-emerald-500/10 px-6 py-2 rounded-full">Analyzing Regional Soil Data...</code>
                </div>
              )}

              <AnimatePresence>
                {prediction && !load && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-emerald-600 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-100">Recommended Fertilizer</h4>
                            <p className="text-4xl font-black uppercase tracking-tighter text-white">{prediction}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                        <Sprout className="w-32 h-32" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
                        <div className="flex items-center gap-4 mb-8">
                          <Info className="w-5 h-5 text-blue-400" />
                          <h4 className="text-xs font-black uppercase tracking-widest">Product Information</h4>
                        </div>
                        <p className="text-sm font-medium text-emerald-100/60 leading-relaxed italic">{information}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
                        <div className="flex items-center gap-4 mb-8">
                          <Zap className="w-5 h-5 text-amber-400" />
                          <h4 className="text-xs font-black uppercase tracking-widest">Application Guide</h4>
                        </div>
                        <p className="text-sm font-medium text-emerald-100/60 leading-relaxed italic">{application}</p>
                      </div>
                    </div>

                    <div className="bg-[#0A120F] border border-white/5 rounded-[2.5rem] p-12">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <h4 className="text-xs font-black uppercase tracking-widest">Technical Specifications</h4>
                        </div>
                        <button className="text-[10px] font-bold uppercase text-white/20 hover:text-white transition-colors">Export PDF</button>
                      </div>
                      <p className="text-emerald-100/40 text-sm leading-relaxed font-mono whitespace-pre-wrap">{specification}</p>
                    </div>

                    <div className="flex items-center justify-center gap-12 pt-8">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4 text-rose-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Soil Temp Sync</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Wind Drift Alert</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Fertilizer;
