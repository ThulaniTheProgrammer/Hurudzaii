import { Component } from "react";
import Image from "../img/voice-message.png";
import SMS from "../img/sms.png";
import Help from "../img/help-desk.png";

class CardBar extends Component {
  render() {
    return (
      <section className="body__section py-10">
        <div className="grid place-items-center mt-5 px-4">
          <p className="text-2xl md:text-3xl font-black text-center text-gray-900 uppercase mb-2">
            HOW HURUDZAI AI HELPS
          </p>
          <p className="text-base md:text-xl font-medium text-center text-gray-500 ">
            Being a part of Hurudzai.AI, these are our mainstays
          </p>
        </div>
        <div className="grid place-items-center mt-10 mb-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl">
            <div className="flex flex-col items-center text-center bg-white border rounded-lg border-black/10 p-6 md:p-8 shadow-sm">
              <img className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4" src={Help} alt="help" />
              <p className="text-lg font-semibold text-gray-900">24*7 calls and help desk</p>
              <p className="opacity-70 text-base mt-2">Providing solutions through calls</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white border rounded-lg border-black/10 p-6 md:p-8 shadow-sm">
              <img className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4" src={SMS} alt="SMS" />
              <p className="text-lg font-semibold text-gray-900">SMS services for contact</p>
              <p className="opacity-70 text-base mt-2">Send your queries through SMS</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white border rounded-lg border-black/10 p-6 md:p-8 shadow-sm">
              <img src={Image} className="w-12 h-12 md:w-14 md:h-14 rounded-lg mb-4" alt="voice assistance" />
              <p className="text-lg font-semibold text-gray-900">Voice assistant System</p>
              <p className="opacity-70 text-base mt-2">Get voice assisted solution</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardBar;
