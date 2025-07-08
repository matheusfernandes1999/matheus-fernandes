// /app/ferramentas/converters/page.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Header from '../Header'; // Assuming Header is in a parent directory

// --- Animation Variants ---
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 }
  },
};

// --- Timestamp Converter Component ---
const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState<string>(Math.floor(Date.now() / 1000).toString());
  const [humanDate, setHumanDate] = useState<string>('');
  const [timezones, setTimezones] = useState<string[]>([]);
  const [selectedTz, setSelectedTz] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Set default timezone and populate timezone list on client mount
    const defaultTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezones(Intl.supportedValuesOf('timeZone'));
    setSelectedTz(defaultTz);
  }, []);

  useEffect(() => {
    if (selectedTz) {
      handleTimestampToDate(timestamp);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTz]);

  const handleTimestampToDate = (ts: string) => {
    setTimestamp(ts);
    setError('');
    if (!/^\d+$/.test(ts)) {
      setError('Timestamp must be a number.');
      setHumanDate('');
      return;
    }
    try {
      const date = new Date(parseInt(ts, 10) * 1000);
      if (isNaN(date.getTime())) {
        setError('Invalid timestamp value.');
        setHumanDate('');
        return;
      }
      const formatter = new Intl.DateTimeFormat('en-CA', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
        timeZone: selectedTz,
      });
      setHumanDate(formatter.format(date).replace(',', ''));
    } catch (e) {
      setError('Could not convert timestamp.');
      setHumanDate('');
    }
  };

  const handleDateToTimestamp = (dateStr: string) => {
    setHumanDate(dateStr);
    setError('');
    try {
      // Add seconds if they are missing for better parsing
      const normalizedDate = dateStr.length === 16 ? `${dateStr}:00` : dateStr;
      const date = new Date(normalizedDate);
       if (isNaN(date.getTime())) {
        setError('Invalid date format.');
        setTimestamp('');
        return;
      }
      setTimestamp(Math.floor(date.getTime() / 1000).toString());
    } catch (e) {
       setError('Could not convert date.');
       setTimestamp('');
    }
  }

  return (
    <div className="h-full group relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-lg overflow-hidden">
       <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-sky-900/30 text-sky-300 blur-3xl opacity-60" aria-hidden="true" />
       <h2 className="text-2xl font-bold text-gray-100 mb-4">Timestamp Converter</h2>
       <div className="space-y-4">
          <div>
            <label htmlFor="timestamp" className="block text-sm font-medium text-sky-300">Unix Timestamp</label>
            <input type="text" id="timestamp" value={timestamp} onChange={(e) => handleTimestampToDate(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500"/>
          </div>
          <div>
            <label htmlFor="human-date" className="block text-sm font-medium text-sky-300">Human-Readable Date</label>
            <input type="datetime-local" id="human-date" value={humanDate} onChange={(e) => handleDateToTimestamp(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500"/>
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-sky-300">Timezone</label>
            <select id="timezone" value={selectedTz} onChange={e => setSelectedTz(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md focus:ring-sky-500 focus:border-sky-500">
              {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
            </select>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
       </div>
    </div>
  )
}

// --- Color Converter Component ---
const ColorConverter = () => {
    const [color, setColor] = useState('#ffffff');
    const [hex, setHex] = useState('#ffffff');
    const [rgb, setRgb] = useState('rgb(255, 255, 255)');
    const [hsl, setHsl] = useState('hsl(0, 0%, 100%)');

    const handleColorChange = (value: string) => {
        setColor(value);
        try {
            // This is a simple parser, a robust library like 'color' or 'tinycolor2' would be better for production
            if (value.startsWith('#')) {
                setHex(value);
                const r = parseInt(value.slice(1, 3), 16);
                const g = parseInt(value.slice(3, 5), 16);
                const b = parseInt(value.slice(5, 7), 16);
                setRgb(`rgb(${r}, ${g}, ${b})`);
                setHsl(rgbToHsl(r, g, b));
            } else if (value.startsWith('rgb')) {
                const [r, g, b] = value.match(/\d+/g)!.map(Number);
                setRgb(value);
                setHex(rgbToHex(r, g, b));
                setHsl(rgbToHsl(r, g, b));
            } else if (value.startsWith('hsl')) {
                const [h, s, l] = value.match(/\d+/g)!.map(Number);
                setHsl(value);
                const {r, g, b} = hslToRgb(h, s, l);
                setRgb(`rgb(${r}, ${g}, ${b})`);
                setHex(rgbToHex(r, g, b));
            }
        } catch (e) {
            // Ignore errors for simplicity
        }
    };
    
    // Conversion helpers
    const rgbToHex = (r:number, g:number, b:number) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    const rgbToHsl = (r:number, g:number, b:number) => { r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b); let h=0, s=0, l = (max + min) / 2; if (max !== min) { const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min); switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; } h /= 6; } return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`; };
    const hslToRgb = (h:number, s:number, l:number) => { h /= 360; s /= 100; l /= 100; let r, g, b; if (s === 0) { r = g = b = l; } else { const hue2rgb = (p:number, q:number, t:number) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q - p) * 6 * t; if (t < 1/2) return q; if (t < 2/3) return p + (q - p) * (2/3 - t) * 6; return p; }; const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q; r = hue2rgb(p, q, h + 1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1/3); } return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }; };

    return (
        <div className="h-full group relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-lg overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-rose-900/30 text-rose-300 blur-3xl opacity-60" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Color Converter</h2>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <input type="color" value={hex} onChange={(e) => handleColorChange(e.target.value)} className="w-16 h-16 p-1 bg-transparent border-none cursor-pointer" />
                    <div className="w-full space-y-2">
                        <div>
                            <label htmlFor="hex" className="block text-sm font-medium text-rose-300">HEX</label>
                            <input type="text" id="hex" value={hex} onChange={(e) => handleColorChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="rgb" className="block text-sm font-medium text-rose-300">RGB</label>
                    <input type="text" id="rgb" value={rgb} onChange={(e) => handleColorChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                </div>
                <div>
                    <label htmlFor="hsl" className="block text-sm font-medium text-rose-300">HSL</label>
                    <input type="text" id="hsl" value={hsl} onChange={(e) => handleColorChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                </div>
            </div>
        </div>
    );
};

// --- CSS Unit Converter Component ---
const CSSUnitConverter = () => {
    const [baseSize, setBaseSize] = useState(16);
    const [px, setPx] = useState('16');
    const [rem, setRem] = useState('1');
    const [em, setEm] = useState('1');
    const [pt, setPt] = useState('12');

    const handleBaseChange = (value: number) => {
        setBaseSize(value);
        handlePxChange(px, value);
    };

    const handlePxChange = (value: string, currentBase = baseSize) => {
        setPx(value);
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            setRem((numValue / currentBase).toFixed(3));
            setEm((numValue / currentBase).toFixed(3));
            setPt((numValue * 0.75).toFixed(3));
        }
    };
    
    const handleRemChange = (value: string) => {
        setRem(value);
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            const pxValue = numValue * baseSize;
            setPx(pxValue.toFixed(3));
            setEm(value);
            setPt((pxValue * 0.75).toFixed(3));
        }
    };

    return (
        <div className="h-full group relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-lg overflow-hidden">
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-lime-900/30 text-lime-300 blur-3xl opacity-60" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-100 mb-4">CSS Unit Converter</h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="base-size" className="block text-sm font-medium text-lime-300">Base Font Size (px)</label>
                    <input type="number" id="base-size" value={baseSize} onChange={(e) => handleBaseChange(parseFloat(e.target.value))} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="px" className="block text-sm font-medium text-lime-300">Pixels (px)</label>
                        <input type="number" id="px" value={px} onChange={(e) => handlePxChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="rem" className="block text-sm font-medium text-lime-300">REM</label>
                        <input type="number" id="rem" value={rem} onChange={(e) => handleRemChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="em" className="block text-sm font-medium text-lime-300">EM</label>
                        <input type="number" id="em" value={em} onChange={(e) => handleRemChange(e.target.value)} className="w-full p-2 mt-1 bg-gray-700/50 border border-gray-600 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="pt" className="block text-sm font-medium text-lime-300">Points (pt)</label>
                        <input type="number" id="pt" value={pt} readOnly className="w-full p-2 mt-1 bg-gray-900/50 border border-gray-700 rounded-md cursor-not-allowed"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default function ConvertersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,#1e293b,transparent)] z-0"
        aria-hidden="true"
      />
      
      <div className="relative z-10">
        <Header tool="Converters" />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-indigo-400">
              Data & Unit Converters
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              A collection of essential tools for converting data formats, units, and more.
            </p>
          </motion.div>

          {/* Converters Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={cardVariants}><TimestampConverter /></motion.div>
            <motion.div variants={cardVariants}><ColorConverter /></motion.div>
            <motion.div variants={cardVariants} className="lg:col-span-2 xl:col-span-1"><CSSUnitConverter /></motion.div>
          </motion.div>

        </main>
      </div>
    </div>
  );
}
