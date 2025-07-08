'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from '../Header';

// Default JSON content to show on page load
const defaultJson = `{
  "example": "This is a JSON Formatter",
  "features": [
    "Formatting",
    "Validation",
    "Syntax Highlighting",
    "Copy to Clipboard"
  ],
  "isValid": true,
  "indentation": 2
}`;

export default function JsonFormatterPage() {
  const [inputJson, setInputJson] = useState(defaultJson);
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  // Function to format the JSON
  const formatJson = () => {
    try {
      if (inputJson.trim() === '') {
        setError('Input is empty. Please enter some JSON.');
        setFormattedJson('');
        return;
      }
      const parsed = JSON.parse(inputJson);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setError('');
    } catch (e: any) {
      setError(`Invalid JSON: ${e.message}`);
      setFormattedJson('');
    }
  };

  // Function to copy the formatted JSON to the clipboard
  const copyToClipboard = () => {
    if (formattedJson && !error) {
      // Using a temporary textarea element for copying
      const textArea = document.createElement('textarea');
      textArea.value = formattedJson;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopySuccess('Copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000);
      } catch (err) {
        setCopySuccess('Failed to copy!');
      }
      document.body.removeChild(textArea);
    }
  };

  // Automatically format on initial load
  useEffect(() => {
    formatJson();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header tool="JSON Formatter" />

      {/* Main Content */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
        {/* Input Pane */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col bg-white"
        >
          <div className="p-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h2 className="font-semibold text-gray-700">Input</h2>
            <button
              onClick={formatJson}
              className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Format
            </button>
          </div>
          <textarea
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            className="w-full h-full flex-grow p-6 bg-transparent resize-none focus:outline-none font-mono text-sm leading-6 text-gray-800"
            aria-label="JSON Input"
            placeholder="Paste your JSON here..."
          />
        </motion.div>

        {/* Output Pane */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col bg-[#1e1e1e]"
        >
          <div className="p-3 border-b border-gray-700 bg-[#333333] flex justify-between items-center text-white">
            <h2 className="font-semibold">Formatted Output</h2>
            {formattedJson && !error && (
              <button
                onClick={copyToClipboard}
                className="px-4 py-1.5 bg-green-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {copySuccess ? copySuccess : 'Copy'}
              </button>
            )}
          </div>
          <div className="p-4 overflow-auto flex-grow relative">
            {error ? (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <p className="font-bold">Error</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : (
              <SyntaxHighlighter
                language="json"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: '100%',
                }}
                codeTagProps={{ style: { fontFamily: 'inherit' } }}
              >
                {formattedJson}
              </SyntaxHighlighter>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
