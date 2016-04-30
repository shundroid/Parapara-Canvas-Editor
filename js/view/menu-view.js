const stateList = require("./../state-list");

function MenuView(element) {
  this.element = element;

  stateList.frameState.subscribe((newState) => {
    this.toggleOpenMenuButton(newState === "idling");
  });

  document.getElementById("menu-side-btn")
    .addEventListener("click", () => {
      this.toggleMenu();
    });
}

MenuView.prototype.toggleMenu = function() {
  this.element.classList.toggle("menu-open");
};

MenuView.prototype.openMenu = function() {
  this.element.classList.add("menu-open");
};

MenuView.prototype.hideMenu = function() {
  this.element.classList.remove("menu-open");
};

MenuView.prototype.toggleOpenMenuButton = function(isVisible) {
  const sidebtn = document.getElementById("menu-side-btn");
  if (isVisible) {
    sidebtn.animate(
      [{ transform: "translate(-10px)" }, { transform: "translate(0px)" }],
      { direction: "alternate", duration: 100 });
  }
  sidebtn.style.display = isVisible ? "block" : "none";
};
module.exports = MenuView;
