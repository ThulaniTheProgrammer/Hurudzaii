import React from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Google Play Store Icon - using the provided PNG image.
 */
export const PlayStoreIcon = ({ className = "w-8 h-8" }) => (
    <img src="/playstore.png" alt="Google Play Store" className={className} />
);

/**
 * WhatsApp Bot Icon — official brand icon via react-icons
 * Uses FaWhatsapp from react-icons/fa to respect WhatsApp brand guidelines.
 */
export const WhatsAppBotIcon = ({ className = "w-8 h-8" }) => (
    <FaWhatsapp className={className} style={{ color: "#25D366" }} />
);

/**
 * Farmers AI CRM Icon
 * Bar chart growing upward with a wheat leaf sprout merging into it.
 */
export const FarmersCRMIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bars */}
        <rect x="6" y="30" width="7" height="12" rx="2" fill="#10B981" fillOpacity="0.25" stroke="#10B981" strokeWidth="1.5" />
        <rect x="17" y="22" width="7" height="20" rx="2" fill="#10B981" fillOpacity="0.35" stroke="#10B981" strokeWidth="1.5" />
        <rect x="28" y="14" width="7" height="28" rx="2" fill="#10B981" fillOpacity="0.5" stroke="#10B981" strokeWidth="1.5" />
        {/* Leaf / sprout on top of tallest bar */}
        <path
            d="M31.5 14C31.5 14 28 8 35 6C35 13 31.5 14 31.5 14Z"
            fill="#10B981"
            stroke="#10B981"
            strokeWidth="1"
            strokeLinejoin="round"
        />
        <line x1="31.5" y1="6" x2="31.5" y2="14" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
        {/* Trend line */}
        <path
            d="M9.5 36L20.5 28L31.5 18"
            stroke="#34D399"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="3 2"
        />
    </svg>
);

/**
 * Developer Console Icon
 * Terminal prompt ">_" with a subtle circuit trace underneath.
 */
export const DeveloperConsoleIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Terminal window frame */}
        <rect x="4" y="8" width="40" height="32" rx="5" fill="#0D9488" fillOpacity="0.1" stroke="#0D9488" strokeWidth="1.5" />
        {/* Traffic-light dots */}
        <circle cx="11" cy="14" r="2" fill="#F87171" fillOpacity="0.7" />
        <circle cx="17" cy="14" r="2" fill="#FBBF24" fillOpacity="0.7" />
        <circle cx="23" cy="14" r="2" fill="#34D399" fillOpacity="0.7" />
        {/* Chevron prompt */}
        <path d="M10 27L15 22L10 17" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Cursor underscore */}
        <rect x="18" y="25" width="12" height="2.5" rx="1.25" fill="#2DD4BF" fillOpacity="0.8" />
        {/* Bottom circuit trace */}
        <path d="M4 34H14V33H20V34H44" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
);

/**
 * B2B Solutions Icon
 * Briefcase with an AI circuit inside — enterprise / professional feel.
 */
export const B2BSolutionsIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Briefcase body */}
        <rect x="6" y="18" width="36" height="24" rx="4" fill="#0891B2" fillOpacity="0.12" stroke="#0891B2" strokeWidth="1.5" />
        {/* Handle */}
        <path d="M18 18V14C18 12.9 18.9 12 20 12H28C29.1 12 30 12.9 30 14V18" stroke="#0891B2" strokeWidth="1.5" strokeLinecap="round" />
        {/* Center latch */}
        <rect x="20" y="27" width="8" height="6" rx="2" fill="#0891B2" fillOpacity="0.3" stroke="#0891B2" strokeWidth="1.2" />
        {/* AI circuit nodes */}
        <circle cx="13" cy="30" r="2" fill="#22D3EE" fillOpacity="0.8" />
        <circle cx="35" cy="30" r="2" fill="#22D3EE" fillOpacity="0.8" />
        <line x1="15" y1="30" x2="20" y2="30" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="28" y1="30" x2="33" y2="30" stroke="#22D3EE" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
);
