import React, { useState } from "react";
import "../../index.css";
import "./body.css";
import FeatureImg from "../img/feature.jpeg";
import CardBar from "../CardBar/CardBar";
import HelpCard from "../HelpCard/HelpCard";

const Body = () => {
  const [mobileQuery, setMobileQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const handleMobileSearch = async () => {
    if (!mobileQuery.trim()) return;
    setLoading(true);
    setIsModalOpen(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant. Keep answers concise." },
            { role: "user", content: mobileQuery },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      if (data?.choices?.[0]?.message?.content) {
        setResult(data.choices[0].message.content);
      } else {
        setResult("No response. Please try again.");
      }
    } catch (e) {
      setResult("Please subscribe or contact us on +263787423492 for free demo.");
    }
    setLoading(false);
  };

  return (
    <div className="body bg-white">

      {/* ================= CLEAN MINIMAL MOBILE HEADER ================ */}
      <div className="md:hidden w-full py-10 px-6 text-center">

        <p className="text-4xl font-extrabold text-green-700 tracking-wide mb-1">
          HURUDZA.AI
        </p>

        <p className="text-sm text-green-600 font-medium">
          Agriculture Intelligence
        </p>

        {/* TEXTAREA SEARCH BOX */}
        <div className="mt-8 w-full max-w-md mx-auto">
          <div className="border border-green-600 rounded-2xl shadow-sm p-3 bg-white">

            <textarea
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              placeholder="Ask Hurudza anything..."
              rows={3}
              className="w-full bg-transparent resize-none text-gray-800 text-base focus:outline-none"
            />

            <div className="text-right mt-2">
              <button
                onClick={handleMobileSearch}
                className="px-5 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full"
              >
                Send
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= WEB VIEW COMPONENTS ================= */}
      <CardBar />
      <HelpCard />

      {/* ================= FEATURES SECTION ================= */}
      <section className="flex flex-col py-6 px-4 md:px-0">
        <div className="text-center my-10">
          <p className="text-2xl md:text-3xl font-bold text-green-700">
            Explore Our Features
          </p>
          <p className="text-base md:text-xl text-gray-600 mt-1">
            Hurudza's digital tools for farmers
          </p>
        </div>

        <img
          src={FeatureImg}
          alt="features"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </section>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-green-700">Search Result</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {loading ? (
              <p className="text-center py-4 text-gray-600">Loading...</p>
            ) : (
              <div className="p-3 bg-gray-50 border rounded max-h-[50vh] overflow-y-auto">
                <p className="text-gray-800 whitespace-pre-line">{result}</p>
              </div>
            )}

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Body;
