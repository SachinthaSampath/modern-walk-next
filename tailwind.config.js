/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./ui-core/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        mwnormal: "0px 0px 30px 0px rgba(0, 25, 72, 0.15)",
        mwhover: "0px 10px 40px 0px rgba(0, 25, 72, 0.25)",
        mwselected: "0px 5px 30px 0px rgba(0, 25, 72, 0.25)",
      },
      colors: {
        //modern walk colors
        womens: "rgb(var(--mw-womens)/<alpha-value>)",
        mens: "rgb(var(--mw-mens)/<alpha-value>)",

        mwactive: "var(--mw-active)",

        mwprimarynormal: "var(--primary-normal)",
        mwprimaryhover: "var(--primary-hover)",
        mwprimaryselected: "var(--primary-selected)",
        mwprimaryinverse: "var(--primary-inverse)",
        mwprimarydisabled: "var(--primary-disabled)",
        mwprimaryinversehover: "var(--primary-inverse-hover)",
        mwprimaryclick: "var(--primary-click)",

        mwtypomain: "var(--typo-main)",
        mwtypoactive: "var(--typo-active)",
        mwtypoborderdark: "var(--typo-border-dark)",
        mwtypoinactive: "var(--typo-inactive)",
        mwtypoborderlight: "var(--typo-border-light)",

        mwbackgroundgrey: "var(--background-grey)",
        mwbackgroundcontrast: "var(--background-contrast)",
        mwbackgroundwhite: "var(--background-white)",

        mwlinkblue: "var(--link-blue)",
        mwlinkhover: "var(--link-hover)",
        mwlinkactive: "var(--link-active)",
        mwlinkdisabled: "var(--link-disabled)",

        mwdangered: "var(--danger-red)",
        mwdangerglow: "var(--danger-glow)",
        mwdangerinactive: "var(--danger-inactive)",
        mwdangerdisabled: "var(--danger-disabled)",
        mwdangerhover: "var(--danger-hover)",
        mwdangeractive: "var(--danger-active)",

        // lightest and darkest variations of tailwind color pallet
        lightest: {
          slate: "#f8fafc",
          gray: "#f9fafb",
          zinc: "#fafafa",
          neutral: "#fafafa",
          stone: "#fafaf9",
          red: "#fef2f2",
          orange: "#fff7ed",
          amber: "#fffbeb",
          yellow: "#fefce8",
          lime: "#f7fee7",
          green: "#f0fdf4",
          emerald: "#ecfdf5",
          teal: "#f0fdfa",
          cyan: "#ecfeff",
          sky: "#f0f9ff",
          blue: "#eff6ff",
          indigo: "#eef2ff",
          violet: "#f5f3ff",
          purple: "#faf5ff",
          fuchsia: "#fdf4ff",
          pink: "#fdf2f8",
          rose: "#fff1f2",
        },
        darkest: {
          slate: "#020617",
          gray: "#030712",
          zinc: "#09090b",
          neutral: "#0a0a0a",
          stone: "#0c0a09",
          red: "#450a0a",
          orange: "#431407",
          amber: "#451a03",
          yellow: "#422006",
          lime: "#1a2e05",
          green: "#052e16",
          emerald: "#022c22",
          teal: "#042f2e",
          cyan: "#083344",
          sky: "#082f49",
          blue: "#172554",
          indigo: "#1e1b4b",
          violet: "#2e1065",
          purple: "#3b0764",
          fuchsia: "#4a044e",
          pink: "#500724",
          rose: "#4c0519",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
