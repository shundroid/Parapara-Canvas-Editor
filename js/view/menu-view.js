import eventPublisher from "./../publisher";

function MenuView() {
  this.isOpen = false;
  this.isCollapsibleButtonPauseMode = false;
  this.updateCollapsibleButtonMode();
  eventPublisher.subscribe("drawState", (newState) => {
    this.setCollapsibleButtonVisible(newState === "idling");
    if (this.isOpen) {
      this.isOpen = false;
      this.toggleMenu(false);
    }
  });

  eventPublisher.subscribe("isPlaying", (isPlaying) => {
    this.isCollapsibleButtonPauseMode = isPlaying;
    this.updateCollapsibleButtonMode();
    if (isPlaying) {
      this.isOpen = false;
      this.toggleMenu(false);
    }
  });
  document.getElementById("menu-collapsible-btn")
    .addEventListener("click", () => {
      if (this.isCollapsibleButtonPauseMode) {
        eventPublisher.publish("isPlaying", false);
      } else {
        this.toggleMenu(this.isOpen);
        this.isOpen = !this.isOpen;
        this.toggleMenu(this.isOpen);
      }
    });
}

MenuView.prototype.toggleMenu = function(isOpen) {
  const menu = document.getElementById("menu");
  const direction = isOpen ? "alternate" : "alternate-reverse";
  menu.animate(
      [{ transform: "translate(-20vw)" }, { transform: "translate(0px)" }],
      { direction: direction, duration: 250, fill: "both", easing: "ease-in-out"
    });
};

// collapsibleButton : メニューの右側にあるボタン
MenuView.prototype.setCollapsibleButtonVisible = function(visible) {
  const collapsibleButton = document.getElementById("menu-collapsible-btn");
  const direction = visible ? "alternate" : "alternate-reverse";
  collapsibleButton.animate(
    [{ transform: "translate(-30px)" }, { transform: "translate(0px)" }],
    { direction: direction, duration: 100, fill: "both" });
};

MenuView.prototype.updateCollapsibleButtonMode = function() {
  const collapsibleButton = document.getElementById("menu-collapsible-btn");
  if (this.isCollapsibleButtonPauseMode) {
    collapsibleButton.innerHTML = "<i class=\"fa fa-pause\"></i>";
  } else {
    collapsibleButton.innerHTML = "<i class=\"fa fa-cog\"></i>";
  }
};
export default MenuView;
