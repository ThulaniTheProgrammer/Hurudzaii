import React from "react";
import "./preheader.css";
import footer from "../img/footer.png";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#219653] px-12 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
     
          <p className="font-semibold text-white text-xs sm:text-sm ml-1">
           Hurudza AI Web Platform
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
