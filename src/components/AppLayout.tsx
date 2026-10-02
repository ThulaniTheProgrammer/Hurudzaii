import React, { useCallback } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from './agritech/Navbar';
import HeroSection from './agritech/HeroSection';
import PartnersMarquee from './agritech/PartnersMarquee';
import AboutSection from './agritech/AboutSection';
import FeaturesSection from './agritech/FeaturesSection';
import StatsSection from './agritech/StatsSection';
import AppDownloadHub from './agritech/AppDownloadHub';
import APIPortal from './agritech/APIPortal';
import ContactForm from './agritech/ContactForm';
import Footer from './agritech/Footer';

const AppLayoutContent: React.FC = () => {
  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      {/* Custom scrollbar styles */}
      <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #ffffff;
        }
        .dark ::-webkit-scrollbar-track {
          background: #111827;
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
          background: #ffffff;
        }
        .dark body {
          background: #111827;
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(46, 204, 113, 0.3) #ffffff;
        }
        .dark * {
          scrollbar-color: rgba(46, 204, 113, 0.3) #111827;
        }
      `}</style>

      <Navbar onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <PartnersMarquee />
      <AboutSection />
      <FeaturesSection />
      <AppDownloadHub />
      <APIPortal />
      
      <ContactForm />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <AppLayoutContent />
    </ThemeProvider>
  );
};

export default AppLayout;
