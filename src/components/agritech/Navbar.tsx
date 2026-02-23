import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', id: 'solutions', children: ['Farm Management', 'Farm Manager', 'ZundePay', 'Crop Analytics', 'IoT Sensors'] },
    { label: 'Products', id: 'apps' },
    { label: 'API & Docs', id: 'api' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('hero')} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#D4FF00] flex items-center justify-center shadow-[0_0_20px_rgba(46,204,113,0.3)] group-hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-shadow duration-300">
              <img src="/hurudza.png" alt="Hurudza logo" className="w-5 h-5 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight leading-none">Hurudza AI</span>
              <span className="text-[#2ECC71] text-[10px] font-medium tracking-[0.2em] uppercase leading-none mt-0.5">Zimbabwe</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNav(link.id)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-300"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {link.children && activeDropdown === link.id && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2 animate-scale-in">
                    {link.children.map((child) => (
                      <button
                        key={child}
                        onClick={() => handleNav(link.id)}
                        className="w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all duration-200 flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]/50" />
                        {child}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('api')}
              className="px-4 py-2 text-sm text-white/70 hover:text-white border border-white/[0.1] hover:border-[#2ECC71]/30 rounded-lg transition-all duration-300 hover:bg-white/[0.03]"
            >
              Developer Portal
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2.5 text-sm font-medium text-[#050505] bg-gradient-to-r from-[#2ECC71] to-[#27ae60] rounded-lg shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050505]/98 backdrop-blur-2xl border-t border-white/[0.06] animate-slide-in">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all text-base"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNav('api')}
                className="w-full px-4 py-3 text-sm text-white/70 border border-white/[0.1] rounded-lg text-center"
              >
                Developer Portal
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="w-full px-4 py-3 text-sm font-medium text-[#050505] bg-gradient-to-r from-[#2ECC71] to-[#27ae60] rounded-lg text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
