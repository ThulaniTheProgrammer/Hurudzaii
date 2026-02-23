import React, { useState } from "react";
import { Camera, ShieldCheck, RefreshCw, Upload, Languages } from "lucide-react";
import axios from "axios";

const Disease = () => {
  const [photo, setPhoto] = useState(null);
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState(null);
  const [lang, setLang] = useState("en");
  const [modalOpen, setModalOpen] = useState(false);

  const treatmentMap = {
    Blight: "Remove affected leaves and use copper-based fungicide.",
    Common_Rust: "Remove infected leaves and apply systemic fungicide.",
    Gray_Leaf_Spot: "Rotate crops and apply fungicide if severe.",
    Healthy: "Your plant is healthy! Continue regular care."
  };

  async function onClick() {
    if (!photo) return alert("Please upload an image.");

    setLoad(true);
    setResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];

      try {
        const response = await axios({
          method: "POST",
          url: "https://detect.roboflow.com/maize-disease-ypdmh-fgnlw/1",
          params: {
            api_key: "YlHLEkinFGVyIWoXca5o"
          },
          data: base64Image,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

        setResult(response.data);
        setModalOpen(true);
      } catch (error) {
        console.error("Roboflow Error:", error);
        setResult({ error: "Error getting prediction." });
        setModalOpen(true);
      } finally {
        setLoad(false);
      }
    };

    reader.readAsDataURL(photo);
  }

  return (
    <div className="font-sans">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center px-4">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-sm border border-emerald-500/10">
            <Camera className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#05150E] uppercase tracking-tight mb-4">Crop Doctor</h1>
          <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Upload a photo of your maize leaves. Our AI will check if they are sick and tell you how to fix them.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 hidden md:block">
            <ShieldCheck className="w-32 h-32" />
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

            {/* File Input */}
            <div className="group relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className="border-2 border-dashed border-emerald-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-center group-hover:border-emerald-400 transition-colors bg-emerald-50/20 group-hover:bg-emerald-50/50">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <p className="font-black text-[#05150E] uppercase tracking-tight text-base md:text-lg mb-2">
                  {photo ? photo.name : "Tap to Upload Photo"}
                </p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Supports JPG, PNG up to 10MB</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onClick}
              disabled={load || !photo}
              className={`w-full py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 ${load || !photo ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-emerald-600 text-white hover:bg-[#05150E] shadow-emerald-600/20"}`}
            >
              {load ? (
                <> <span className="animate-spin"><RefreshCw className="w-5 h-5" /></span> Checking Your Plant... </>
              ) : (
                <> Start Analysis <Camera className="w-5 h-5" /> </>
              )}
            </button>

            {photo && !load && (
              <div className="text-center pt-4">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Selected preview"
                  className="max-w-[200px] md:max-w-xs rounded-2xl md:rounded-3xl shadow-2xl mx-auto border-4 border-white inline-block"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#05150E]/80 backdrop-blur-sm flex items-center justify-center z-[70] p-6">
          <div className="bg-white rounded-[3.5rem] shadow-2xl w-full max-w-xl p-12 relative overflow-hidden">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-8 right-10 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all text-gray-400 font-black text-xl"
            >
              &times;
            </button>

            <h2 className="text-3xl font-black text-[#05150E] mb-10 text-center uppercase tracking-tight">Diagnosis Result</h2>

            {result && result.predicted_classes ? (
              <div className="space-y-6">
                {result.predicted_classes.map((disease, index) => {
                  const confidence = result.predictions[disease].confidence;
                  return (
                    <div key={index} className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-black text-[#05150E] uppercase tracking-tight">{disease.replace(/_/g, " ")}</h4>
                          <span className="px-3 py-1 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                            {(confidence * 100).toFixed(0)}% Match
                          </span>
                        </div>
                        <p className="text-emerald-900/60 font-medium leading-relaxed">
                          <span className="text-[10px] font-black text-[#05150E] uppercase tracking-widest block mb-1">Recommended Treatment:</span>
                          {treatmentMap[disease] || "Continue monitoring your plant health."}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 rounded-[2rem] bg-rose-50 border border-rose-100 text-center">
                <p className="text-rose-600 font-black uppercase text-sm tracking-tight">{result?.error || "We couldn't read the photo. Please try take a clearer picture."}</p>
              </div>
            )}

            <button
              onClick={() => setModalOpen(false)}
              className="w-full mt-10 py-5 rounded-2xl bg-[#05150E] text-white font-black text-xs uppercase tracking-widest hover:bg-emerald-800 transition-all shadow-xl"
            >
              Close Result
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Disease;
