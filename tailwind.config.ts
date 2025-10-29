import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0F0F10",
        surface: "#1A1A1A",
        accent: {
          DEFAULT: "#6366F1",
          muted: "#818CF8"
        },
        muted: "#2A2A2B",
        border: "#2F2F30",
        success: "#22c55e",
        warning: "#eab308",
        danger: "#ef4444"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 4px 24px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
