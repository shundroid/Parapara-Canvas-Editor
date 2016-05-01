const SequencePanel = require("./sequence-panel");
const Publisher = require("./publisher");

function DrawingConfiguration() {
  this.eventPublisher = new Publisher();

  this.defaultPalleteColors = [];
  this.color = "";
  this.lineWidth = 0;

  this.sequencePanel = new SequencePanel(document.getElementById("thumbnails"));
}

// これをコンストラクタに入れないのは、
// ViewManager（など）で、subscribeした後に、
// publishをしたいため。
DrawingConfiguration.prototype.setDefaultValues = function() {
  this.defaultPalleteColors = ["red", "orange", "yellow", "lightgreen",
    "green", "skyblue", "blue", "purple", "black", "white"];
  this.eventPublisher.publish("defaultPalleteColors", this.defaultPalleteColors);

  this.color = "red";
  this.eventPublisher.publish("color", this.color);

  this.lineWidth = 10;
  this.eventPublisher.publish("lineWidth", this.lineWidth);
};
module.exports = DrawingConfiguration;
