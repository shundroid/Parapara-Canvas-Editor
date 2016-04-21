var assert = require("power-assert");
var webdriver = require("selenium-webdriver");

var ColorPicker = require("./../js/color-picker");

var driver;

describe("ColorPicker", function () {
  it("has color attribute");
  it("has parent element");
  describe("#addColorUI", function () {
    before(function () {
      driver = new webdriver.Builder()
        .forBrowser("firefox")
        .usingServer("http://localhost:8080/wd/hub")
        .build();
      driver.getWindowHandle();
    });
    beforeEach(function() {
      
    })
    it("fails when color is assigned not CSS3 style color");
    it("has listener", function () {
      driver.get("http://localhost:8080/wd/hub/index.html").then(function () {
        var text = driver.findElement(webdriver.By.id("menu-frame-fields")).getText();
        assert(text === "hoge");
      });
    });
  });
});
