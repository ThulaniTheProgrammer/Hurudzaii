import React, { useState } from "react";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
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
        setModalOpen(true); // Open modal when result is ready
      } catch (error) {
        console.error("Roboflow Error:", error);
        setResult({ error: "Error getting prediction." });
        setModalOpen(true); // Show error in modal too
      } finally {
        setLoad(false);
      }
    };

    reader.readAsDataURL(photo);
  }

  return (
    <>
      <PreHeader />
      <Header />
      <section className="my-14">
        <div className="grid place-items-center">
          <div className="container bg-gray-100 p-10 grid place-items-center rounded shadow-lg">
            <p className="text-2xl font-medium text-green-600 my-8 text-center">
              Upload your maize image to get disease prediction
            </p>

            <div className="flex flex-row space-x-4 mb-6">
              <p className="font-semibold">Select Language:</p>
              <button onClick={() => setLang("en")} className="lang-button">English</button>
              <button onClick={() => setLang("hi")} className="lang-button">Shona</button>
              <button onClick={() => setLang("es")} className="lang-button">Ndebele</button>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mb-6 border p-2 rounded w-full"
            />

            <button onClick={onClick} className="action-button mb-6">
              {load ? "Detecting..." : "Get Disease Prediction"}
            </button>

            {photo && (
              <div className="mb-6 text-center">
                <p className="font-semibold mb-2">Uploaded Image:</p>
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Uploaded preview"
                  className="max-w-xs rounded shadow mx-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Disease Prediction</h2>

            {result && result.predicted_classes ? (
              <div className="space-y-4">
                {result.predicted_classes.map((disease, index) => {
                  const confidence = result.predictions[disease].confidence;
                  return (
                    <div key={index} className="p-4 border rounded bg-green-50">
                      <p className="font-semibold text-green-800">Disease{disease}</p>
                      <p>Confidence: {(confidence * 100).toFixed(1)}%</p>
                      <p>Treatment: {treatmentMap[disease]}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 font-semibold text-center">{result?.error || "No prediction available"}</p>
            )}
          </div>
        </div>
      )}

      {/* Tailwind Custom Buttons */}
      <style jsx>{`
        .lang-button,
        .action-button {
          padding: 0.6rem 1.2rem;
          background-color: #16a34a;
          color: white;
          font-size: 0.875rem;
          font-weight: bold;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .lang-button:hover,
        .action-button:hover {
          background-color: #15803d;
        }
      `}</style>
    </>
  );
};

export default Disease;
