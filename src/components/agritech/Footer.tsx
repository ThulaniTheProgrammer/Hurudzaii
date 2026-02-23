import React, { useState } from 'react';
import { ArrowRight, Check, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    Products: [
      { label: 'Farm Manager', id: 'apps' },
      { label: 'ZundePay', id: 'apps' },
      { label: 'Crop Analytics', id: 'solutions' },
      { label: 'IoT Sensors', id: 'solutions' },
      { label: 'Satellite Monitoring', id: 'solutions' },
    ],
    Developers: [
      { label: 'Developer Portal', id: 'developers' },
      { label: 'API Documentation', id: 'api' },
      { label: 'GraphQL Endpoint', id: 'api' },
      { label: 'SDKs & Libraries', id: 'api' },
      { label: 'Webhooks', id: 'api' },
    ],
    Company: [
      { label: 'About Us', id: 'about' },
      { label: 'Careers', id: 'about' },
      { label: 'Press Kit', id: 'about' },
      { label: 'Blog', id: 'about' },
      { label: 'Contact', id: 'contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', id: 'hero' },
      { label: 'Terms of Service', id: 'hero' },
      { label: 'Data Processing', id: 'hero' },
      { label: 'Cookie Policy', id: 'hero' },
      { label: 'Security', id: 'hero' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', Icon: Twitter, url: '#' },
    { name: 'LinkedIn', Icon: Linkedin, url: '#' },
    { name: 'GitHub', Icon: Github, url: '#' },
    { name: 'YouTube', Icon: Youtube, url: '#' },
  ];

  return (
    <footer className="relative border-t border-white/[0.04]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#020202]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/[0.04]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Stay ahead of the{' '}
                <span className="bg-gradient-to-r from-[#2ECC71] to-[#D4FF00] bg-clip-text text-transparent">harvest</span>
              </h3>
              <p className="text-white/40 text-sm">
                Get weekly insights on agricultural technology, market trends, and platform updates.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#2ECC71]/30 focus:ring-1 focus:ring-[#2ECC71]/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2ECC71] to-[#27ae60] text-[#050505] font-semibold rounded-xl shadow-[0_0_20px_rgba(46,204,113,0.2)] hover:shadow-[0_0_30px_rgba(46,204,113,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap text-sm"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <button onClick={() => onNavigate('hero')} className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#D4FF00] flex items-center justify-center shadow-[0_0_15px_rgba(46,204,113,0.2)]">
                <img src="/hurudza.png" alt="Hurudza logo" className="w-4 h-4 object-contain" />
              </div>
              <div>
                <span className="text-white font-bold text-base">Hurudza AI</span>
                <span className="text-[#2ECC71] text-[9px] font-medium tracking-[0.15em] uppercase block leading-none mt-0.5">Zimbabwe</span>
              </div>
            </button>
            <p className="text-xs text-white/30 leading-relaxed max-w-xs">
              Empowering Zimbabwean agriculture with cutting-edge technology. From precision farming to financial inclusion.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.id === 'developers' ? (
                      <a
                        href="/developers"
                        className="text-sm text-white/30 hover:text-[#2ECC71] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => onNavigate(link.id)}
                        className="text-sm text-white/30 hover:text-[#2ECC71] transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Hurudza AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
                aria-label={name}
              >
                <div className="absolute inset-0 bg-[#2ECC71]/10 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                <Icon className="w-4 h-4 text-white/30 group-hover:text-[#2ECC71] relative z-10 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
