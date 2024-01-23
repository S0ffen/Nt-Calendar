const path = require("path");

module.exports = {
  entry: "./PureListOfEvents.js", // Ścieżka do twojego pliku
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Katalog docelowy
  },
};
