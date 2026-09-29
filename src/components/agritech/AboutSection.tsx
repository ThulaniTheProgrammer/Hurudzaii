import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const aboutImages = [
  '/Assets/one.jpeg',
  '/Assets/two.jpeg',
  '/Assets/three.jpeg',
  '/Assets/four.jpeg',
  '/Assets/five.jpeg',
  '/Assets/six.jpeg',
  '/Assets/seven.jpeg',
  '/Assets/eight.jpeg',
  '/Assets/nine.jpg',
  '/Assets/ten.jpg'
];

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2ECC71]/5 blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4FF00]/[0.03] blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className={`order-2 lg:order-1 h-[500px] sm:h-[600px] flex flex-col ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Story Began in an{' '}
                <span className="text-[#2ECC71]">
                  African Village
                </span>
              </h2>
            </div>

            {/* Story Content */}
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              <p>
                Founded by Frank Makeba, who grew up in Zvimba District in Zimbabwe's Mashonaland West, Hurudza AI is rooted in the understanding that every harvest carries a family's hopes: food on the table, a child's education, and the chance to face tomorrow with dignity. When a harvest fails, more than crops are lost. In 2022, Frank began building the datasets that would lay the foundation for Hurudza AI. That work grew from a purpose that still guides us today: ensuring African farmers' knowledge, languages, and everyday challenges have a place in the technology built to serve them. Today, we continue to listen to farmers and build around their realities—the rains that arrive too late, the disease that threatens months of labour, and the urgent questions that too often go unanswered. We bring generations of indigenous agricultural knowledge together with African-owned AI, making practical guidance accessible in the languages farmers speak. We build to help them protect their harvests, adapt to a changing climate, and care for the land their children will inherit.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6 cursor-pointer hover:border-[#2ECC71]/30 transition-all duration-300" onClick={() => setExpandedSection(expandedSection === 'mission' ? null : 'mission')}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Our Mission</h3>
                <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedSection === 'mission' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ${expandedSection === 'mission' ? '' : 'max-h-12 overflow-hidden'}`}>
                To put African-owned AI into the hands of smallholder farmers, combining indigenous knowledge with practical guidance in their own languages to protect harvests, strengthen livelihoods, and build climate resilience.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-[#2ECC71]/30 transition-all duration-300" onClick={() => setExpandedSection(expandedSection === 'vision' ? null : 'vision')}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Our Vision</h3>
                <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedSection === 'vision' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className={`text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ${expandedSection === 'vision' ? '' : 'max-h-12 overflow-hidden'}`}>
                An Africa where every farmer can grow with confidence, every farming family can thrive, and generations of agricultural wisdom help sustain the land and feed the future.
              </p>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src={aboutImages[currentImage]}
                  alt={`About image ${currentImage + 1}`}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop';
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
