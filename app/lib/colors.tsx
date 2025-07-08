// Basic color manipulation functions.
// A more robust library like 'color' or 'tinycolor2' would be used in a real application.

export interface RGB { r: number; g: number; b: number; }
export interface HSL { h: number; s: number; l: number; }

/**
 * Converts a HEX color string to an RGB object.
 * Handles 3 and 6 digit hex codes.
 * Returns black for invalid or incomplete hex strings.
 */
export function hexToRgb(hex: string): RGB {
  let r = NaN, g = NaN, b = NaN;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }

  // Return black if parsing failed
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return { r: 0, g: 0, b: 0 };
  }

  return { r, g, b };
}

/**
 * Converts RGB color values to a HEX string.
 */
export function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (c: number) => {
        const hex = Math.round(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Converts an RGB color object to an HSL object.
 */
export function rgbToHsl({ r, g, b }: RGB): HSL {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: h * 360, s, l };
}

/**
 * Converts an HSL color object to an RGB object.
 */
export function hslToRgb({ h, s, l }: HSL): RGB {
    let r, g, b;
    h /= 360;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

/**
 * Converts a HEX color string to an HSL object.
 */
export function hexToHsl(hex: string): HSL {
    const rgb = hexToRgb(hex);
    return rgbToHsl(rgb);
}

/**
 * Converts HSL color values to a HEX string.
 */
export function hslToHex(h: number, s: number, l: number): string {
    const { r, g, b } = hslToRgb({ h, s, l });
    return rgbToHex(r, g, b);
}

/**
 * Generates a color palette based on a base color.
 */
export function generateColorPalette(
  baseColor: string,
  count: number,
  contrast: number
): string[] {
  const { h, s } = hexToHsl(baseColor);
  const palette: string[] = [];
  
  // This is a simplified palette generation logic.
  // A real implementation would be more complex.
  const step = (1 - contrast) / (count -1);

  for (let i = 0; i < count; i++) {
    const lightness = (i * step) + (contrast / 2);
    palette.push(hslToHex(h, s, Math.min(1, Math.max(0, lightness))));
  }

  return palette.sort((a,b) => hexToHsl(a).l - hexToHsl(b).l);
}
