/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark: "#091057",   // Ana koyu renk
        primaryBlue: "#024CAA",   // Ana mavi renk
        accentOrange: "#EC8305",  // Vurgulayıcı turuncu
        lightGray: "#DBD3D3",     // Açık gri
      },
    },
  },
  plugins: [],
};
