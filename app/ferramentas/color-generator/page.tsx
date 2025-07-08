'use client'
import { generateColorPalette } from "@/app/lib/colors";
import { useState } from "react";
import Header from "../Header";
import ControlPanel from "./components/ControlPanel";
import PaletteDisplay from "./components/PaletteDisplay";

// A list of hard-coded, creative palette names
const paletteNames = [
    "Mystic Twilight", "Silent Forest", "Crimson Peak", "Golden Meadow",
    "Arctic Dawn", "Desert Mirage", "Lavender Fields", "Coastal Breeze",
    "Urban Jungle", "Coral Bloom", "Shadow Grove", "Starlight Path",
    "Volcanic Ash", "Emerald Isle", "Royal Velvet", "Sunstone Ridge",
    "Frosted Berry", "Canyon Sunset", "Deep Ocean", "Autumn Whisper"
];

export default function Home() {
  const [color, setColor] = useState("#9588B9");
  const [algorithm, setAlgorithm] = useState("Tailwind CSS");
  const [namingPattern, setNamingPattern] = useState("50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950");
  const [contrastShift, setContrastShift] = useState(0.35);
  const [shadeCount, setShadeCount] = useState(11);
  const [paletteName, setPaletteName] = useState("Color");

  const palette = generateColorPalette(color, shadeCount, contrastShift);

  // Selects a random name from the hard-coded list
  const generateRandomPaletteName = () => {
    const randomIndex = Math.floor(Math.random() * paletteNames.length);
    setPaletteName(paletteNames[randomIndex]);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header tool={"Color Generator"} />
      <main className="container mx-auto px-4 py-8">
        <div className="rounded-2xl  w-full py-4">
          <ControlPanel
            color={color}
            setColor={setColor}
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            namingPattern={namingPattern}
            setNamingPattern={setNamingPattern}
            contrastShift={contrastShift}
            setContrastShift={setContrastShift}
            shadeCount={shadeCount}
            setShadeCount={setShadeCount}
          />
        </div>

        <PaletteDisplay 
          palette={palette}
          namingPattern={namingPattern}
          paletteName={paletteName}
          onGenerateName={generateRandomPaletteName} 
          isGeneratingName={true}        
        />
      </main>
    </div>
  );
}
