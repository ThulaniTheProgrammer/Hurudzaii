import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

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

  const isLightTheme = theme === 'light';

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'dark' : 'light');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('hero')} className="flex items-center gap-0 group">
            <div className="relative ">
              <img src="/hurudza.png" alt="Hurudza logo" className="w-16 h-22 object-contain" />
            </div>
            <div className="flex flex-col">
            
              <span className="text-[#2ECC71] text-[10px] font-medium tracking-[0.2em] uppercase bold leading-none mt-0.5"></span>
              <span className="text-[#2ECC71] text-[10px] font-medium tracking-[0.2em] uppercase bold leading-none mt-0.5"></span>
            
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
                  className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-bold uppercase"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />}
                </button>
                {link.children && activeDropdown === link.id && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-2 animate-scale-in">
                    {link.children.map((child) => (
                      <button
                        key={child}
                        onClick={() => handleNav(link.id)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 flex items-center gap-3 font-bold uppercase"
                      >
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
              onClick={toggleTheme}
              aria-label={isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
              className="p-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {isLightTheme ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => handleNav('api')}
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold uppercase"
            >
              Developer Portal
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2.5 text-sm font-medium text-[#050505] bg-gradient-to-r from-[#2ECC71] to-[#27ae60] rounded-lg shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {isLightTheme ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-2xl border-t border-gray-200 dark:border-gray-800 animate-slide-in">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all text-base font-bold uppercase"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNav('api')}
                className="w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-800 font-bold uppercase"
              >
                Developer Portal
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="w-full px-4 py-3 text-sm font-medium text-[#050505] bg-gradient-to-r from-[#2ECC71] to-[#27ae60] rounded-lg text-center"
              >
                Request demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
