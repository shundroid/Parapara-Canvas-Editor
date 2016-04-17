var Frame = require("./frame");

// frame の追加・削除と、DOM上でのCanvasの追加・削除を連動させる
function FramesController(elem) {
  this.element = elem;
  this.frames = [];
  this.currentFrameId = 0;
}

FramesController.prototype.append = function(id, frame) {
  if (!(frame instanceof Frame)) {
    throw new Error("FrameServerに追加しようとしたFrameは不正です。:" + frame);
  }
  // 今はいいが、あとで splice に変える
  this.frames.push(frame);
};

FramesController.prototype.remove = function() {
  
};

FramesController.prototype.setCurrentFrame = function(frameId) {
  this.currentFrameId = frameId;
  // Todo: ここでUI（display: blockのCanvasの切り替え）もやっていいのか
  if (document.querySelector(".current-canvas") !== null) {
    document.querySelector(".current-canvas").classList.remove("current-canvas");
  }       
  this.frames[this.currentFrameId].paraparaCanvas.canvasElement.classList.add("current-canvas");
}

module.exports = FramesController;