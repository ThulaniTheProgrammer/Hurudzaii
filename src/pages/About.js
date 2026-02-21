import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#05150E] text-white font-sans">
      <Header />
      <section className="relative pt-40 pb-24 px-6 overflow-hidden text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-400">This page is under construction. Please check back later!</p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
