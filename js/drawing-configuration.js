const ColorPickerPanel = require("./color-picker-panel");
const LineWidthPickerPanel = require("./line-width-picker-panel");
const SequencePanel = require("./sequence-panel");

// framesControllerから触られる部分のみを定義する
function DrawingConfiguration() {
  this.colorPickerPanel =
    new ColorPickerPanel("red");
  this.lineWidthPickerPanel =
    new LineWidthPickerPanel(document.getElementById("menu-line-width"), 10);

  this.sequencePanel = new SequencePanel(document.getElementById("thumbnails"));
}

module.exports = DrawingConfiguration;
