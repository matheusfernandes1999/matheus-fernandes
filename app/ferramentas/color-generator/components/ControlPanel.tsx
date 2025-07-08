'use client'
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { hexToHsl, hslToHex, hexToRgb, rgbToHex } from "@/app/lib/colors";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/app/lib/animations";

interface ControlPanelProps {
  color: string;
  setColor: (color: string) => void;
  algorithm: string;
  setAlgorithm: (algorithm: string) => void;
  namingPattern: string;
  setNamingPattern: (pattern: string) => void;
  contrastShift: number;
  setContrastShift: (shift: number) => void;
  shadeCount: number;
  setShadeCount: (count: number) => void;
}

const ControlPanel = ({
  color,
  setColor,
  algorithm,
  setAlgorithm,
  namingPattern,
  setNamingPattern,
  contrastShift,
  setContrastShift,
  shadeCount,
  setShadeCount,
}: ControlPanelProps) => {
  const [colorModel, setColorModel] = useState("HSL");

  // Handlers for color changes
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleHslChange = (newHsl: { h?: number; s?: number; l?: number }) => {
    const currentHsl = hexToHsl(color);
    const h = newHsl.h ?? currentHsl.h;
    const s = newHsl.s ?? currentHsl.s;
    const l = newHsl.l ?? currentHsl.l;
    setColor(hslToHex(h, s, l));
  };

  const handleRgbChange = (newRgb: { r?: number; g?: number; b?: number }) => {
    const currentRgb = hexToRgb(color);
    const r = newRgb.r ?? currentRgb.r;
    const g = newRgb.g ?? currentRgb.g;
    const b = newRgb.b ?? currentRgb.b;
    setColor(rgbToHex(r, g, b));
  };

  // Get current color values in different models
  const { h, s, l } = hexToHsl(color);
  const { r, g, b } = hexToRgb(color);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 bg-white border-gray-500 border-2 rounded-lg md:rounded-xl"
    >
      {/* Color Picker - full width on mobile, then first column */}
      <motion.div variants={slideUp} className="space-y-3 md:space-y-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md md:rounded-lg border-2 border-gray-300 shadow-xs sm:shadow-sm"
            style={{ backgroundColor: color }}
          ></motion.div>
          <div className="flex-1 min-w-0">
            <input
              type="text"
              value={color.toUpperCase()}
              onChange={handleHexChange}
              className="text-xl sm:text-2xl font-bold text-gray-900 w-full max-w-[140px] bg-gray-50 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="relative inline-block text-left mt-1">
              <select
                value={colorModel}
                onChange={(e) => setColorModel(e.target.value)}
                className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="HSL">HSL</option>
                <option value="RGB">RGB</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
          {colorModel === "HSL" && (
            <>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">H</span>
                <input 
                  type="range" 
                  min="0" 
                  max="360" 
                  value={h} 
                  onChange={(e) => handleHslChange({ h: Number(e.target.value) })} 
                  className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full appearance-none cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{h.toFixed(0)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">S</span>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={s} 
                  onChange={(e) => handleHslChange({ s: Number(e.target.value) })} 
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer" 
                  style={{ background: `linear-gradient(to right, hsl(${h}, 0%, ${l * 100}%), hsl(${h}, 100%, ${l * 100}%))` }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{(s * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">L</span>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={l} 
                  onChange={(e) => handleHslChange({ l: Number(e.target.value) })} 
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, hsl(${h}, ${s * 100}%, 0%), hsl(${h}, ${s * 100}%, 50%), hsl(${h}, ${s * 100}%, 100%))` }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{(l * 100).toFixed(0)}%</span>
              </div>
            </>
          )}
          {colorModel === "RGB" && (
            <>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">R</span>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={r} 
                  onChange={(e) => handleRgbChange({ r: Number(e.target.value) })} 
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer" 
                  style={{ background: `linear-gradient(to right, rgb(0, ${g}, ${b}), rgb(255, ${g}, ${b}))` }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{r.toFixed(0)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">G</span>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={g} 
                  onChange={(e) => handleRgbChange({ g: Number(e.target.value) })} 
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer" 
                  style={{ background: `linear-gradient(to right, rgb(${r}, 0, ${b}), rgb(${r}, 255, ${b}))` }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{g.toFixed(0)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 text-xs sm:text-sm font-medium text-gray-700">B</span>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={b} 
                  onChange={(e) => handleRgbChange({ b: Number(e.target.value) })} 
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer" 
                  style={{ background: `linear-gradient(to right, rgb(${r}, ${g}, 0), rgb(${r}, ${g}, 255))` }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-900 w-8 sm:w-10 text-right">{b.toFixed(0)}</span>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Algorithm & Contrast - spans 2 columns on desktop */}
      <motion.div variants={slideUp} className="md:col-span-2 space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">ALGORITHM</label>
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center justify-between p-2 sm:p-3 bg-gray-100 rounded-md sm:rounded-lg border border-gray-200 shadow-xs sm:shadow-sm cursor-pointer"
            >
              <span className="text-sm sm:text-base font-medium text-gray-900 truncate">{algorithm}</span>
              <motion.div whileHover={{ scale: 1.1 }} className="text-gray-500">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">NAMING PATTERN</label>
            <motion.div 
              whileHover={{ y: -2 }}
              className="flex items-center justify-between p-2 sm:p-3 bg-gray-100 rounded-md sm:rounded-lg border border-gray-200 shadow-xs sm:shadow-sm cursor-pointer"
            >
              <span className="text-sm sm:text-base font-medium text-gray-900 truncate">{namingPattern}</span>
              <motion.div whileHover={{ scale: 1.1 }} className="text-gray-500">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">CONTRAST SHIFT</label>
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.span 
              whileTap={{ scale: 0.95 }}
              className="text-base sm:text-lg font-bold text-gray-900 bg-gray-100 px-2 sm:px-3 py-1 rounded-md min-w-[50px] sm:min-w-[60px] text-center"
            >
              {contrastShift.toFixed(2)}
            </motion.span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={contrastShift} 
              onChange={(e) => setContrastShift(parseFloat(e.target.value))} 
              className="w-full h-2 bg-gray-400 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
        </div>
      </motion.div>

      {/* Shade Count - centered on all screens */}
      <motion.div variants={slideUp} className="space-y-1 sm:space-y-2 text-center">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">SHADE COUNT</label>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShadeCount(Math.max(1, shadeCount - 1))} 
            className="p-1 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-xs sm:shadow-sm"
          >
            <MinusIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          </motion.button>
          <motion.span 
            key={shadeCount}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 w-8 sm:w-10"
          >
            {shadeCount}
          </motion.span>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShadeCount(shadeCount + 1)} 
            className="p-1 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-xs sm:shadow-sm"
          >
            <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ControlPanel;