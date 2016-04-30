const FramesController = require("./frames-controller");
const DrawingConfiguration = require("./drawing-configuration");
const ViewConfiguration = require("./view-configuration");

// webpack
require("./../css/style.css");
require("font-awesome");
require("web-animations-js");

let framesController;
let drawingConfiguration;
let viewConfiguration;

document.addEventListener("DOMContentLoaded", function() {
  const firstFrameId = 0;
  const firstCanvasId = 0;

  drawingConfiguration = new DrawingConfiguration();

  framesController = new FramesController(
    document.getElementById("frames"),
    drawingConfiguration);
  // new Frame() に対する引数は、frameId でなく canvasId を渡すので、変数にしない
  // Todo: frameId と canvasId の統合
  framesController.append(firstFrameId, firstCanvasId);
  framesController.setCurrentFrame(firstFrameId);

  viewConfiguration = new ViewConfiguration(document.getElementById("menu"));
});

