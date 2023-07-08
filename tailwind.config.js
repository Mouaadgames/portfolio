/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        'dark': {
          "primary": "#ffc24b",
          "primary-focus": "#cc9b3c",
          "primary-content": "#ffffff",
          "secondary": "#2365a9",
          "secondary-focus": "#184675",
          "secondary-content": "#b9b9b9",
          "accent": "#ffff00",
          "accent-focus": "#cccc00",
          "accent-content": "#ffffff",
          "neutral": "#d9d9d9",
          "neutral-focus": "#a5a5a5",
          "neutral-content": "#ffffff",
          "base-100": "#3d4451",
          "base-200": "#2a2e37",
          "base-300": "#16181d",
          "base-content": "#ebecf0",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f",
          "locked": "#848484"
        }
      },
      'light',
    ]
  }
}
// module.exports["important"] = "#header"