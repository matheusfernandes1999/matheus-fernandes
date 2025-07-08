'use client';

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Header from "./Header";

const tools = [
  {
    name: "JSON Formatter",
    description: "Format and validate your JSON data with beautiful syntax highlighting.",
    link: "/ferramentas/json-formatter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-indigo-900/20 text-indigo-400",
    accentColor: "from-indigo-500"
  },
  {
    name: "Markdown Previewer",
    description: "Preview your Markdown files in real-time with live rendering.",
    link: "/ferramentas/markdown-previewer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-emerald-900/20 text-emerald-400",
    accentColor: "from-emerald-500"
  },
  {
    name: "Color Pallete Generator",
    description: "Advanced color picker with palette generation and contrast checking.",
    link: "/ferramentas/color-generator",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
      </svg>
    ),
    color: "bg-amber-900/20 text-amber-400",
    accentColor: "from-amber-500"
  },
  {
    name: "Image Compressor",
    description: "Optimize and reduce the size of your images directly in the browser.",
    link: "/ferramentas/image-compressor",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.783.425 2.447.982.664.557 1.16 1.262 1.448 2.092a48.738 48.738 0 0 1 0 5.694c-.288.83-.784 1.535-1.448 2.092-.664.557-1.48.93-2.447.982a49.52 49.52 0 0 1-5.312 0c-.967-.052-1.783-.425-2.447-.982a4.752 4.752 0 0 1-1.448-2.092 48.738 48.738 0 0 1 0-5.694c.288-.83.784-1.535 1.448-2.092.664-.557 1.48-.93 2.447.982ZM15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" />
        </svg>
    ),
    color: "bg-teal-900/20 text-teal-400",
    accentColor: "from-teal-500"
  },
  {
    name: "Converters",
    description: "Convert numbers and other useful information",
    link: "/ferramentas/converters",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path d="M1.5 1.5a3.375 3.375 0 0 0-3.375 3.375v14.25A3.375 3.375 0 0 0 1.5 22.5h14.25a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 15.75 1.5H1.5Z" transform="translate(4.5 0)" opacity=".2"/>
        <path d="M0 0a3.375 3.375 0 0 0-3.375 3.375v14.25A3.375 3.375 0 0 0 0 21h14.25A3.375 3.375 0 0 0 17.625 17.625V3.375A3.375 3.375 0 0 0 14.25 0H0Z" transform="translate(1.5 1.5)"/>
      </svg>
    ),
    color: "bg-violet-900/20 text-violet-400",
    accentColor: "from-violet-500"
  },
  {
    name: "CSS Gradient Generator",
    description: "Design linear and radial gradients with a live preview.",
    link: "/ferramentas/generators",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634h5.25c.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866s-.059-.605-.189-.866c-.108-.215-.395-.634-.936-.634h-5.25Z" clipRule="evenodd" />
      </svg>
    ),
    color: "bg-rose-900/20 text-rose-400",
    accentColor: "from-rose-500"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

type FloatingElement = {
  id: number;
  left: string;
  top: string;
  fontSize: string;
  opacity: number;
  y: number[];
  x: number[];
  rotate: number[];
  duration: number;
  char: string;
};

export default function FerramentasPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const techSymbols = ['{}', '[]', '</>', '#', '{}', '()', ';', '=>', '${}', '*'];

    const generateElements = () => {
      return [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        opacity: 0.1 + Math.random() * 0.2,
        y: [0, Math.random() * 100 - 50],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, Math.random() * 360],
        duration: Math.random() * 20 + 10,
        char: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      }));
    };
    
    setFloatingElements(generateElements());
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute text-gray-700 text-xl"
            style={{
              left: el.left,
              top: el.top,
              fontSize: el.fontSize,
              opacity: el.opacity
            }}
            animate={{
              y: el.y,
              x: el.x,
              rotate: el.rotate
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            {el.char}
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10">
        <Header tool="" />
        
        <div className="max-w-6xl mx-auto p-6 sm:p-12">
          {/* Hero Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Developer <span className="text-indigo-400">Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Essential utilities to streamline your development workflow
            </p>
          </motion.div>
          
          {/* Tools Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <Link
                  href={tool.link}
                  className="block h-full backdrop-blur-sm bg-gray-800/70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 overflow-hidden relative group"
                >
                  <div className="absolute inset-0 rounded-lg p-px bg-gradient-to-br from-transparent via-gray-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${tool.accentColor} to-transparent`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className={`p-3 rounded-lg ${tool.color} shadow-inner`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {tool.name}
                      </h2>
                      <p className="mt-2 text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 backdrop-blur-sm bg-gray-800/70 p-8 rounded-lg shadow-xl border border-gray-700/50"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">More Tools Coming Soon</h2>
            <div className="flex flex-wrap gap-3">
              {["Base64 Encoder", "Regex Tester", "SVG Optimizer", "CSS Minifier", "URL Parser", "JWT Debugger", "Timestamp Converter"].map((tool) => (
                <motion.span 
                  key={tool}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gray-700/50 text-sm rounded-full border border-gray-600/50 text-gray-200 shadow-inner hover:border-indigo-400/50 transition-all"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
