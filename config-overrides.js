const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@/entities": path.resolve(__dirname, "src", "entities"),
    "@/shared": path.resolve(__dirname, "src", "shared"),
    "@/style": path.resolve(__dirname, "src", "style"),
    "@/publish": path.resolve(__dirname, "src", "publish"),
    "@/widgets": path.resolve(__dirname, "src", "widgets"),
    "@/features": path.resolve(__dirname, "src", "features"),
    "@/pages": path.resolve(__dirname, "src", "pages"),
  })
);