/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-at-center-top":
          "radial-gradient(ellipse at center top, var(--tw-gradient-stops))",
      },
      colors: {
        "background-to": "#14173A",
        "background-from": "#1F3656",
        "scissors-from": "#ec9e0e",
        "scissors-to": "#eca922",
        "paper-from": "#4865f4",
        "paper-to": "#5671f5",
        "rock-from": "hsl(349, 71%, 52%)",
        "rock-to": "hsl(349, 70%, 56%)",
        "lizard-from": "hsl(261, 73%, 60%)",
        "lizard-to": "hsl(261, 72%, 63%)",
        "cyan-from": "hsl(189, 59%, 53%)",
        "cyan-to": "hsl(189, 58%, 57%)",
      },
    },
  },
  plugins: [],
};
