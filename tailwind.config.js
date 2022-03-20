module.exports = {

  //mode: "jit", // Build más rápido, 
  content: ["./src/*.vue", // Quita lo que no usamos
            "./src/*.ts", 
            "./src/components/*.vue",
            "./src/components/**/*.vue",
            "./src/views/*.vue"],
  darkMode: "class", // ya que estamos xd        
  extend: {
    fontSize: {
      "8xl": ["5.5rem", { lineHeight: "1" }],
      "9xl": ["6.5rem", { lineHeight: "1" }],
    },
    screens: {
      "3xl": "1600px",
      lg: "1080px",
      tl: "888px",
      sm: "680px",
    },
    colors: {
      // Material palette.
      "material-50": "#FAFAFA",
      "material-100": "#F5F5F5",
      "material-200": "#EEEEEE",
      "material-300": "#E0E0E0",
      "material-400": "#BDBDBD",
      "material-500": "#9E9E9E",
      "material-600": "#757575",
      "material-700": "#616161",
      "material-800": "#424242",
      "material-900": "#212121",

      // Colores más oscuros para el dark mode.
      "gray-750": "#263242",
      "gray-850": "#192338",
      "gray-950": "#0c111c",
      "gray-1000": "#0b101a",

      "purple-1000": "#38156e",
      "purple-1100":"#2b1054",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    padding: {
      "3.9": "0.95rem",
      "3.8": "0.9rem",
      "3.7": "0.89rem"
    },
    width: {
      "90": "22rem"
    }
  },
  variants: [],
  plugins: [],
};