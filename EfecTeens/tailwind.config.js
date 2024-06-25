/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 20px 7px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const sizes = {
        'sm': '1px 1px 2px',
        'md': '2px 2px 4px',
        'lg': '3px 3px 6px',
        'xl': '4px 4px 8px',
        '2xl': '0px 0px 20px',
      };

      const colors = {
        'red': 'rgba(255, 0, 0, 0.5)',
        'green': 'rgba(0, 255, 150, 0.5)',
        'blue': 'rgba(0, 0, 255, 0.5)',
        'yellow': 'rgba(255, 255, 0, 0.5)',
        'purple': 'rgba(128, 0, 128, 0.5)'
      };

      const newUtilities = {};

      for (const size in sizes) {
        for (const color in colors) {
          newUtilities[`.text-shadow-${size}-${color}`] = {
            textShadow: `${sizes[size]} ${colors[color]}`,
          };
        }
      }

      newUtilities['.text-shadow-none'] = {
        textShadow: 'none',
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


