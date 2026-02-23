import React, { useCallback } from 'react';
import Navbar from './agritech/Navbar';
import HeroSection from './agritech/HeroSection';
import PartnersMarquee from './agritech/PartnersMarquee';
import FeaturesSection from './agritech/FeaturesSection';
import StatsSection from './agritech/StatsSection';
import AppDownloadHub from './agritech/AppDownloadHub';
import APIPortal from './agritech/APIPortal';
import ContactForm from './agritech/ContactForm';
import Footer from './agritech/Footer';

const AppLayout: React.FC = () => {
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Custom scrollbar styles */}
      <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(46, 204, 113, 0.3);
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(46, 204, 113, 0.5);
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background: #050505;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(46, 204, 113, 0.3) #050505;
        }
      `}</style>

      <Navbar onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <PartnersMarquee />
      <FeaturesSection />
      <StatsSection />
      <AppDownloadHub />
      <APIPortal />
      <ContactForm />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default AppLayout;
