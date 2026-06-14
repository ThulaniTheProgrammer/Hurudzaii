import { Component } from "react";
import SMS from "../img/sms.png";
import Help from "../img/help-desk.png";
import Call from "../img/phone-call.png";

class HelpCard extends Component {
  render() {
    return (
      <section className="bg-gray-100 py-10">
        <div className="grid place-items-center mt-14 px-4">
          <p className="text-3xl font-bold text-center text-gray-900 uppercase mb-2">
            NEED HELP?
          </p>
          <p className="text-base md:text-xl font-medium text-center text-gray-500 max-w-3xl">
            We open the door to thousands of farmers worldwide. Ask your queries
            and get the best solution instantly. There are two ways to get the
            solutions.
          </p>
        </div>
        <div className="grid place-items-center mt-10 mb-20 px-4">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 w-full max-w-5xl">
            <div className="flex flex-row items-center bg-white rounded-xl shadow m-0 p-4 md:p-5 w-full">
              <img className="w-12 h-12 md:w-14 md:h-14 rounded-lg mr-4" src={Call} alt="call" />
              <div className="flex flex-col flex-1 min-w-0">
                <p className="truncate">Give Hurudza AI a call</p>
                <p className="text-green-600">9876644566</p>
              </div>
            </div>
            <div className="flex flex-row items-center bg-white rounded-xl shadow m-0 p-4 md:p-5 w-full">
              <img className="w-12 h-12 md:w-14 md:h-14 rounded-lg mr-4" src={SMS} alt="SMS" />
              <div className="flex flex-col flex-1 min-w-0">
                <p className="truncate">Drop your query</p>
                <p
                  className="text-green-600 cursor-pointer"
                  onClick={() => {
                    window.location.href = "/sms";
                  }}
                >
                  here to get SMS
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center bg-white rounded-xl shadow m-0 p-4 md:p-5 w-full">
              <img className="w-12 h-12 md:w-14 md:h-14 rounded-lg mr-4" src={Help} alt="help" />
              <div className="flex flex-col flex-1 min-w-0">
                <p className="truncate">Use the voice bot</p>
                <p
                  className="text-green-600 cursor-pointer"
                  onClick={() => {
                    window.location.href = "/voice";
                  }}
                >
                  click here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HelpCard;
