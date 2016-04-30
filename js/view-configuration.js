const stateList = require("./state-list");

// Viewの統括とMenuの管理を行う
function ViewConfiguration(element) {
  this.element = element;

  stateList.frameState.subscribe((newState) => {
    this.toggleOpenViewConfigurationButton(newState === "idling");
  });

  document.getElementById("menu-side-btn")
    .addEventListener("click", () => {
      this.toggleMenu();
    });
}

ViewConfiguration.prototype.toggleMenu = function() {
  this.element.classList.toggle("menu-open");
};

ViewConfiguration.prototype.openMenu = function() {
  this.element.classList.add("menu-open");
};

ViewConfiguration.prototype.hideMenu = function() {
  this.element.classList.remove("menu-open");
};

ViewConfiguration.prototype.toggleOpenMenu = function(isVisible) {
  const sidebtn = document.getElementById("menu-side-btn");
  if (isVisible) {
    sidebtn.animate(
      [{ transform: "translate(-10px)" }, { transform: "translate(0px)" }],
      { direction: "alternate", duration: 100 });
  }
  sidebtn.style.display = isVisible ? "block" : "none";
};
module.exports = ViewConfiguration;
