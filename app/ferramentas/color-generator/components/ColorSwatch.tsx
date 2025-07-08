'use client'
import { motion } from 'framer-motion';
import { fadeIn } from "@/app/lib/animations";

interface ColorSwatchProps {
  hex: string;
  name: string;
  index?: number;
}

const ColorSwatch = ({ hex, name, index = 0 }: ColorSwatchProps) => {
  // WCAG compliant contrast calculation
  const getContrastColor = (hexColor: string) => {
    if (hexColor.length < 7) return 'text-gray-900'; // Fallback for short hex codes
    
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    
    // Calculate relative luminance
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.4 ? 'text-gray-900' : 'text-white';
  };

  const textColor = getContrastColor(hex);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      custom={index}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative 
        h-24 md:h-32 lg:h-36 xl:h-40  // Responsive height
        rounded-lg md:rounded-xl      // Responsive border radius
        flex flex-col justify-between 
        p-3 md:p-4                   // Responsive padding
        shadow-sm md:shadow-md        // Responsive shadow
        overflow-hidden 
        ${textColor} 
        transition-all duration-200
        w-full                        // Full width on mobile
      `}
      style={{ backgroundColor: hex }}
    >
      
      {/* Name - responsive font size */}
      <motion.span 
        className={`
          font-bold 
          text-sm md:text-base lg:text-lg  // Responsive text
          tracking-tight 
          z-10
          line-clamp-1                     // Prevent text overflow
        `}
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {name}
      </motion.span>
      
      {/* Color info section */}
      <div className="z-10">
        <motion.span 
          className={`
            uppercase 
            text-xs md:text-sm              // Responsive text
            font-mono font-medium 
            block mb-1
            line-clamp-1                   // Prevent text overflow
          `}
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {hex}
        </motion.span>
      </div>
      
      {/* Copy button - responsive size */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`
          absolute 
          top-2 right-2 
          p-1 bg-opacity-0 hover:bg-opacity-10 
          transition-all
          focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50
        `}
        onClick={() => navigator.clipboard.writeText(hex)}
        aria-label={`Copy ${hex} to clipboard`}
      >
        <svg 
          className="w-3 h-3 md:w-4 md:h-4"  // Responsive icon size
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default ColorSwatch;