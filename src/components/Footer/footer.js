import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import footer from "../img/footer.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-green-700 to-green-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            <div>
              <h3 className="text-2xl font-bold">HURUDZA.AI</h3>
              <p className="text-sm mt-1">WeAreFarmerVoice</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li onClick={() => navigate("/")} className="hover:underline cursor-pointer">Home</li>
            <li onClick={() => navigate("/sms")} className="hover:underline cursor-pointer">SMS Service</li>
            <li onClick={() => navigate("/fertilizer")} className="hover:underline cursor-pointer">Fertilizer Prediction</li>
            <li onClick={() => navigate("/crop")} className="hover:underline cursor-pointer">Crop Prediction</li>
            <li onClick={() => navigate("/voice")} className="hover:underline cursor-pointer">Weather Prediction</li>
            <li onClick={() => navigate("/disease")} className="hover:underline cursor-pointer">Disease Prediction</li>
          </ul>
        </div>

        {/* Feedback and Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Engage with Us</h4>
          <p className="mb-3">Have feedback?</p>
          <button
            onClick={() => navigate("/feedback")}
            className="text-sm bg-white text-green-700 font-semibold py-1 px-3 rounded hover:bg-green-100 transition"
          >
            Submit Here
          </button>
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <img src={Vector} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <img src={Vector1} alt="Twitter" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
              <img src={Vector2} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Ministry Branding */}
        <div className="flex flex-col items-center">
          <img src={footer} alt="Ministry" className="w-20 h-20 object-contain mb-4" />
          <h4 className="text-md font-bold text-center">
            Ministry of Agriculture and Farmer's Welfare
          </h4>
          <p className="text-xs mt-2 text-center">Supported by Hurudza Software Team</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white mt-12 pt-6 text-center text-sm text-white/80">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p>© {new Date().getFullYear()} Hurudza.AI. All rights reserved.</p>
          <span className="hidden md:inline">|</span>
          <span
            onClick={() => navigate("/privacy")}
            className="hover:underline cursor-pointer"
          >
            Privacy Policy
          </span>
          <span className="hidden md:inline">|</span>
          <button
            type="button"
            onClick={() => navigate("/delete-account")}
            className="hover:underline"
          >
            Request Account Deletion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
