(function () {
  const proto = ReactiveDict.prototype;
  if (!(proto.invalidateKey && proto.invalidateKey.constructor === Function)) {
    proto.invalidateKey = function (key) {
      if (this.keyDeps[key]) {
        this.keyDeps[key].changed()
      }
    }
  }
})()
