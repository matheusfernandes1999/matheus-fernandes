import { DownloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import ColorSwatch from "./ColorSwatch";

interface PaletteDisplayProps {
  palette: string[];
  namingPattern: string;
  paletteName: string;
  onGenerateName: () => void;
  isGeneratingName: boolean;
}

const PaletteDisplay = ({ palette, namingPattern, paletteName, onGenerateName, isGeneratingName }: PaletteDisplayProps) => {
  const shadeNames = namingPattern.split(',').map(s => s.trim());

  const generateSvg = () => {
    const rectWidth = 100;
    const rectHeight = 200;
    const svgWidth = palette.length * rectWidth;

    const rects = palette
      .map((color, index) => {
        const shadeName = shadeNames[index] || (index === 0 ? "50" : index * 100);
        const isLight = parseInt(color.substring(1, 3), 16) > 128;
        const textColor = isLight ? "#000000" : "#FFFFFF";

        return `
        <g transform="translate(${index * rectWidth}, 0)">
          <rect width="${rectWidth}" height="${rectHeight}" fill="${color}" />
          <text x="${rectWidth / 2}" y="40" font-family="sans-serif" font-size="16" fill="${textColor}" text-anchor="middle">${shadeName}</text>
          <text x="${rectWidth / 2}" y="70" font-family="sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" font-weight="bold">${color.toUpperCase()}</text>
        </g>
      `;
      })
      .join("");

    return `<svg width="${svgWidth}" height="${rectHeight}" viewBox="0 0 ${svgWidth} ${rectHeight}" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`;
  };

  const downloadFile = (content: string, fileName: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSvg = () => {
    const svgContent = generateSvg();
    downloadFile(svgContent, `${paletteName.replace(/\s+/g, '-')}.svg`, "image/svg+xml");
  };

  const handleDownloadJson = () => {
    const jsonContent = {
      name: paletteName,
      colors: palette.reduce((acc, color, index) => {
        const shadeName = shadeNames[index] || (index === 0 ? "50" : index * 100);
        acc[shadeName] = color.toUpperCase();
        return acc;
      }, {} as Record<string, string>)
    };

    downloadFile(JSON.stringify(jsonContent, null, 2), `${paletteName.replace(/\s+/g, '-')}.json`, "application/json");
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800">{paletteName}</h2>
            <button 
                onClick={onGenerateName} 
                disabled={isGeneratingName}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Generate new name"
            >
                <UpdateIcon className={isGeneratingName ? 'animate-spin' : ''} />
            </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadJson}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <DownloadIcon />
            <span>JSON</span>
          </button>
          <button
            onClick={handleDownloadSvg}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <DownloadIcon />
            <span>SVG</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-11 gap-2">
        {palette.map((color, index) => (
          <ColorSwatch
            key={index}
            hex={color}
            name={shadeNames[index] || (index === 0 ? "50" : (index * 100).toString())}
          />
        ))}
        {Array.from({ length: 11 - palette.length }).map((_, index) => (
          <div
            key={index}
            className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
          >
            EMPTY
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaletteDisplay;
