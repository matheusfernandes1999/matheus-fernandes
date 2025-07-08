// /app/ferramentas/image-compressor/page.tsx
// Make sure to install the required library first:
// npm install browser-image-compression

'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';
import Header from '../Header';

// Helper function to format file size
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export default function ImageCompressorPage() {
  // State for the original image file and its URL for preview
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);

  // State for the compressed image file and its URL for download/preview
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  
  // State for compression options and loading/error states
  const [options, setOptions] = useState({
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection from the input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalFile(file);
      setOriginalImageUrl(URL.createObjectURL(file));
      // Reset previous compression results
      setCompressedFile(null);
      setCompressedImageUrl(null);
      setError(null);
    }
  };

  // The core compression logic
  const handleCompress = useCallback(async () => {
    if (!originalFile) {
      setError("Por favor, selecione uma imagem primeiro.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log(`Starting compression with options:`, options);
      
      // Use the browser-image-compression library to compress the file
      const compressedBlob = await imageCompression(originalFile, options);
      
      // Create a new File object from the compressed blob
      const compressedFile = new File([compressedBlob], `compressed_${originalFile.name}`, {
        type: compressedBlob.type,
        lastModified: Date.now(),
      });

      setCompressedFile(compressedFile);
      setCompressedImageUrl(URL.createObjectURL(compressedFile));

    } catch (err) {
      console.error("Compression Error:", err);
      setError(`Ocorreu um erro durante a compressão: ${(err as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalFile, options]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header tool="Image Compressor" />
      <div className="max-w-4xl mx-auto p-8">
        
        {/* File Input and Options */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8">
          <div className="mb-4">
            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Selecione a Imagem</label>
            <input 
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 dark:file:bg-indigo-900/50 file:text-indigo-700 dark:file:text-indigo-300 hover:file:bg-indigo-100 dark:hover:file:bg-indigo-900"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="maxSizeMB" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tamanho Máx. (MB)</label>
              <input 
                id="maxSizeMB"
                type="number"
                value={options.maxSizeMB}
                onChange={(e) => setOptions(prev => ({...prev, maxSizeMB: Number(e.target.value)}))}
                className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="maxWidthOrHeight" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Largura/Altura Máx. (px)</label>
              <input 
                id="maxWidthOrHeight"
                type="number"
                value={options.maxWidthOrHeight}
                onChange={(e) => setOptions(prev => ({...prev, maxWidthOrHeight: Number(e.target.value)}))}
                className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleCompress}
              disabled={!originalFile || isLoading}
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Comprimindo...' : 'Comprimir Imagem'}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <div className="bg-red-100 dark:bg-red-900/50 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative mb-6 text-center" role="alert">{error}</div>}

        {/* Image Previews */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Original Image */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Original</h2>
            {originalImageUrl ? (
              <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Image src={originalImageUrl} alt="Original" width={500} height={500} className="rounded-lg object-contain w-full h-auto" />
                <p className="mt-4 text-center font-medium text-gray-700 dark:text-gray-300">
                  Tamanho: {originalFile ? formatBytes(originalFile.size) : 'N/A'}
                </p>
              </div>
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-600">
                <p className="text-gray-500">Aguardando imagem...</p>
              </div>
            )}
          </div>

          {/* Compressed Image */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Comprimida</h2>
            {compressedImageUrl ? (
              <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <Image src={compressedImageUrl} alt="Compressed" width={500} height={500} className="rounded-lg object-contain w-full h-auto" />
                <p className="mt-4 text-center font-medium text-green-600 dark:text-green-400">
                  Tamanho: {compressedFile ? formatBytes(compressedFile.size) : 'N/A'}
                </p>
                {originalFile && compressedFile && (
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-1">
                    Redução de {(((originalFile.size - compressedFile.size) / originalFile.size) * 100).toFixed(2)}%
                  </p>
                )}
                <div className="mt-4 text-center">
                  <a
                    href={compressedImageUrl}
                    download={compressedFile?.name}
                    className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors"
                  >
                    Baixar Imagem
                  </a>
                </div>
              </div>
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-400 dark:border-gray-600">
                {isLoading ? <p className="text-indigo-500">Processando...</p> : <p className="text-gray-500">Aguardando compressão...</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
