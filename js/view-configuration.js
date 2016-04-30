const MenuView = require("./view/menu-view.js");

// Viewの統括を行う
function ViewConfiguration(element) {
  this.menu = new MenuView(document.getElementById("menu"));
}

module.exports = ViewConfiguration;
