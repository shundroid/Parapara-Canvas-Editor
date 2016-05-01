// Publisherは、データを保存せず、外部へ変更を知らせる機能に絞る。
function Publisher() {
  this.observers = {};
}

Publisher.prototype.subscribe = function(type, observer) {
  if (this.observers[type] === "undefined") {
    this.observers[type] = [];
  }
  this.observers[type].push(observer);
};

Publisher.prototype.publish = function(type, nextData) {
  this.observers[type].forEach(observer => {
    observer(nextData);
  });
};

module.exports = Publisher;

