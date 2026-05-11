import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.04] backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        ${hover ? 'transition-all duration-500 hover:bg-white/[0.08] hover:border-[#2ECC71]/30 hover:shadow-[0_8px_40px_rgba(46,204,113,0.15)] cursor-pointer hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
