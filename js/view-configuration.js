const MenuView = require("./view/menu-view");
const ColorPickerView = require("./view/color-picker-view");

// Viewの統括を行う
function ViewConfiguration(element) {
  const defaultPalleteColors = ["red", "orange", "yellow", "lightgreen",
    "green", "skyblue", "blue", "purple", "black", "white"];

  this.menu = new MenuView(document.getElementById("menu"));

  this.colorPicker = new ColorPickerView(document.getElementById("menu-colors"));
  defaultPalleteColors
    .forEach(color => { this.colorPicker.addPalette(color); });
}

module.exports = ViewConfiguration;
