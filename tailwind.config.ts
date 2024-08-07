import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-pattern': "url('/blue.jpg')",
        'paris': "url('/paris.jpg')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1E1E1E",
          "secondary": "#2A66B7",
          "accent": "#E64C3C",
          "neutral": "#3d4451",
          "base-100": "#D9D9D9",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
  
};

export default config;
