import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export type ThemePalette = "ocean" | "emerald" | "crimson" | "amber";

const MODE_STORAGE_KEY = "portfolio-theme";
const PALETTE_STORAGE_KEY = "portfolio-palette";
const PALETTES: ThemePalette[] = ["ocean", "emerald", "crimson", "amber"];

function applyTheme(mode: ThemeMode, palette: ThemePalette) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
  root.dataset["palette"] = palette;
  root.style.colorScheme = mode;
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [palette, setPaletteState] = useState<ThemePalette>("ocean");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let initialMode: ThemeMode = "dark";
    let initialPalette: ThemePalette = "ocean";
    try {
      const storedMode = sessionStorage.getItem(MODE_STORAGE_KEY);
      const storedPalette = sessionStorage.getItem(PALETTE_STORAGE_KEY);
      if (storedMode === "light" || storedMode === "dark") {
        initialMode = storedMode;
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        initialMode = "light";
      }
      if (PALETTES.includes(storedPalette as ThemePalette)) {
        initialPalette = storedPalette as ThemePalette;
      }
    } catch {
      /* sessionStorage unavailable */
    }
    setTheme(initialMode);
    setPaletteState(initialPalette);
    applyTheme(initialMode, initialPalette);
    setMounted(true);
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setTheme(next);
    applyTheme(next, palette);
    try {
      sessionStorage.setItem(MODE_STORAGE_KEY, next);
    } catch {
      /* sessionStorage unavailable */
    }
  }, [palette]);

  const setPalette = useCallback((next: ThemePalette) => {
    setPaletteState(next);
    applyTheme(theme, next);
    try {
      sessionStorage.setItem(PALETTE_STORAGE_KEY, next);
    } catch {
      /* sessionStorage unavailable */
    }
  }, [theme]);

  return { theme, palette, setPalette, setMode, mounted };
}
