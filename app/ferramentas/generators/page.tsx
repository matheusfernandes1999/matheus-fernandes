// /app/ferramentas/css-generators/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../Header'; // Assuming Header is in a parent directory

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

import type { Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 }
  },
};

// --- Helper Component for a single slider control ---
const SliderControl = ({ label, value, onChange, min, max, unit = 'px' }: { label: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, min: number, max: number, unit?: string }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <span className="px-2 py-1 text-xs bg-gray-700 rounded-md">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb"
    />
  </div>
);

// --- CSS Shadow Generator Component ---
const ShadowGenerator = () => {
    const [offsetX, setOffsetX] = useState(10);
    const [offsetY, setOffsetY] = useState(10);
    const [blurRadius, setBlurRadius] = useState(20);
    const [spreadRadius, setSpreadRadius] = useState(5);
    const [color, setColor] = useState('#000000');
    const [opacity, setOpacity] = useState(40);
    const [isCopied, setIsCopied] = useState(false);

    const shadowValue = useMemo(() => {
        const rgbaColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity / 100})`;
        return `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${rgbaColor}`;
    }, [offsetX, offsetY, blurRadius, spreadRadius, color, opacity]);

    const handleCopy = () => {
        navigator.clipboard.writeText(`box-shadow: ${shadowValue};`);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-2xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-100 mb-5">Box-Shadow Generator</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-4">
                        <SliderControl label="Offset X" value={offsetX} onChange={(e) => setOffsetX(Number(e.target.value))} min={-50} max={50} />
                        <SliderControl label="Offset Y" value={offsetY} onChange={(e) => setOffsetY(Number(e.target.value))} min={-50} max={50} />
                        <SliderControl label="Blur Radius" value={blurRadius} onChange={(e) => setBlurRadius(Number(e.target.value))} min={0} max={100} />
                        <SliderControl label="Spread Radius" value={spreadRadius} onChange={(e) => setSpreadRadius(Number(e.target.value))} min={-50} max={50} />
                        <SliderControl label="Opacity" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} min={0} max={100} unit="%" />
                        <div>
                            <label className="text-sm font-medium text-gray-400">Color</label>
                            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 p-1 mt-1 bg-gray-700 border border-gray-600 rounded-md cursor-pointer" />
                        </div>
                    </div>
                    {/* Preview */}
                    <div className="flex items-center justify-center bg-gray-700/50 rounded-lg p-4">
                        <div className="w-32 h-32 bg-indigo-500 rounded-xl" style={{ boxShadow: shadowValue }}></div>
                    </div>
                </div>
            </div>
            {/* Code Output */}
            <div className="bg-gray-900/70 p-4">
                <pre className="text-sm text-rose-300 whitespace-pre-wrap break-all">box-shadow: {shadowValue};</pre>
                <button onClick={handleCopy} className="w-full mt-3 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                    {isCopied ? 'Copied!' : 'Copy CSS'}
                </button>
            </div>
        </div>
    );
};

// --- CSS Gradient Generator Component ---
const GradientGenerator = () => {
    const [type, setType] = useState('linear');
    const [angle, setAngle] = useState(90);
    const [color1, setColor1] = useState('#1D4ED8');
    const [color2, setColor2] = useState('#DB2777');
    const [isCopied, setIsCopied] = useState(false);

    const gradientValue = useMemo(() => {
        if (type === 'linear') {
            return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
        }
        return `radial-gradient(circle, ${color1}, ${color2})`;
    }, [type, angle, color1, color2]);

    const handleCopy = () => {
        navigator.clipboard.writeText(`background: ${gradientValue};`);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-2xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-100 mb-5">Gradient Generator</h2>
                <div className="space-y-4">
                    {/* Controls */}
                    <div>
                        <label className="text-sm font-medium text-gray-400">Type</label>
                        <div className="flex gap-2 mt-1">
                            <button onClick={() => setType('linear')} className={`w-full py-2 rounded-md text-sm ${type === 'linear' ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>Linear</button>
                            <button onClick={() => setType('radial')} className={`w-full py-2 rounded-md text-sm ${type === 'radial' ? 'bg-indigo-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>Radial</button>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="text-sm font-medium text-gray-400">Color 1</label>
                            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-full h-10 p-1 mt-1 bg-gray-700 border border-gray-600 rounded-md cursor-pointer" />
                        </div>
                        <div className="w-1/2">
                            <label className="text-sm font-medium text-gray-400">Color 2</label>
                            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-full h-10 p-1 mt-1 bg-gray-700 border border-gray-600 rounded-md cursor-pointer" />
                        </div>
                    </div>
                    {type === 'linear' && (
                        <SliderControl label="Angle" value={angle} onChange={(e) => setAngle(Number(e.target.value))} min={0} max={360} unit="deg" />
                    )}
                    {/* Preview */}
                    <div className="w-full h-40 rounded-lg" style={{ background: gradientValue }}></div>
                </div>
            </div>
            {/* Code Output */}
            <div className="bg-gray-900/70 p-4 mt-4">
                <pre className="text-sm text-rose-300 whitespace-pre-wrap break-all">background: {gradientValue};</pre>
                <button onClick={handleCopy} className="w-full mt-3 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                    {isCopied ? 'Copied!' : 'Copy CSS'}
                </button>
            </div>
        </div>
    );
};


export default function CssGeneratorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style jsx global>{`
        .range-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #6366f1;
          border-radius: 50%;
          cursor: pointer;
        }
        .range-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #6366f1;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_70%_200px,#1e293b,transparent)] z-0"
        aria-hidden="true"
      />
      
      <div className="relative z-10">
        <Header tool="CSS Generators" />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-indigo-400">
              CSS Generators
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Visually create and customize complex CSS properties.
            </p>
          </motion.div>

          {/* Generators Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cardVariants}><ShadowGenerator /></motion.div>
            <motion.div variants={cardVariants}><GradientGenerator /></motion.div>
          </motion.div>

        </main>
      </div>
    </div>
  );
}
