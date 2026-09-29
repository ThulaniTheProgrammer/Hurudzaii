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
        bg-gray-50 dark:bg-gray-800 backdrop-blur-xl
        border border-gray-200 dark:border-gray-700
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        ${hover ? 'transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-[#2ECC71]/30 hover:shadow-[0_8px_40px_rgba(46,204,113,0.15)] cursor-pointer hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
