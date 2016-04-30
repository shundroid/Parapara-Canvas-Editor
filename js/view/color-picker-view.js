function ColorPickerView(element) {
  this.element = element;
}

ColorPickerView.prototype.addPalette = function(color) {
  let palette;

  if (!isColor(color)) {
    throw new Error("不正な色が指定されました。:" + color);
  }

  palette = document.createElement("li");
  palette.style.backgroundColor = color;
  this.element.appendChild(palette);

  palette.addEventListener("click", event => {
    this.color = event.target.style.backgroundColor;
  });
};

function isColor(color) {
  const testElement = document.createElement("span");
  testElement.style.backgroundColor = color;

  return testElement.style.backgroundColor !== "";
}

module.exports = ColorPickerView;

