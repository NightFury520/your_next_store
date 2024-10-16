import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container :{
      center:true,
      padding:'2rem',
      screens:{
        "2xl":"1200px"
      }
    },
    extend: {
      
      colors: {
        primary:'rgb(245,245,245)' ,
        background: "var(--background)",
        foreground: "var(--foreground)",
        life : '#0f172a'
      },
    screens : {
      "lg" : "1000px",
      "md" : "770px",
      "sm" : "640px"
    }
    },
  },
  plugins: [],
});
export default config;
