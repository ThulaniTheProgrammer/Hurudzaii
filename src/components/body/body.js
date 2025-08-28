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
      setResult("Failed to fetch response. Try again.");
    }
    setLoading(false);
  };
  return (
    <div className="body">
      <div className="background-image grid place-items-center my-6 md:hidden">
        <div className="">
          <p className="text-2xl  font-bold text-center text-white uppercase mb-4">
            Farmers' Help Center
          </p>
          <p className="text-6xl font-medium text-center text-green-600 max-w-md mb-4">
            HURUDZA.AI
          </p>
          <p className="text-2xl font-bold text-center text-white">
            #WeAreFarmers'Voice
          </p>
          {/* Mobile search bar */}
          <div className="mt-6 w-full px-4 block md:hidden">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={mobileQuery}
                onChange={(e) => setMobileQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                onClick={handleMobileSearch}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <CardBar />
      <HelpCard />
      <section className="flex flex-col py-5">
        <div className="grid place-items-center my-14 ">
          <p className="text-3xl font-bold text-center text-gray-900 uppercase mb-2">
            FEATURES EXPLORED
          </p>
          <p className="text-xl font-medium text-center text-gray-500 max-w-md">
            {" "}
            Take a look at our features
          </p>
        </div>
        <img src={FeatureImg} alt="features" className="w-full h-auto object-contain"></img>
      </section>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-green-700">Search Result</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600">×</button>
            </div>
            {loading ? (
              <p className="text-gray-500">Loading...</p>
            ) : (
              <div className="p-3 bg-gray-50 border rounded max-h-[60vh] overflow-auto">
                <p className="whitespace-pre-line text-gray-800">{result}</p>
              </div>
            )}
            <div className="mt-4 text-right">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded" onClick={() => setIsModalOpen(false)}>
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